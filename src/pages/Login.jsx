// import React, { use, useState } from 'react';
// import { Link } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// const googleProvider = new GoogleAuthProvider();

// const Login = () => {

//   const singInWithGoogle = () => {
//     signInWithPopup( auth) 
//   }

//   const [error, setError] = useState();
//   const {signIn} = use(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log({email, password})
//     signIn(email , password)
//     .then((result) =>{
//       const user = result.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.meassge;
//       // alert(errorCode,errorMessage);
//       setError(errorCode);
//     })
  
//   }
//     return (
//         <div className='flex justify-center min-h h-screen items-center bg-green-300'>
//             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                 <h2 className='font-semibold text-2xl justify-center items-center text-center py-5 '>Login Your Account</h2>
//       <form onSubmit={handleLogin} className="card-body">
//         <fieldset className="fieldset">
//           {/*- emaill--*/}
//           <label className="label font-bold text-black">Email</label>
//           <input name='email' type="email font-bold " className="input" placeholder="Email" required/>

//           {/*--Password --*/}
//           <label className="label font-bold text-bold">Password</label>
//           <input name='password' type="password" className="input" placeholder="Password" required />

//           <div><a className="link link-hover font-bold text-bold">Forgot password?</a></div>
//           {error && <p className='text-red-500 w-xs'>{error}</p>}
//           <button className="btn btn-neutral mt-4">Login</button>
//           <button onClick={singInWithGoogle}>
//              SignIn With Google
//           </button>
//           <p className='text-center text-[20px] text-emerald-400 pt-5'>Dont,Have a Account <Link className='text-red-500' to="/auth/register">Register</Link></p>
//         </fieldset>
//       </form>
//     </div>
//         </div>
//     );
// };

// export default Login;

import React, { useContext } from 'react';
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
    e.preventDefault(); // পেইজ রিলোড বন্ধ
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
          <button onClick={handleGoogleSingIn}>Sign In With Google</button>

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
