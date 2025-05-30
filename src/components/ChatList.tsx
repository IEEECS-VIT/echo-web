// src/components/ChatList.tsx
import Image from "next/image";

export default function ChatList() {
  const pinnedChats = ["PRANAV", "MADHAV"];
  const allChats = ["ArSHIA", "RITA", "RIJU", "RAM", "RAJ", "RAMA"];

  return (
    <div className="w-80 bg-black text-white p-4 flex flex-col gap-4 border-r border-gray-800">
      <h2 className="text-xl font-semibold">Messages</h2>

      <div>
        <p className="text-sm text-gray-400 mb-1">Pinned Chats</p>
        {pinnedChats.map((name, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 py-2 hover:bg-gray-800 rounded px-2"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700" />
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-orange-500" />
            </div>
            <div>
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-sm text-blue-400">What’s up?</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-1">All Chats</p>
        {allChats.map((name, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 py-2 hover:bg-gray-800 rounded px-2"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700" />
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-sm text-gray-400">What’s up?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
