import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";

export default function App() {
  return (
    <div className="h-full pb-[80px]">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.8rem] mt-[10px]">
          <SideBar/>
          <MovieList/>
        </div>
      </main>
    </div>
  );
}
