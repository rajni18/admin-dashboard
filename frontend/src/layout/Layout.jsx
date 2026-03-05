import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="overflow-hidden flex">
          <Sidebar />
          <main className="w-full overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
