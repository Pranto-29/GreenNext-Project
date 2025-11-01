


import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from 'react-router-dom';
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
      .then(result => {
        setUser(result.user);
        navigate('/');
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-300 px-4 sm:px-6 lg:px-8">

      <div className="card bg-blue-300 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-xl p-6 sm:p-8 md:p-10 rounded-xl">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-3">
          
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral w-full mt-3 py-2 md:py-3 font-semibold"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 border rounded-lg py-2 md:py-3 w-full shadow-sm hover:shadow-md transition"
          >
            <FcGoogle size={24} />
            <span className="font-semibold">Sign in with Google</span>
          </button>
        </form>

        <p className="text-center text-sm sm:text-base mt-4">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-700 font-bold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
