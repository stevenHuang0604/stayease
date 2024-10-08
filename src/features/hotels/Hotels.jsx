import Search from "../../ui/Search";
import HotelList from "./HotelList";

function Hotels() {
  return (
    <main className="flex min-h-full flex-col px-4 py-4 md:px-8 md:py-8 xl:px-14 xl:py-14">
      <Search />
      <HotelList />
    </main>
  );
}

export default Hotels;
