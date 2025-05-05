import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="w-full h-auto">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
