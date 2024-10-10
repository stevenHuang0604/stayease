import supabase from "./supabase";

export async function getHotelsByDestination(destination) {
  const { data: hotels, error } = await supabase
    .from("hotels")
    .select()
    .or(`city.ilike.%${destination}%,country.ilike.%${destination}%`);

  if (error) {
    console.error(error);
    throw new Error("Hotels could not be loaded");
  }

  return hotels;
}

export async function getPopularHotels() {
  const { data: popularHotels, error } = await supabase
    .from("hotels")
    .select("*")
    .gte("id", 1)
    .lte("id", 5)
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Popular hotels could not be loaded");
  }

  return popularHotels;
}

export async function getHotelById(id) {
  const { data: hotel, error } = await supabase
    .from("hotels")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Hotel could not be loaded");
  }

  return hotel;
}
