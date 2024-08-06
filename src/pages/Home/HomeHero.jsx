import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="relative">
      <div className="mx-auto p-4 bg-slate-950 bg-[url(../../public/hero-bg.png)] h-[208px] flex items-center justify-around">
        <Link to={"/"} className="text-4xl font-bold mb-4 text-white">
          Find your film
        </Link>
        <Link to={"/watchlist"} className="text-xl font-bold mb-4 text-white">
          My Watchlist
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
