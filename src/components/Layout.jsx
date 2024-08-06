import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <body className="bg-slate-800">
      <main className="container mx-auto min-h-screen bg-slate-50">
        <Outlet />
      </main>
    </body>
  );
};

export default Layout;
