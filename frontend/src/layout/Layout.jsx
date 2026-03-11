import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="h-screen max-w-[1400px] mx-auto flex flex-col">
        <header className="h-16 border-b z-50">
          <Header handleSidebar={handleSidebar} />
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`flex ${openSidebar ? "translate-x-0" : "-translate-x-full"} fixed top-18 h-screen left-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:mt-1.5 `}
          >
            <Sidebar />
          </div>
          {/* for overlay in mobile case when open sidebar */}
          {openSidebar && (
            <div
              className="fixed inset-0 bg-black/40 "
              onClick={handleSidebar}
            ></div>
          )}
          <main className="flex-1 w-full overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
