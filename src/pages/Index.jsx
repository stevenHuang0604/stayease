import HotelsContainer from "../features/main/HotelsContainer";
import ReservationsContainer from "../features/reservations/ReservationsContainer";
import Search from "../ui/Search";

function Index() {
  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <Search />
      <HotelsContainer />
      <ReservationsContainer page="app" />
    </main>
  );
}

export default Index;
