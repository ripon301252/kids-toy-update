import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userImg from "../assets/user.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <nav className="bg-[#001931] text-white px-4 md:px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          KidsToy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-[16px] font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/allItems"
              className={({ isActive }) =>
                isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
              }
            >
              All Items
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
              }
            >
              Support
            </NavLink>
          </li>

          {/* Only show after login */}
          {user && (
            <li>
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  isActive ? "text-purple-700 border-b-2 rounded-lg px-2" : "hover:text-purple-700"
                }
              >
                My Profile
              </NavLink>
            </li>
          )}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">

          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL || userImg}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "User"}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-sm bg-purple-700 text-white border-none hover:bg-purple-600 shadow-none"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="btn btn-sm bg-purple-700 text-white border-none hover:bg-purple-600 shadow-none"
            >
              Login / Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <IoCloseSharp size={28} /> : <GiHamburgerMenu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-screen mt-4 pb-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 text-white text-lg">

          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/allItems" onClick={() => setOpen(false)}>All Items</NavLink>
          <NavLink to="/aboutUs" onClick={() => setOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/support" onClick={() => setOpen(false)}>Support</NavLink>

          {user && (
            <NavLink to="/myProfile" onClick={() => setOpen(false)}>
              My Profile
            </NavLink>
          )}

          {/* Login / Logout */}
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                
                className="btn btn-sm bg-purple-700 text-white border-none hover:bg-purple-600 w-full shadow-none"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signin"
                 className="btn btn-sm bg-purple-700 text-white border-none hover:bg-purple-600 w-full shadow-none"
                onClick={() => setOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
