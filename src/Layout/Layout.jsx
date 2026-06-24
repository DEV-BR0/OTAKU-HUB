import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
function Layout() {
  console.log("sallomm");

  return (
    <div className="app flex flex-col gap-[100px]">
      <Navbar />
      <div className="mt-[100px]">
        <main className="contenr">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
