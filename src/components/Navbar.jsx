


// // // import React, { use } from "react";
// // // import { NavLink } from "react-router-dom";
// // // import { AuthContext } from "../provider/AuthProvider";





// // // const Navbar = () => {


// // //   const {user, logOut} = use(AuthContext);
// // //   const handleLogOut = () => {
// // //     console.log("user trying to logout");
// // //     logOut()
// // //     .then(() => {
// // //       alert("You Logged Out Succesfully");
// // //     })
// // //     .catch((error) => {
// // //       console.log(error);
// // //     })
// // //   }



// // //   return (
// // //     <nav className="bg-green-700 text-white p-4 shadow-md">
     
// // //       <div className="container mx-auto flex justify-between items-center">
// // //         {/* Logo */}
// // //         <h1 className="text-2xl font-bold">🌴GreenNest</h1>
       
// // //         {/* Center Links */}
// // //         <div className="flex space-x-6 justify-center flex-1">
// // //           <NavLink
// // //             to="/"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? "underline font-semibold"
// // //                 : "hover:underline transition-all"
// // //             }
// // //           >
// // //             Home
// // //           </NavLink>
// // //           <NavLink
// // //             to="/about-us"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? "underline font-semibold"
// // //                 : "hover:underline transition-all"
// // //             }
// // //           >
// // //             Plants
// // //           </NavLink>
// // //           <NavLink
// // //             to="/profile"
// // //             className={({ isActive }) =>
// // //               isActive
// // //                 ? "underline font-semibold"
// // //                 : "hover:underline transition-all"
// // //             }
// // //           >
// // //             Profile
// // //           </NavLink>
// // //         </div>

// // //         {/* Right Button */}
// // //         {/* <div>
         
// // //           (user ? (
// // //             <button onClick={handleLogOut} className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition-all">LogOut</button>
// // //           ))
// // //           <NavLink
          
// // //             to="/auth/login"
// // //             className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition-all"
// // //           >
// // //             Sign In
// // //           </NavLink>
// // //         </div> */}
// // //         <div className="login-btn flex gap-5" >
// // //          <img className="w-12 rounded" src="{`${user ? user.photoURL : }`}"></img>
// // //   {user ? (
// // //     <button
// // //       onClick={handleLogOut}
// // //       className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
// // //     >
// // //       Log Out
// // //     </button>
// // //   ) : (
    
// // //     <NavLink 
  
// // //       to="/auth/login"
// // //       className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
// // //     >
// // //       Sign In
// // //     </NavLink>
// // //   )}
// // // </div>

// // //       </div>
// // //       <div>
// // //       </div>
// // //        <div className="">{user && user.email}</div>
 
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // // src/components/Navbar.jsx
// // import React, { useContext } from "react";
// // import { NavLink } from "react-router-dom";
// // import { AuthContext } from "../provider/AuthProvider";

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);

// //   const handleLogOut = () => {
// //     logOut()
// //       .then(() => alert("You Logged Out Successfully!"))
// //       .catch((error) => console.error(error));
// //   };

// //   return (
// //     <nav className="bg-green-700 text-white shadow-md">
// //       <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
// //         {/* Logo */}
// //         <h1 className="text-2xl font-extrabold">🌴 GreenNest</h1>

// //         {/* Center Links */}
// //         <div className="flex space-x-6 mt-2 md:mt-0">
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
// //         <div className="flex items-center gap-4 mt-2 md:mt-0">
// //           {user ? (
// //             <>
// //               {/* User Photo */}
// //               <img className="w-12 rounded-4xl "src={`${user ? user.photoURL : ""}`} alt=""></img>
              

// //               {/* Logout Button */}
// //               <button
// //                 onClick={handleLogOut}
// //                 className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
// //               >
// //                 Log Out
// //               </button>
// //             </>
// //           ) : (
// //             <NavLink
// //               to="/auth/login"
// //               className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
// //             >
// //               {user && (
// //         <div className="text-white text-center text-sm mt-1">
// //           {user.email}
// //         </div>
// //       )}
// //               Sign In
// //             </NavLink>
// //           )}
// //         </div>
// //       </div>

// //       {/* Show user email below navbar if logged in */}
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React, { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         alert("You Logged Out Successfully!");
//         navigate("/auth/login"); 
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <nav className="bg-green-700 text-white shadow-md">
//       <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-extrabold">🌴 GreenNest</h1>

//         {/* Center Links */}
//         <div className="flex space-x-6 mt-2 md:mt-0">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "underline font-semibold" : "hover:underline transition-all"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className={({ isActive }) =>
//               isActive ? "underline font-semibold" : "hover:underline transition-all"
//             }
//           >
//             Plants
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               isActive ? "underline font-semibold" : "hover:underline transition-all"
//             }
//           >
//             Profile
//           </NavLink>
//         </div>

//         {/* Right Section: Auth Buttons */}
//         <div className="flex items-center gap-4 mt-2 md:mt-0">
//           {user ? (
//             <>
//               {user.photoURL && (
//                 <img
//                   className="w-12 h-12 rounded-full"
//                   src={user.photoURL}
//                   alt={user.displayName || "User"}
//                 />
//               )}
//               <span className="text-white">{user.email}</span>
//               <button
//                 onClick={handleLogOut}
//                 className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
//               >
//                 Log Out
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink
//                 to="/auth/login"
//                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 to="/auth/register"
//                 className="bg-white text-green-700 border border-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
//               >
//                 Register
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out Successfully!");
        navigate("/auth/login"); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold">🌴 GreenNest</h1>

        {/* Center Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
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

        {/* Right Section: Auth Buttons */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
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
