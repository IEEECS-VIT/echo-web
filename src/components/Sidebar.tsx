"use client";

import {
  LayoutDashboard,
  Users,
  MessageSquareText,
  User,
  Phone,
  Bell,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Servers", icon: Users, path: "/servers" },
  { label: "Messages", icon: MessageSquareText, path: "/messages" },
  { label: "Friends", icon: User, path: "/friends" },
  { label: "Channels", icon: Phone, path: "/channels" },
  { label: "Notifications", icon: Bell, path: "/notifications" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative h-screen w-20 md:w-64 text-white flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div
        className="ml-0 absolute inset-0 bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/sidebar-bg.png')",
          backgroundSize: "auto 120%",
          backgroundPosition: "center",
        }}
      />

      {/* Sidebar Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Echo Logo Section with PNG lines */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Image
              src="/echo-logo.png"
              alt="Echo Logo"
              width={64}
              height={24}
              className="object-contain ml-auto"
            />
            <div className="flex gap-1">
              <Image src="/Line_1.png" alt="Line 1" width={9} height={9} />
              <Image src="/Line_2.png" alt="Line 2" width={9} height={9} />
            </div>
          </div>

          {/* Top Nav Items */}
          <div className="flex flex-col space-y-2 px-2 md:px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
                    isActive
                      ? "bg-white/20 text-white font-semibold shadow-md"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Profile Section */}
        <div className="mb-6 px-2 md:px-4 flex items-center gap-3 justify-start">
          <div className="relative group cursor-pointer shrink-0">
            <div className="rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 animate-pulse">
              <Image
                src="/User_profil.png"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1e1e2f]" />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center space-y-1 p-2 bg-[#1e1e2f] border border-gray-700 rounded-md text-sm text-white z-10">
              <span className="opacity-70 cursor-pointer">View Profile</span>
              <span className="opacity-70 cursor-pointer">Settings</span>
              <span className="opacity-70 cursor-pointer">Log Out</span>
            </div>
          </div>

          {/* Username */}
          <div className="hidden md:flex items-center gap-14">
            <span className="font-semibold text-white">RAHUL</span>
            <Settings className="w-5 h-5 text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
