import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import { WatchlistProvider } from "./components/WatchlistContext";

function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;
