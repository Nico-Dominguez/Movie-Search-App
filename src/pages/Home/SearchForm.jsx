import React, { useState } from "react";

export default function SearchForm({ onSearch, onClear }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded border-2 border-slate-400 overflow-hidden shadow-lg"
    >
      <input
        className="flex-grow p-3 pl-6 focus:outline-none"
        type="text"
        placeholder="Search for a movie..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-slate-300 text-gray-700 font-semibold py-3 px-6 hover:bg-gray-500 hover:text-white transition duration-300"
      >
        Search
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="bg-red-500 text-white font-semibold py-3 px-4 hover:bg-red-600 transition duration-300"
      >
        Clear
      </button>
    </form>
  );
}
