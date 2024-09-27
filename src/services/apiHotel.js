import supabase from "./supabase";

export async function getHotels() {
  const { data: hotels, error } = await supabase.from("hotels").select("*");

  if (error) {
    console.error(error);
    throw new Error("Hotels could not be loaded");
  }

  return hotels;
}
