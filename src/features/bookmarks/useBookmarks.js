import { useQuery } from "@tanstack/react-query";

import { getBookmarks } from "../../services/apiBookmarks";

export function useBookmarks() {
  const {
    data: bookmarks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
  });

  return { bookmarks, isLoading, isError, error };
}
