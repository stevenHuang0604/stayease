import HotelsContainer from "../features/main/HotelsContainer";
import ReservationsContainer from "../features/reservations/ReservationsContainer";
import Search from "../ui/Search";

function Index() {
  return (
    <main className="page-layout">
      <Search />
      <HotelsContainer />
      <ReservationsContainer page="app" />
    </main>
  );
}

export default Index;
