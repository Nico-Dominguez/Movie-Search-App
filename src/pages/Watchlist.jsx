import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieList from "./Home/MovieList";
import Pagination from "../components/Pagination";
import { useWatchlist } from "../components/WatchlistContext";

const Watchlist = () => {
  const { watchlist, toggleWatchlist } = useWatchlist();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = watchlist.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="h-[208px] bg-slate-950 text-white flex items-center p-3 justify-evenly bg-[url(/hero-bg.png)] object-cover">
        <h1 className="text-3xl font-extrabold">My Watchlist</h1>
        <Link to={".."} className="text-xl font-semibold">
          Search for movies
        </Link>
      </div>
      <MovieList
        movies={currentMovies}
        toggleWatchlist={toggleWatchlist}
        watchlist={watchlist}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(watchlist.length / moviesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Watchlist;
