import React, { useCallback, useState, useEffect } from "react";
import { debounce } from "lodash";
import MovieList from "./Home/MovieList";
import useMovieSearch from "../hooks/useMovieSearch";
import HomeHero from "./Home/HomeHero";
import SearchForm from "./Home/SearchForm";
import Skeleton from "./Home/Skeleton";
import Pagination from "../components/Pagination";
import { useWatchlist } from "../components/WatchlistContext";

const Home = () => {
  const { movies, isLoading, error, totalResults, searchMovies } =
    useMovieSearch();
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { watchlist, toggleWatchlist } = useWatchlist();

  const debouncedSearch = useCallback(
    debounce((term) => {
      setShowSkeleton(false);
      setCurrentPage(1);
      setSearchTerm(term);
      searchMovies(term, 1);
    }, 300),
    [searchMovies]
  );

  const handleSearch = (term) => {
    debouncedSearch(term);
  };

  const handleClear = () => {
    setShowSkeleton(true);
    setSearchTerm("");
    searchMovies("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    searchMovies(searchTerm, page);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <HomeHero />
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/4 max-w-3xl">
        <SearchForm onSearch={handleSearch} onClear={handleClear} />
      </div>
      {isLoading || showSkeleton ? (
        <Skeleton />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <MovieList
            movies={movies}
            toggleWatchlist={toggleWatchlist}
            watchlist={watchlist}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / 10)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
