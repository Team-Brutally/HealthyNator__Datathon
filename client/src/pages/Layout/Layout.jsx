import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
