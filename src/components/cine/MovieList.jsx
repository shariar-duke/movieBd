import React from "react";
import { getAllMovies } from "../../data/movies";
import MovieCard from "./MovieCard";
export default function MovieList() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
      
    </div>
  );
}
