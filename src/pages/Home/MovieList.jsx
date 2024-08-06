import React from "react";
import Skeleton from "./Skeleton";

export default function MovieList({ movies, toggleWatchlist, watchlist }) {
  if (!movies || movies.length === 0) return <Skeleton />;
  return (
    <div className="mt-32 grid gap-4 px-32">
      {movies.map((film) => (
        <MovieCard
          key={film.imdbID}
          film={film}
          toggleWatchlist={toggleWatchlist}
          isInWatchlist={watchlist.some((m) => m.imdbID === film.imdbID)}
        />
      ))}
    </div>
  );
}

function MovieCard({ film, toggleWatchlist, isInWatchlist }) {
  return (
    <div className="flex w-3/4 gap-4 items-center justify-center mx-auto py-12 border-b-2 border-slate-400">
      <div>
        <img
          src={film.Poster}
          alt={film.Title}
          className="w-40 h-auto mx-auto"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{film.Title}</h1>
        <div className="flex gap-4 items-center">
          <p>{film.Runtime}</p>
          <p>{film.Genre}</p>
          <button
            onClick={() => toggleWatchlist(film)}
            className={`p-2 rounded-full ${
              isInWatchlist
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {isInWatchlist ? "★" : "☆"}
          </button>
        </div>
        <p>{film.Plot}</p>
      </div>
    </div>
  );
}
