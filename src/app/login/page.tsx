'use client';

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="flex h-screen bg-[#1a1a1a] font-sans">
          <div className="w-1/2 h-full">
            <img
                src="/gradient.png"
                alt="Login Visual"
                className="h-full w-full object-cover rounded-tr-[50px] rounded-br-[50px]"
            />
          </div>


          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[70%] max-w-md">

              {/* Logo */}
              <div className="w-full mb-[20px] lg:mb-[40px]">
                <div className="relative inline-block">
                  <div id="echo-text"
                       className="font-jersey lg:text-[64px] md:text-[48px] text-[40px] font-normal text-white">
                    echo
                  </div>
                  <svg width="13" height="34" className="absolute left-[116px] top-[34px]" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2C14.2659 13.7159 13.7311 20.2841 2 32" stroke="white" strokeWidth="4"/>
                  </svg>
                  <svg width="16" height="46" className="absolute left-[120px] top-[28px]" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2C18.3545 18.4022 17.6415 27.5977 2 44" stroke="white" strokeWidth="4"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-5 text-center">
                Login
              </h1>

              {/* Sign up link */}
              <div
                  className="font-poppins text-base md:text-lg lg:text-xl font-normal mb-6 md:mb-8 lg:mb-10 text-center">
                <span className="text-white">New Here? </span>
                <Link href="/signup" className="text-[#FFC341] underline cursor-pointer">
                  Sign Up
                </Link>
              </div>

              {/* Username */}
              <div className="mb-4">
                <label className="text-white text-sm font-light">username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 mt-1 text-white bg-transparent border border-white rounded-md focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="text-white text-sm font-light">password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-1 text-white bg-transparent border border-white rounded-md focus:outline-none"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center mb-6">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="form-checkbox text-yellow-400"
                />
                <label className="ml-2 text-sm text-white">Remember me</label>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6 md:mb-8 relative">
                <div className="flex-grow h-px bg-white opacity-40"/>
                <div className="font-poppins text-sm md:text-base font-normal text-white mx-3.5 md:mx-4">
                  or Sign in with
                </div>
                <div className="flex-grow h-px bg-white opacity-40"/>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6 md:gap-8 mb-0 -mt-2 md:-mt-3">
                {/* Google */}
                <svg
                    className="w-7 h-7 md:w-8 lg:h-9 cursor-pointer hover:opacity-80 transition-opacity text-white fill-current"
                    viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path
                        d="M15.0002 6.25C17.0211 6.25 18.8767 6.94191 20.3581 8.09258L24.9045 3.75511C22.2611 1.42494 18.801 0 15.0002 0C9.24066 0 4.246 3.24989 1.73242 8.01231L6.78796 12.0035C8.01263 8.64922 11.222 6.25 15.0002 6.25Z"
                        fill="#F44336"/>
                    <path
                        d="M29.8701 16.8773C29.9482 16.2627 30 15.6358 30 15C30 13.9277 29.8829 12.8835 29.669 11.875H15V18.125H23.1078C22.4519 19.8297 21.284 21.2722 19.7975 22.2743L24.8718 26.2804C27.5617 23.9193 29.4025 20.6129 29.8701 16.8773Z"
                        fill="#2196F3"/>
                    <path
                        d="M6.25 15C6.25 13.9457 6.44608 12.9395 6.7878 12.0035L1.73225 8.01233C0.630417 10.1 0 12.4752 0 15C0 17.4966 0.61882 19.8454 1.69777 21.9162L6.75972 17.9199C6.43555 17.0056 6.25 16.0256 6.25 15Z"
                        fill="#FFC107"/>
                    <path
                        d="M15 23.75C11.1931 23.75 7.96301 21.3144 6.7597 17.9199L1.69775 21.9162C4.19905 26.7168 9.21225 30 15 30C18.7847 30 22.2359 28.594 24.8718 26.2804L19.7975 22.2743C18.4265 23.1986 16.7855 23.75 15 23.75Z"
                        fill="#00B060"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                {/* Apple */}
                <svg
                    className="w-7 h-7 md:w-8 lg:h-13 cursor-pointer hover:opacity-80 transition-opacity text-white fill-current"
                    viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M28.1427 21.5313C28.099 17.1343 31.7284 15.0254 31.8907 14.9188C29.8509 11.9365 26.6731 11.5272 25.5421 11.4807C22.8398 11.2062 20.2666 13.0724 18.8958 13.0724C17.5277 13.0724 15.4096 11.5209 13.1688 11.5604C10.221 11.6042 7.50387 13.2749 5.98693 15.9137C2.92553 21.2244 5.20376 29.0948 8.18685 33.4051C9.64523 35.5119 11.3844 37.8825 13.6662 37.7957C15.8654 37.709 16.6951 36.3733 19.3537 36.3733C22.0122 36.3733 22.7587 37.7957 25.0849 37.7513C27.4499 37.7083 28.9492 35.6043 30.3956 33.489C32.0699 31.0415 32.7592 28.6715 32.8001 28.5516C32.7486 28.5276 28.19 26.7813 28.1427 21.5313Z"
                      fill="white"/>
                  <path
                      d="M23.7718 8.62807C24.9819 7.1591 25.8017 5.11793 25.5788 3.08594C23.8325 3.15649 21.7187 4.24657 20.4649 5.71413C19.3417 7.01658 18.3595 9.09021 18.6227 11.0855C20.5707 11.2365 22.5576 10.0942 23.7718 8.62807Z"
                      fill="white"/>
                </svg>

                {/* Facebook */}
                <svg
                    className="w-7 h-7 md:w-8 lg:h-9 cursor-pointer hover:opacity-80 transition-opacity text-white fill-current"
                    viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clipFb)">
                    <path
                        d="M15 30C6.717 30 0 23.283 0 15C0 6.717 6.717 0 15 0C23.283 0 30 6.717 30 15C30 23.283 23.283 30 15 30Z"
                        fill="#3B579D"/>
                    <path
                        d="M18.9 30V18.381H22.8L23.385 13.854H18.9V10.962C18.9 9.65096 19.263 8.75696 21.144 8.75696H23.541V4.70996C23.127 4.65596 21.702 4.53296 20.046 4.53296C16.59 4.53296 14.223 6.64196 14.223 10.518V13.857H10.314V18.384H14.223V30H18.9Z"
                        fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clipFb">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Sign In Button */}
              <button
                  className="w-full py-3 text-lg font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500 mt-6">
                Sign in
              </button>

            </div>
          </div>
        </div>
    );
  }
}
