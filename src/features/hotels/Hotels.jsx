import Search from "../../ui/Search";
import HotelList from "./HotelList";

function Hotels() {
  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <Search />
      <HotelList />
    </main>
  );
}

export default Hotels;
