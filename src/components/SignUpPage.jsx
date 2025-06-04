import { useState } from "react";
import { Link } from 'react-router-dom';

export default function SignUpPage() {
    const [form, setForm] = useState({
        email: "",
        displayName: "",
        username: "",
        password: "",
        dob: { day: "", month: "", year: "" },
    });

    const handleChange = (field, value) => {
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
        <div className="font-poppins flex h-screen bg-[#1a1a1a] font-sans">
            {/* Left Gradient Image */}
            <div className="font-poppins hidden lg:block lg:w-1/2 bg-[url('/gradient-signup.png')] bg-cover rounded-tr-[40px] rounded-br-[40px]" />

            {/* Right Panel */}
            <div className="font-poppins w-full lg:w-1/2 flex justify-center items-center px-6">
                <div className="font-poppins w-full max-w-md text-white">
                    <h1 className="font-poppins text-2xl font-bold mb-6 text-center">Sign Up</h1>

                    {/* Email */}
                    <div className="font-poppins mb-4">
                        <label className="font-poppins text-sm">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="font-poppins w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
                        />
                    </div>

                    {/* Display Name */}
                    <div className="font-poppins mb-4">
                        <label className="font-poppins text-sm">Display Name</label>
                        <input
                            type="text"
                            value={form.displayName}
                            onChange={(e) => handleChange("displayName", e.target.value)}
                            className="font-poppins w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
                        />
                    </div>

                    {/* Username */}
                    <div className="font-poppins mb-4">
                        <label className="font-poppins text-sm">Username</label>
                        <input
                            type="text"
                            value={form.username}
                            onChange={(e) => handleChange("username", e.target.value)}
                            className="font-poppins w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="font-poppins mb-4">
                        <label className="font-poppins text-sm mb-1 block">Date of birth</label>
                        <div className="font-poppins flex gap-2">
                            <input
                                type="text"
                                placeholder="Month"
                                value={form.dob.month}
                                onChange={(e) => handleChange("month", e.target.value)}
                                className="font-poppins w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Date"
                                value={form.dob.day}
                                onChange={(e) => handleChange("day", e.target.value)}
                                className="font-poppins w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Year"
                                value={form.dob.year}
                                onChange={(e) => handleChange("year", e.target.value)}
                                className="font-poppins w-1/3 px-2 py-2 bg-transparent border border-white rounded-md text-sm"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="font-poppins text-sm">Password</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            className="font-poppins w-full px-4 py-2 mt-1 bg-transparent border border-white rounded-md focus:outline-none"
                        />
                    </div>

                    {/* Register Button */}
                    <button className="font-poppins w-full py-3 text-lg font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500">
                        Register
                    </button>

                    {/* Footer link */}
                    <Link
                        to="/"
                        className="font-poppins block text-sm text-center mt-4 text-yellow-400 cursor-pointer hover:underline"
                    >
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
}
