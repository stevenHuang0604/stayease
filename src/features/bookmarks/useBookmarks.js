import { useQuery } from "@tanstack/react-query";

import { getBookmarks } from "../../services/apiBookmarks";

export function useBookmarks() {
  const {
    data: bookmarks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
  });

  return { bookmarks, isLoading, error };
}
