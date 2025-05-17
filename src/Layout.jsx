import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HoverItems from "./components/HoverItems";
import Sidebar from "./design/Sidebar";
import { useState } from "react";

function Layout() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Sidebar setShow={setShow} />}
      <Header show={show} setShow={setShow} />
      <main className="w-full h-auto relative">
        <Outlet />
      </main>
      <Footer />
      <HoverItems />
    </>
  );
}

export default Layout;
