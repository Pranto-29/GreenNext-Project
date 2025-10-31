

// export default Profile;
import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext); // AuthProvider থেকে updateUser ফাংশন ব্যবহার কর
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
   
      await updateUser({ displayName: name, photoURL: photo });
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to update profile. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">My Profile</h2>

      <div className="bg-pink-400 shadow-lg rounded-2xl p-8 w-96 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-2 border-green-600"
        />
        <h3 className="text-xl font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-900 mb-4">{user?.email}</p>

        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            className="w-full border border-pink-600 rounded-lg p-2 text-blue-600 font-bold"
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter new photo URL"
            className="w-full border border-pink-300 rounded-lg p-2 text-blue-600 font-bold"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Update Profile
          </button>
        </form>

        {message && <p className="mt-3 text-green-700 font-medium">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
