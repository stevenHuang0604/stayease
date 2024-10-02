import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleBookmark } from "../../services/apiBookmarks";
import toast from "react-hot-toast";

export function useUpdateBookmark() {
  const queryClient = useQueryClient();

  const { mutate: updateBookmark, isLoading: isUpdating } = useMutation({
    mutationFn: toggleBookmark,
    onSuccess: (data) => {
      if (data) {
        toast.success("bookmark successfully added");
      } else {
        toast.success("bookmark successfully deleted");
      }

      queryClient.invalidateQueries({
        queryKey: ["bookmarks"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBookmark, isUpdating };
}
