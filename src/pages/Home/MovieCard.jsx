import React from "react";

const MovieCard = ({ movie, toggleWatchlist, isInWatchlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
        <button
          onClick={() => toggleWatchlist(movie)}
          className={`mt-2 p-2 rounded ${
            isInWatchlist ? "bg-yellow-500" : "bg-gray-200"
          }`}
        >
          {isInWatchlist ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
