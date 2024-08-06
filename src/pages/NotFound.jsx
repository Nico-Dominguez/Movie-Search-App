import React from "react";
import HomeHero from "./Home/HomeHero";

const NotFound = () => {
  return (
    <div>
      <HomeHero />
      <h1 className="min-h-screen grid place-items-center text-4xl font-bold text-center">
        This page no longer exists. Please return home...
      </h1>
    </div>
  );
};

export default NotFound;
