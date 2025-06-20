export default function ProfilePage() {
    return (
        <div className="flex min-h-screen bg-black text-white font-sans relative">
            {/* Sidebar */}
            <aside className="w-64 bg-[url('/sidebar-gradient.png')] bg-cover bg-no-repeat p-6 flex flex-col items-start relative shadow-xl">
                <nav className="space-y-6 text-sm text-white/90 mt-6">
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">🏠</span> Dashboard
                    </div>
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">🖥️</span> Servers
                    </div>
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">💬</span> Messages
                    </div>
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">👥</span> Friends
                    </div>
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">📢</span> Channels
                    </div>
                    <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                        <span className="text-xl">🔔</span> Notifications
                    </div>
                </nav>
                <div className="mt-auto">
                    <img src="/avatar.png" className="w-12 h-12 rounded-full border-2 border-white/30 ring-2 ring-indigo-500" />
                </div>
            </aside>

            {/* Vertical Divider */}
            <div className="w-[1px] h-[calc(100vh-0px)] bg-gradient-to-b from-white/40 to-white/10"></div>

            {/* Main Content */}
            <main className="flex-1 p-10 flex flex-col gap-8 relative">
                {/* Profile Section */}
                <section className="flex-1">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/banner.png"
                            alt="Banner"
                            className="w-full h-44 object-cover rounded-2xl border border-white/10"
                        />
                    </div>
                    <div className="relative -mt-10 ml-6">
                        <img
                            src="/avatar.png"
                            alt="Avatar"
                            className="w-24 h-24 rounded-full border-4 border-black ring-4 ring-indigo-500"
                        />
                    </div>
                    <div className="mt-6 ml-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            Sophie Fortune
                            <span className="text-white/50 text-lg cursor-pointer">✏️</span>
                        </h1>
                        <p className="text-sm text-white/60">@sophiefortune</p>
                        <div className="mt-4">
                            <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                                About <span className="text-white/50 text-sm cursor-pointer">✏️</span>
                            </h3>
                            <p className="max-w-xl text-white/70 text-sm border-t border-white/20 pt-2">
                                Gamer, dreamer, meme enthusiast. I run on caffeine and chaos. Fluent in sarcasm,
                                bad puns, and Discord emojis. Here to vibe, chat, laugh, and pretend I'm productive.
                            </p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold mb-2 border-t border-white/20 pt-4 max-w-xl">Avatar & Banner</h3>
                            <div className="flex gap-4">
                                <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg">
                                    Change Avatar
                                </button>
                                <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg">
                                    Change Banner
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-white/20 pt-4 max-w-xl">
                            <h3 className="text-sm font-semibold mb-2">Account Settings</h3>
                            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm">
                                Settings
                            </button>
                        </div>
                    </div>
                </section>

                {/* Customization Panel */}
                <aside className="bg-gradient-to-b from-yellow-900 to-yellow-800 text-white rounded-2xl p-6 w-full lg:w-96 border border-yellow-700 lg:absolute lg:bottom-10 lg:right-10 shadow-lg">
                    <h2 className="text-xl font-bold text-center mb-4">Unleash Your Profile!</h2>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full py-1 px-3 text-center mb-4">
                        Level UP Your Look!
                    </div>
                    <ul className="text-sm space-y-3">
                        <li className="border border-yellow-600 rounded-md px-3 py-1 flex items-center gap-2">
                            🎨 <span>Custom Profile Themes</span>
                        </li>
                        <li className="border border-yellow-600 rounded-md px-3 py-1 flex items-center gap-2">
                            🎵 <span>Profile Anthem/Music</span>
                        </li>
                        <li className="border border-yellow-600 rounded-md px-3 py-1 flex items-center gap-2">
                            🔥 <span>Animated Avatar Borders</span>
                        </li>
                        <li className="border border-yellow-600 rounded-md px-3 py-1 flex items-center gap-2">
                            🏆 <span>Achievement Badge</span>
                        </li>
                        <li className="border border-yellow-600 rounded-md px-3 py-1 flex items-center gap-2">
                            💬 <span>Personal Milestones</span>
                        </li>
                    </ul>
                    <button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black py-2 rounded-lg font-bold">
                        ✨ Explore Customizations
                    </button>
                </aside>
            </main>
        </div>
    );
}
