import HotelsContainer from "../features/main/HotelsContainer";
import Search from "../ui/Search";

function Index() {
  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <Search />
      <HotelsContainer />
    </main>
  );
}

export default Index;
