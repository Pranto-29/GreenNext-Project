
// import React, { useContext } from 'react';
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase/firbase.int';

// const googleProvider = new GoogleAuthProvider();

// const Login = () => {
//   const { signIn, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Google Login
//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         setUser(result.user);
//         navigate('/'); 
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   // Email/Password Login
//   const handleLogin = (e) => {
//     e.preventDefault(); 
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signIn(email, password)
//       .then((result) => {
//         setUser(result.user); 
//         form.reset();
//         navigate('/'); 
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div className="flex justify-center min-h-screen items-center bg-pink-400">
//       <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//         <h2 className="text-2xl font-semibold text-center py-5">Login Your Account</h2>
//         <form onSubmit={handleLogin} className="card-body">
//           <label className="label font-bold">Email</label>
//           <input type="email" name="email" placeholder="Email" className="input" required />

//           <label className="label font-bold">Password</label>
//           <input type="password" name="password" placeholder="Password" className="input" required />

//           <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>

//           <button
//             type="button"
//             onClick={handleGoogleSignIn}
//             className="flex items-center justify-center gap-2 px-2 py-2 bg-blue border border-gray-300 rounded-lg shadow transition duration-300 mt-2 w-full"
//           >
//             <FcGoogle size={32} /> Sign In With Google
//           </button>

//           <p className="text-center text-[16px] mt-4">
//             Don't have an account?{' '}
//             <a href="/auth/register" className="text-green-700 font-semibold">Register</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firbase.int';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate('/'); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user); 
        form.reset();
        navigate('/'); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-400 px-4">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center py-5">Login Your Account</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <label className="label font-bold">Email</label>
          <input type="email" name="email" placeholder="Email" className="input w-full" required />

          <label className="label font-bold">Password</label>
          <input type="password" name="password" placeholder="Password" className="input w-full" required />

          <button type="submit" className="btn btn-neutral mt-4 w-full py-2 md:py-3 text-base md:text-lg">Login</button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 px-2 py-2 bg-blue border border-gray-300 rounded-lg shadow transition duration-300 mt-2 w-full"
          >
            <FcGoogle size={28} /> Sign In With Google
          </button>

          <p className="text-center text-sm sm:text-base mt-4">
            Don't have an account?{' '}
            <a href="/auth/register" className="text-green-700 font-semibold">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
