import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HoverItems from "./components/HoverItems";

function Layout() {
  return (
    <>
      <Header />
      <main className="w-full h-auto relative">
        <Outlet />
      </main>
      <Footer />
      <HoverItems />
    </>
  );
}

export default Layout;
