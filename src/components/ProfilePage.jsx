// src/components/ProfilePage.jsx
import { FaEdit, FaThLarge, FaUsers, FaCommentDots, FaUserFriends, FaPhoneAlt, FaBell } from "react-icons/fa";

const sidebarItems = [
    { icon: <FaThLarge />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Servers" },
    { icon: <FaCommentDots />, label: "Messages" },
    { icon: <FaUserFriends />, label: "Friends" },
    { icon: <FaPhoneAlt />, label: "Channels" },
    { icon: <FaBell />, label: "Notifications" },
];

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-black flex font-sans">
            {/* Sidebar */}
            <aside className="w-[17%] min-w-[200px] bg-[url('/sidebar-gradient.png')] bg-cover flex flex-col justify-between py-8 px-4">
                <nav className="space-y-8">
                    {sidebarItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-4 text-white text-lg hover:text-yellow-400 cursor-pointer">
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>
                <div className="flex flex-col items-center mt-8 gap-6">

                    {/* Bottom Avatar Hexagon */}
                    <div className="w-14 h-14 relative">
                        <svg viewBox="0 0 100 100" className="w-full h-full absolute z-10">
                            <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#6fd0ff" strokeWidth="4"/>
                        </svg>
                        <img
                            src="/avatar.png"
                            alt="avatar"
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: "polygon(50% 0%, 98% 25%, 98% 75%, 50% 100%, 2% 75%, 2% 25%)"
                            }}
                        />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-start py-10 px-8 bg-black">
                {/* Banner and Avatar */}
                <div className="w-full max-w-4xl flex flex-col items-start">
                    <div className="relative w-full">
                        <img
                            src="/banner.png"
                            alt="banner"
                            className="w-full h-44 object-cover rounded-[32px] border-4 border-white shadow-md"
                        />
                        <div className="absolute left-8 -bottom-14 w-28 h-28">
                            <svg viewBox="0 0 100 100" className="w-full h-full absolute z-10">
                                <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#6fd0ff" strokeWidth="4"/>
                            </svg>
                            <img
                                src="/avatar.png"
                                alt="avatar"
                                className="w-full h-full object-cover"
                                style={{
                                    clipPath: "polygon(50% 0%, 98% 25%, 98% 75%, 50% 100%, 2% 75%, 2% 25%)"
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Profile & Customization */}
                <div className="w-full max-w-4xl flex flex-row gap-16 mt-16">
                    {/* Profile Info */}
                    <section className="flex-1 bg-black rounded-2xl p-10 shadow-lg border-2 border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-4xl font-extrabold text-white">Sophie Fortune</h2>
                            <FaEdit className="ml-2 text-yellow-400 text-base cursor-pointer" />
                        </div>
                        <div className="text-gray-400 text-lg mb-8">@sophiefortune</div>
                        {/* About */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-white font-semibold text-lg">About</span>
                                <FaEdit className="ml-2 text-yellow-400 text-sm cursor-pointer" />
                            </div>
                            <div className="text-gray-300 text-base">
                                Gamer, dreamer, meme enthusiast. I run on caffeine and chaos. Fluent in sarcasm, bad puns, and Discord emojis. Here to vibe, chat, laugh, and pretend I'm productive
                            </div>
                        </div>
                        {/* Avatar & Banner Buttons */}
                        <div className="mb-8 flex gap-4">
                            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition">Change Avatar</button>
                            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition">Change Banner</button>
                        </div>
                        {/* Account Settings */}
                        <div>
                            <div className="font-semibold text-white mb-2">Account Settings</div>
                            <button className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">Settings</button>
                        </div>
                    </section>

                    {/* Customization Panel */}
                    <aside className="w-full max-w-sm bg-[#181818] border-2 border-yellow-400 rounded-2xl p-8 flex flex-col items-center">
                        <div className="text-yellow-400 text-lg font-bold mb-4 text-center">
                            Unleash Your Profile!
                        </div>
                        <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md mb-6 hover:bg-yellow-500 transition">
                            Level Up Your Look!
                        </button>
                        <ul className="space-y-3 w-full text-white text-sm mb-6">
                            <li className="flex items-center gap-3 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> Custom Profile Themes
                            </li>
                            <li className="flex items-center gap-3 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> Profile Anthem/Music
                            </li>
                            <li className="flex items-center gap-3 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> Animated Avatar Borders
                            </li>
                            <li className="flex items-center gap-3 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> Achievement Badge
                            </li>
                            <li className="flex items-center gap-3 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> Personal Milestones
                            </li>
                        </ul>
                        <button className="w-full text-yellow-400 border-2 border-yellow-400 rounded-md py-2 hover:bg-yellow-400 hover:text-black transition">
                            Explore Customizations
                        </button>
                    </aside>
                </div>
            </main>
        </div>
    );
}
