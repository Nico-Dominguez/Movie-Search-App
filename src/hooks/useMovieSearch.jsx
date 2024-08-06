import { useState, useCallback } from "react";

export default function useMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const BASE_URL = `https://www.omdbapi.com/?apikey=c47d8db3&`;

  const searchMovies = useCallback(async (searchTerm, page = 1) => {
    setIsLoading(true);
    setError(null);

    if (!searchTerm) {
      setMovies([]);
      setIsLoading(false);
      setTotalResults(0);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}s=${searchTerm}&page=${page}`);
      const data = await response.json();
      setMovies(data.Search || []);
      setTotalResults(parseInt(data.totalResults) || 0);
    } catch (error) {
      setError("Error fetching movie data");
      console.error("Error fetching movie data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { movies, isLoading, error, totalResults, searchMovies };
}
