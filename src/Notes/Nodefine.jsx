import { Link } from "react-router-dom"
import Background from "../pages/backgraund/Backgraund";

function Nodefine() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center text-white flex-col gap-[20px]">
        <Background/>
        <p className="text-[140px] font-bold font-bold">404</p>
        <h1 className="text-[30px]">Ushbu Sahifa Topilmadi Iltmos Home Pagesga qayting</h1>

        <Link
          to={"/"}
          className="p-[10px] rounded-xl bg-white/6 backdrop-blur-lg border border-white/20"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Nodefine
