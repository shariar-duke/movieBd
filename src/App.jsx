import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";

export default function App() {
  return (
    <div className="h-[100vh]">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.8rem]">
          <SideBar/>
          <MovieList/>
        </div>
      </main>
    </div>
  );
}
