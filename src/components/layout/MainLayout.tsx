import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className=" w-screen h-screen">
      <Navbar />
      <div className=" w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
