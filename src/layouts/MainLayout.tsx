import { Outlet } from "react-router-dom";
import Sidebar from "~/components/sidebar";
const MainLayout = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
