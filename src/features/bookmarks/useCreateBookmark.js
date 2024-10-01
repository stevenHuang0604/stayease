import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBookmark } from "../../services/apiBookmarks";
import toast from "react-hot-toast";

export function useCreateBookmark() {
  const queryClient = useQueryClient();

  const { mutate: addBookmark, isLoading: isCreating } = useMutation({
    mutationFn: createBookmark,
    onSuccess: () => {
      toast.success("hotel successfully added");

      queryClient.invalidateQueries({
        queryKey: ["bookmarks"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addBookmark, isCreating };
}
