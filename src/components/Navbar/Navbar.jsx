import { NavLink } from "react-router-dom";
import Logo from "../../../public/1.png";
function Navbar() {
  return (
    <>
      <div className="flex justify-center  items-center mt-[10px]  p-[20px] items-center gap-[40px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl ">
        <div className="flex justify-between w-full contenr  ">
          <div className="w-[25%] h-[100%]">
            <img
              src={Logo}
              alt="Logo"
              className=" items-center w-[30%] gap-[40px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl flex justify-center"
            />
          </div>
          <div className="menu text-white flex items-center w-[30%] gap-[40px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl flex justify-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/top"}>Top</NavLink>
            <NavLink to={"/random"}>Lucky</NavLink>
            <NavLink to={"/me"}>Me</NavLink>
          </div>
          <div className="flex gap-[10px] w-[15%]">
            <NavLink
              to={"/login"}
              className="flex w-[50%] items-center text-white gap-[20px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl flex justify-center"
            >
              Login
            </NavLink>
            <NavLink
              to={"/login"}
              className="flex w-[50%] items-center text-white gap-[20px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl flex justify-center"
            >
              Sing Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
