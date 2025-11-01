
// // src/components/Navbar.jsx
// // import React, { useContext, useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { AuthContext } from "../provider/AuthProvider";

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);
// //   const [open, setOpen] = useState(false); // Mobile menu toggle

// //   const handleLogOut = () => {
// //     logOut()
// //       .then(() => alert("You Logged Out Successfully!"))
// //       .catch((error) => console.error(error));
// //   };

// //   return (
// //     <nav className="bg-green-700 text-white shadow-md">
// //       <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
// //         <h1 className="text-2xl font-extrabold">🌴 GreenNest</h1>
// //         <button
// //           className="md:hidden text-2xl"
// //           onClick={() => setOpen(!open)}
// //         >
// //           ☰
// //         </button>

// //         {/* Center Links */}
// //         <div className={`flex flex-col md:flex-row gap-4 md:gap-6 
// //           ${open ? "block" : "hidden"} md:flex mt-2 md:mt-0`}
// //         >
// //           <NavLink
// //             to="/"
// //             className={({ isActive }) =>
// //               isActive ? "underline font-semibold" : "hover:underline transition-all"
// //             }
// //           >
// //             Home
// //           </NavLink>
// //           <NavLink
// //             to="/about-us"
// //             className={({ isActive }) =>
// //               isActive ? "underline font-semibold" : "hover:underline transition-all"
// //             }
// //           >
// //             Plants
// //           </NavLink>
// //           <NavLink
// //             to="/profile"
// //             className={({ isActive }) =>
// //               isActive ? "underline font-semibold" : "hover:underline transition-all"
// //             }
// //           >
// //             Profile
// //           </NavLink>
// //         </div>

// //         {/* Right Section: User Info & Auth */}
// //         <div className={`flex flex-col md:flex-row items-center gap-4 
// //           ${open ? "block mb-3" : "hidden"} md:flex mt-2 md:mt-0`}
// //         >
// //           {user ? (
// //             <>
// //               {/* User Photo */}
// //               {user.photoURL && (
// //                 <img
// //                   className="w-12 h-12 rounded-full"
// //                   src={user.photoURL}
// //                   alt={user.displayName || "User"}
// //                 />
// //               )}

// //               {/* Logout Button */}
// //               <button
// //                 onClick={handleLogOut}
// //                 className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
// //               >
// //                 Log Out
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <NavLink
// //                 to="/auth/login"
// //                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
// //               >
// //                 Sign In
// //               </NavLink>
// //               <NavLink
// //                 to="/auth/register"
// //                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
// //               >
// //                 Register
// //               </NavLink>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [open, setOpen] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => alert("You Logged Out Successfully!"))
//       .catch((error) => console.error(error));
//   };

//   const menuItems = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) => 
//           isActive ? "text-green-200 font-semibold" : "hover:text-green-300 text-center"
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/plants"
//         className={({ isActive }) =>
//           isActive ? "text-green-200 font-semibold text-center" : "hover:text-green-300"
//         }
//       >
//         Plants
//       </NavLink>

//       <NavLink
//         to="/profile"
//         className={({ isActive }) =>
//           isActive ? "text-green-200 font-semibold text-center" : "hover:text-green-300"
//         }
//       >
//         Profile
//       </NavLink>
//     </>
//   );

//   return (
//     <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-extrabold flex items-center gap-1">
//           🌴 <span>GreenNest</span>
//         </h1>

//         {/* Hamburger Button */}
//         <button 
//           className="md:hidden text-3xl focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "✖" : "☰"}
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           {menuItems}

//           {user ? (
//             <div className="flex items-center gap-3">
//               {user.photoURL && (
//                 <img
//                   className="w-10 h-10 rounded-full"
//                   src={user.photoURL}
//                   alt="User"
//                 />
//               )}
//               <button
//                 onClick={handleLogOut}
//                 className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex gap-2">
//               <NavLink
//                 to="/auth/login"
//                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 to="/auth/register"
//                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition"
//               >
//                 Register
//               </NavLink>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <div className="md:hidden bg-green-600 px-6 py-4 space-y-4 flex flex-col animate-fade-down">
//           {menuItems}

//           {user ? (
//             <div className="flex flex-col gap-3">
//               {user.photoURL && (
//                 <img
//                   className="w-12 h-12 rounded-full mx-auto"
//                   src={user.photoURL}
//                   alt="User"
//                 />
//               )}
//               <button
//                 onClick={handleLogOut}
//                 className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-2">
//               <NavLink
//                 to="/auth/login"
//                 className="bg-green text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition text-center"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 to="/auth/register"
//                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition text-center"
//               >
//                 Register
//               </NavLink>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully!"))
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-200 font-semibold"
            : "hover:text-green-300 transition-all"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/plants"
        className={({ isActive }) =>
          isActive
            ? "text-green-200 font-semibold"
            : "hover:text-green-300 transition-all"
        }
      >
        Plants
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "text-green-200 font-semibold"
            : "hover:text-green-300 transition-all"
        }
      >
        Profile
      </NavLink>
    </>
  );

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-extrabold flex items-center gap-1">
            🌴 <span>GreenNest</span>
          </h1>
        </div>

        {/* Menu Center */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          {menuItems}
        </div>

        {/* Auth Buttons Right */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              {user.photoURL && (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              )}
              <button
                onClick={handleLogOut}
                className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/auth/register"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-600 px-6 py-4 space-y-4 flex flex-col animate-fade-down">
          {menuItems}

          {user ? (
            <div className="flex flex-col gap-3 items-center">
              {user.photoURL && (
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              )}
              <button
                onClick={handleLogOut}
                className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 items-center">
              <NavLink
                to="/auth/login"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition text-center"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/auth/register"
                className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition text-center"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

