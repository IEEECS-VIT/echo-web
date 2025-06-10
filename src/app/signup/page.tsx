'use client';
import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: "",
    displayName: "",
    username: "",
    password: "",
    dob: { day: "", month: "", year: "" },
  });

  const handleChange = (field: string, value: string) => {
    if (["day", "month", "year"].includes(field)) {
      setForm((prev) => ({
        ...prev,
        dob: { ...prev.dob, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
      <div className="flex h-screen bg-black font-sans">
        {/* Left Side Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
              src="/signup-side.png"
              alt="Signup Visual"
              className="w-full h-full object-cover rounded-tr-[40px] rounded-br-[40px]"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-6">
          <div className="w-full max-w-md text-white">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm">Email</label>
              <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
              />
            </div>

            {/* Display Name */}
            <div className="mb-4">
              <label className="text-sm">Display Name</label>
              <input
                  type="text"
                  value={form.displayName}
                  onChange={(e) => handleChange("displayName", e.target.value)}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="text-sm">Username</label>
              <input
                  type="text"
                  value={form.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="text-sm mb-1 block">Date of birth</label>
              <div className="flex gap-2">

                <input
                    type="text"
                    placeholder="Date"
                    value={form.dob.day}
                    onChange={(e) => handleChange("day", e.target.value)}
                    className="w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                />

                <input
                    type="text"
                    placeholder="Month"
                    value={form.dob.month}
                    onChange={(e) => handleChange("month", e.target.value)}
                    className="w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                />

                <input
                    type="text"
                    placeholder="Year"
                    value={form.dob.year}
                    onChange={(e) => handleChange("year", e.target.value)}
                    className="w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm">Password</label>
              <input
                  type="password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
              />
            </div>

            {/* Register Button */}
            <button className="w-full py-3 text-lg font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500">
              Register
            </button>

            {/* Link to Login */}
            <div className="text-sm text-center mt-4">
              <a href="/login" className="text-yellow-400 hover:underline">Already have an account?</a>
            </div>
          </div>
        </div>
      </div>
  );
}

