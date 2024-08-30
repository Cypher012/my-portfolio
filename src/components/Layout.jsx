import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { NavLinks } from "./layout";
import Hamburger from "hamburger-react";
const Layout = () => {
  const [themeIcon, setThemeIcon] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleThemeIcon = () => {
    setThemeIcon(!themeIcon);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <main
        className={`${
          isOpen ? " h-screen overflow-y-hidden" : "min-h-screen"
        } block font-Poppins lg:pl-[18.75rem] min-h-screen`}
      >
        <nav className="bg-neutral-100 fixed w-full lg:hidden flex items-center h-16 px-3 py-3  dark:bg-gray-950 z-50">
          <Link
            to="/"
            className="text-3xl font-bold dark:text-gray-300 text-neutral-800"
          >
            Pro<span className="text-teal-500">file</span>
          </Link>
          <div className="ml-auto space-x-5 flex items-center">
            <button
              onClick={handleThemeIcon}
              className="h-10 w-10 bg-gray-200 z-50 dark:bg-gray-800 rounded-full items-center cursor-pointer "
            >
              <i
                className={`${
                  !themeIcon
                    ? "fa-solid fa-moon text-black"
                    : "fa-solid fa-sun text-white"
                } text-lg `}
              ></i>
            </button>
            <Hamburger
              color={!themeIcon ? "#2E3436" : "#D3D7CF"}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </nav>
        <aside
          className={`${
            isOpen ? "flex absolute top-0 z-50 h-full w-full" : "hidden"
          } lg:flex fixed top-0 left-0 w-[min(95%,300px)] h-screen  bg-white pt-10 lg:pt-28 flex-col  gap-y-10 dark:bg-gray-950  z-50`}
        >
          <button
            onClick={() => setOpen(false)}
            className="ml-auto mr-5 lg:hidden"
          >
            <i className="fa-solid fa-xmark  text-5xl dark:text-gray-300"></i>
          </button>

          <Link
            to="/"
            className="text-4xl font-semibold dark:text-gray-300 text-neutral-800 ms-10"
          >
            Pro<span className="text-teal-500">file</span>
          </Link>
          <nav className="flex flex-col gap-y-5 ms-10 mt-5">
            {NavLinks.map((nav) => {
              return (
                <NavLink
                  to={nav.link}
                  end
                  key={nav.name}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => {
                    return (
                      "space-x-3 hover:scale-105 duration-300  text-xl lg:text-base " +
                      (isActive
                        ? "text-black dark:text-white "
                        : "text-gray-600 dark:text-gray-400")
                    );
                  }}
                >
                  <i className={nav.icon}></i>
                  <span>{nav.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </aside>
        <section className="relative dark:bg-gray-900 bg-neutral-100 min-h-screen  w-full px-5">
          <button
            onClick={handleThemeIcon}
            className="lg:flex hidden h-12 w-20 bg-gray-300/50 z-50 dark:bg-gray-950/50 fixed top-1/2 -right-5 rounded-s-full pl-6 items-center cursor-pointer"
          >
            <i
              className={`${
                !themeIcon
                  ? "fa-solid fa-moon text-black"
                  : "fa-solid fa-sun text-white"
              } text-lg `}
            ></i>
          </button>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
