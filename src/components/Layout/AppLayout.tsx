import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="mb-22 flex w-full overflow-x-auto overflow-y-auto lg:mb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
