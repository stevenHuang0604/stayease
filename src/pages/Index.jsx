import HotelsContainer from "../features/main/HotelsContainer";
import ReservationsContainer from "../features/reservations/ReservationsContainer";
import Search from "../ui/Search";

function Index() {
  return (
    <main className="px-4 py-4 md:px-8 md:py-8 xl:px-14 xl:py-14">
      <Search />
      <HotelsContainer />
      <ReservationsContainer page="app" />
    </main>
  );
}

export default Index;
