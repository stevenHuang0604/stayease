import supabase from "./supabase";

export async function getBookmarks() {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Bookmarked hotels could not be loaded");
  }

  return bookmarks;
}

export async function toggleBookmark(hotelId) {
  // check
  const { data: bookmarks, error: readEError } = await supabase
    .from("bookmarks")
    .select("*");

  if (readEError) {
    console.error(readEError);
    throw new Error("Bookmarked hotels could not be loaded");
  }

  const isAdded = bookmarks.some((bookmark) => bookmark.hotelId === hotelId);

  if (!isAdded) {
    // add bookmark
    const { data, error } = await supabase
      .from("bookmarks")
      .insert([{ hotelId }])
      .select();

    if (error) {
      console.error(error);
      throw new Error("Hotel could not be added");
    }

    return data;
  } else {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("hotelId", hotelId);

    if (error) {
      console.error(error);
      throw new Error("Hotel could not be deleted");
    }
  }
}
