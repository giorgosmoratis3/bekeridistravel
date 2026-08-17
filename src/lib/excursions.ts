import { supabase } from "@/integrations/supabase/client";

export type ExcursionKind = "ready" | "custom";

export type Excursion = {
  id: string;
  kind: ExcursionKind;
  name: string;
  date_label: string | null;
  tag: string;
  duration: string;
  location: string;
  description: string;
  image_url: string;
  sort_order: number;
  published: boolean;
};

export async function fetchExcursions(includeUnpublished = false): Promise<Excursion[]> {
  let query = supabase
    .from("excursions")
    .select(
      "id,kind,name,date_label,tag,duration,location,description,image_url,sort_order,published",
    )
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (!includeUnpublished) query = query.eq("published", true);

  const { data, error } = await query;
  if (error) {
    console.error("[excursions] load failed", error.message);
    return [];
  }
  return (data ?? []) as Excursion[];
}
