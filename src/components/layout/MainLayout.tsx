import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Navbar />
      <div className=" w-full min-h-screen mt-[95px] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
