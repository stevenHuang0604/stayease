import Search from "../features/main/Search";
import { getHotels } from "../services/apiHotel";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Index() {
  const { hotels, isLoading } = useHotels();
  console.log(isLoading);

  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <Search />
      {isLoading ? <Spinner /> : "hotel card"}
    </main>
  );
}

export default Index;

function useHotels() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return { hotels, isLoading, error };
}
