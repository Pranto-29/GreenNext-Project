

// import React, { useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { categories } from "../components/CategorySection";
// import { AuthContext } from "../provider/AuthProvider";

// import { Outlet } from "react-router";

// const PlantDetails = () => {

//   const { user } = useContext(AuthContext);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const plant = categories.find((p) => p.id === parseInt(id));

//   const [name, setName] = useState(user?.displayName || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [success, setSuccess] = useState(false);

//   if (!plant) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
//         <h1 className="text-4xl font-bold text-red-500 mb-4">Plant Not Found!</h1>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
//         >
//           Go Back Home
//         </button>
//       </div>
//     );
//   }

//   const handleEnroll = (e) => {
//     e.preventDefault();
//     if (!name.trim() || !email.trim()) {
//       alert("Please fill in both fields");
//       return;
//     }
//     setSuccess(true);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-6 md:p-12 flex flex-col items-center gap-12">
//       {/* Plant Info */}
//       <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
//         <img
//           src={plant.image}
//           alt={plant.name}
//           className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-2xl shadow-lg"
//         />
//         <div className="md:w-1/2 flex flex-col justify-center items-start text-left space-y-4">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">{plant.name}</h1>
//           <p className="text-2xl md:text-3xl font-semibold text-green-700">{plant.price}</p>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             {plant.description} <br />
//             <span className="font-semibold">Care Level:</span> {plant.careLevel} <br />
//             <span className="font-semibold">Provider:</span> {plant.providerName} <br />
//             🌱 Perfect for adding greenery and purifying your indoor air.
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="mt-4 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>

//       {/* Enroll Form */}
//       <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 md:p-10 space-y-6">
//         <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center">Book Consultation</h2>
//         {success && <p className="text-green-600 font-semibold text-center">Enrollment Successful! ✅</p>}

//         <form onSubmit={handleEnroll} className="flex flex-col space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="input w-full border border-gray-300 rounded-lg p-3"
//             required
//             readOnly={!!user} // logged in হলে readOnly, logged out হলে editable
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input w-full border border-gray-300 rounded-lg p-3"
//             required
//             readOnly={!!user} // logged in হলে readOnly
//           />
//           <button
//             type="submit"
//             className="btn btn-neutral w-full py-3 font-semibold hover:bg-green-700 hover:text-white transition-colors"
//           >
//             Enroll Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PlantDetails;


import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../components/CategorySection";
import { AuthContext } from "../provider/AuthProvider";

const PlantDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = categories.find((p) => p.id === parseInt(id));

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [success, setSuccess] = useState(false);

  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4 text-center">Plant Not Found!</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please fill in both fields");
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 sm:p-6 md:p-12 flex flex-col items-center gap-8 md:gap-12">
      {/* Plant Info */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full md:w-1/2 h-64 sm:h-72 md:h-96 object-cover rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2 flex flex-col justify-center items-start text-left space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900">{plant.name}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-700">{plant.price}</p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {plant.description || "No description available."} <br />
            <span className="font-semibold">Care Level:</span> {plant.careLevel || "N/A"} <br />
            <span className="font-semibold">Provider:</span> {plant.providerName || "N/A"} <br />
            🌱 Perfect for adding greenery and purifying your indoor air.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Enroll Form */}
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">Book Consultation</h2>
        {success && <p className="text-green-600 font-semibold text-center">Enrollment Successful! ✅</p>}

        <form onSubmit={handleEnroll} className="flex flex-col space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base"
            required
            readOnly={!!user}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm sm:text-base"
            required
            readOnly={!!user}
          />
          <button
            type="submit"
            className="btn btn-neutral w-full py-2 sm:py-3 font-semibold hover:bg-green-700 hover:text-white transition-colors text-sm sm:text-base"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
