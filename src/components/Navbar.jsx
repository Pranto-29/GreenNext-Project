
// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false); // Mobile menu toggle

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully!"))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold">🌴 GreenNest</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Center Links */}
        <div className={`flex flex-col md:flex-row gap-4 md:gap-6 
          ${open ? "block" : "hidden"} md:flex mt-2 md:mt-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline transition-all"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline transition-all"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* Right Section: User Info & Auth */}
        <div className={`flex flex-col md:flex-row items-center gap-4 
          ${open ? "block mb-3" : "hidden"} md:flex mt-2 md:mt-0`}
        >
          {user ? (
            <>
              {/* User Photo */}
              {user.photoURL && (
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                />
              )}

              {/* Logout Button */}
              <button
                onClick={handleLogOut}
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/auth/register"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

