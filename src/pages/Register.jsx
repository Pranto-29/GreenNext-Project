

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';



const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // পেইজ রিলোড বন্ধ
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            form.reset();
            navigate("/"); // সফল হলে হোম পেজে নেভিগেট
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-semibold text-center py-5">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <label className="label font-bold">Name</label>
          <input type="text" name="name" placeholder="Name" className="input" required />

          <label className="label font-bold">Photo URL</label>
          <input type="text" name="photo" placeholder="Photo URL" className="input" required />

          <label className="label font-bold">Email</label>
          <input type="email" name="email" placeholder="Email" className="input" required />

          <label className="label font-bold">Password</label>
          <input type="password" name="password" placeholder="Password" className="input" required />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

