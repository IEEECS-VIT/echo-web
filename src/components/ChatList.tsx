"use client";

function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

interface Chat {
  name: string;
  lastMessage: string;
  time: Date;
}

const pinnedChats: Chat[] = [
  { name: "PRANAV", lastMessage: "What’s up?", time: new Date() },
  {
    name: "MADHAV",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 600000),
  },
];

const allChats: Chat[] = [
  { name: "ArSHIA", lastMessage: "What’s up?", time: new Date() },
  {
    name: "RITA",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 3600000),
  },
  {
    name: "RIJU",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 7200000),
  },
  {
    name: "RAM",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 10800000),
  },
  {
    name: "RAJ",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 14400000),
  },
  {
    name: "RAMA",
    lastMessage: "What’s up?",
    time: new Date(Date.now() - 18000000),
  },
];

const ChatItem = ({ chat, isOnline }: { chat: Chat; isOnline: boolean }) => (
  <div className="group cursor-pointer">
    <div className="w-full flex items-center justify-between px-4 py-2 rounded-lg group-hover:bg-gray-800 transition-colors">
      {/* Left: Avatar + Name/Message */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-700" />
          <div
            className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
              isOnline ? "bg-orange-500" : "bg-gray-400"
            }`}
          />
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold truncate">{chat.name}</p>
          <p className="text-sm text-blue-400 truncate">{chat.lastMessage}</p>
        </div>
      </div>

      {/* Right: Time */}
      <div className="text-xs text-gray-400 whitespace-nowrap ml-2">
        {formatTimestamp(chat.time)}
      </div>
    </div>
  </div>
);

export default function ChatList() {
  return (
    <div className="w-72 bg-black text-white p-4 flex flex-col gap-4 border-r border-gray-800 select-none h-screen overflow-y-auto">
      <h2 className="text-xl font-semibold">Messages</h2>

      <div>
        <p className="text-sm text-gray-400 mb-1">Pinned Chats</p>
        {pinnedChats.map((chat, idx) => (
          <ChatItem
            key={`pinned-${chat.name}-${idx}`}
            chat={chat}
            isOnline={true}
          />
        ))}

        <p className="text-sm text-gray-400 mt-4 mb-1">All Chats</p>
        {allChats.map((chat, idx) => (
          <ChatItem
            key={`chat-${chat.name}-${idx}`}
            chat={chat}
            isOnline={false}
          />
        ))}
      </div>
    </div>
  );
}
