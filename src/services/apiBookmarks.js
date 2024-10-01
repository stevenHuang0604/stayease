import supabase from "./supabase";

export async function getBookmarks() {
  const { data: hotel, error } = await supabase
    .from("hotels")
    .select("*")
    .eq("bookmarked", true);

  if (error) {
    console.error(error);
    throw new Error("Bookmarked hotels could not be loaded");
  }

  return hotel;
}

export async function toggleBookmark(id) {
  // fetch current hotel state
  const { data: currentHotel } = await supabase
    .from("hotels")
    .select("bookmarked")
    .eq("id", id)
    .single();

  // toggle bookmarked state
  const newBookmarkedState = !currentHotel.bookmarked;

  const { data: hotel, error } = await supabase
    .from("hotels")
    .update({ bookmarked: newBookmarkedState })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Hotel could not be updated");
  }

  return hotel;
}
