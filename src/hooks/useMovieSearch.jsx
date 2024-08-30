import { useState, useCallback } from "react";

export default function useMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  console.log(apiKey); // Check if this outputs the correct API key
  const BASE_URL = `https://www.omdbapi.com/?apikey=${apiKey}&`;

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
      const url = `${BASE_URL}s=${searchTerm}&page=${page}`;
      console.log(url); // Log the complete URL
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setMovies(data.Search || []);
        setTotalResults(parseInt(data.totalResults) || 0);
      } else {
        setError("Invalid API key or other authorization error");
      }
    } catch (error) {
      setError("Error fetching movie data");
      console.error("Error fetching movie data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { movies, isLoading, error, totalResults, searchMovies };
}
