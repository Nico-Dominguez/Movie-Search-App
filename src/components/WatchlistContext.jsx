import React, { createContext, useState, useEffect, useContext } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    setWatchlist(storedWatchlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const index = prev.findIndex((m) => m.imdbID === movie.imdbID);
      if (index === -1) {
        return [...prev, movie];
      } else {
        return prev.filter((m) => m.imdbID !== movie.imdbID);
      }
    });
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
