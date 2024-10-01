import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleBookmark } from "../../services/apiBookmarks";
import { useLocation, useSearchParams } from "react-router-dom";

export function useUpdateHotel() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  let queryKey;

  const destination = searchParams.get("destination");

  if (location.pathname === "/app/hotels") {
    queryKey = ["hotels", destination];
  }

  if (location.pathname === "/app/bookmarks") {
    queryKey = ["bookmarks"];
  }

  const { mutate: updateBookmark, isLoading: isAdding } = useMutation({
    mutationFn: toggleBookmark,
    onSuccess: () => {
      toast.success("hotel successfully udpated");

      queryClient.invalidateQueries({
        queryKey,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBookmark, isAdding };
}
