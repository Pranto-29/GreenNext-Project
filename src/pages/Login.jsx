
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firbase.int';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const handleGoogleSingIn = () => {
    // console.log("Google Button Clickd");
    signInWithPopup( auth, googleProvider)
  }
  const { signIn, setUser } = useContext(AuthContext); // signIn: Firebase login ফাংশন
  const navigate = useNavigate();

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
    <div className="flex justify-center min-h-screen items-center bg-pink-400">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-semibold text-center py-5">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label font-bold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            required
          />

          <label className="label font-bold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
          <button onClick={handleGoogleSingIn}><FcGoogle />Sign In With Google</button>

          <p className="text-center text-[16px] mt-4">
            Don't have an account?{' '}
            <a href="/auth/register" className="text-green-700 font-semibold">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
