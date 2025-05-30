import { Video, Phone, Plus } from "lucide-react";
import MessageBubble from "@/components/MessageBubble";


export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 bg-black text-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-700" />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-yellow-400 border-2 border-black" />
          </div>
          <span className="text-lg font-semibold">PRANAV</span>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </button>
          <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </button>
          <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
        <MessageBubble
          name="PRANAV"
          isSender={false}
          message="Hey!"
          avatarUrl="https://avatars.dicebear.com/api/bottts/pranav.svg"
        />
        <MessageBubble
          name="RAHUL"
          isSender={true}
          message="What's up?"
          avatarUrl="https://avatars.dicebear.com/api/bottts/rahul.svg"
        />
      </div>
    </div>
  );
}
