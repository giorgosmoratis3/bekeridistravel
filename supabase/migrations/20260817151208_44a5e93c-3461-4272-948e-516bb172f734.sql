CREATE TYPE public.app_role AS ENUM ('admin','user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user_role()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created_role
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_role();

CREATE TABLE public.excursions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL DEFAULT 'ready',
  name text NOT NULL,
  date_label text,
  tag text NOT NULL DEFAULT '',
  duration text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.excursions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.excursions TO authenticated;
GRANT ALL ON public.excursions TO service_role;
ALTER TABLE public.excursions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published excursions" ON public.excursions FOR SELECT TO anon, authenticated USING (published = true OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can insert excursions" ON public.excursions FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update excursions" ON public.excursions FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can delete excursions" ON public.excursions FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER excursions_updated_at BEFORE UPDATE ON public.excursions
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Admins can upload excursion images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'excursions' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can read excursion images" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'excursions' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update excursion images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'excursions' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can delete excursion images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'excursions' AND public.has_role(auth.uid(),'admin'));

INSERT INTO public.excursions (kind, name, date_label, tag, duration, location, description, image_url, sort_order) VALUES
('ready','Τρίκερι','23 Μαΐου','Μονοήμερη Οδική','1 ημέρα','Τρίκερι, Πήλιο','Μονοήμερη οδική εκδρομή στο γραφικό Τρίκερι του Πηλίου, με χρόνο για περίπατο και γεύμα δίπλα στη θάλασσα.','/excursions/excursion-trikeri.jpg',10),
('ready','Παναγία Προυσιώτισσα','7 Ιουνίου','Προσκύνημα','1 ημέρα','Ευρυτανία','Μονοήμερη οδική εκδρομή — επίσκεψη στο ιστορικό μοναστήρι της Παναγίας Προυσιώτισσας στα βουνά της Ευρυτανίας.','/excursions/excursion-prousiotissa.jpg',20),
('ready','Τήνος','30 – 31 Αυγούστου','Διήμερη','2 ημέρες','Τήνος','Διήμερη εκδρομή στο νησί της Τήνου, με προσκύνημα στην Παναγία και ελεύθερο χρόνο στη Χώρα.','/excursions/excursion-tinos.jpg',30),
('ready','Τήνος — Προσκύνημα & Περιήγηση','16 – 17 Σεπτεμβρίου','Διήμερη Προσκυνηματική','2 ημέρες','Τήνος','Ταξίδι με καράβι · Προσκύνημα Αγίας Πελαγίας · Περιήγηση στο νησί με έμπειρους συνοδούς.','/excursions/excursion-tinos-pilgrimage.jpg',40),
('custom','Αθήνα',NULL,'City Break','Κατ'' επιλογή','Αττική','City break στην πρωτεύουσα: Ακρόπολη, Πλάκα, μουσεία και shopping. Διοργανώνουμε το πρόγραμμα σύμφωνα με τις ανάγκες σας.','/excursions/destination-athens.jpg',10),
('custom','Ευρώπη',NULL,'Εξωτερικό','Κατ'' επιλογή','Κεντρική Ευρώπη','Οργανωμένα ταξίδια σε μεγάλους ευρωπαϊκούς προορισμούς με αεροπορικά εισιτήρια, ξενοδοχεία και ξεναγήσεις της επιλογής σας.','/excursions/service-trips.jpg',20),
('custom','Νησιά Αιγαίου',NULL,'Πολυήμερο','Κατ'' επιλογή','Κυκλάδες','Πολυήμερη απόδραση στα ομορφότερα νησιά του Αιγαίου με διαμονή, μεταφορές και επιλεγμένες ξεναγήσεις στα μέτρα σας.','/excursions/destination-island.jpg',30),
('custom','Μετέωρα',NULL,'Ημερήσια Εκδρομή','Κατ'' επιλογή','Καλαμπάκα','Επίσκεψη στα μοναστήρια των Μετεώρων με ξενάγηση. Διοργανώνουμε την εκδρομή την ημερομηνία που σας εξυπηρετεί.','/excursions/destination-meteora.jpg',40),
('custom','Ορεινά Χωριά',NULL,'Φύση','Κατ'' επιλογή','Πήλιο','Διαδρομή στα γραφικά ορεινά χωριά με γεύμα σε παραδοσιακή ταβέρνα και περίπατο στη φύση.','/excursions/destination-village.jpg',50),
('custom','Πήλιο & Παραλίες',NULL,'Σαββατοκύριακο','Κατ'' επιλογή','Μαγνησία','Απόδραση στο Πήλιο με στάσεις σε γραφικά χωριά, μοναδικές παραλίες και γεύσεις της παραδοσιακής κουζίνας.','/excursions/excursion-pelion.jpg',60),
('custom','Προσκυνηματικά',NULL,'Θρησκευτικός Τουρισμός','Κατ'' επιλογή','Ελλάδα','Οργανωμένα προσκυνήματα σε σημαντικά μοναστήρια και ιερούς τόπους της Ελλάδας με έμπειρους συνοδούς.','/excursions/excursion-prousiotissa.jpg',70),
('custom','Θεσσαλονίκη',NULL,'City Break','Κατ'' επιλογή','Μακεδονία','Διήμερη ή τριήμερη απόδραση στη συμπρωτεύουσα: παραλιακή, Άνω Πόλη, μουσεία και αυθεντική γαστρονομία.','/excursions/excursion-thessaloniki.jpg',80),
('custom','Επτάνησα',NULL,'Πολυήμερο','Κατ'' επιλογή','Ιόνιο','Πολυήμερη εκδρομή σε Κέρκυρα, Λευκάδα ή Κεφαλονιά με μεταφορά, διαμονή και ξεναγήσεις στα ομορφότερα σημεία.','/excursions/excursion-ionian.jpg',90),
('custom','Σχολικές Εκδρομές',NULL,'Ομαδικό','Κατ'' επιλογή','Πανελλαδικά','Ασφαλείς και οργανωμένες σχολικές εκδρομές με έμπειρους οδηγούς και συνοδούς, σχεδιασμένες για κάθε ηλικία.','/excursions/excursion-school.jpg',100);