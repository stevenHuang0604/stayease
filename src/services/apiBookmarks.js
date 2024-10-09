import supabase from "./supabase";

export async function getBookmarks() {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*, hotels(*)");

  if (error) {
    console.error(error);
    throw new Error("Bookmarked hotels could not be loaded");
  }

  return bookmarks;
}

export async function toggleBookmark(hotelId) {
  // check
  const { data: bookmarks, error: readError } = await supabase
    .from("bookmarks")
    .select("*");

  if (readError) {
    console.error(readError);
    throw new Error("Bookmarked hotels could not be loaded");
  }

  // Check the hotel is already in the bookmarks or not
  const isExisted = bookmarks.some((bookmark) => bookmark.hotelId === hotelId);

  if (!isExisted) {
    // add bookmark
    const { data, error } = await supabase
      .from("bookmarks")
      .insert([{ hotelId }])
      .select("*, hotels(*)");

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
