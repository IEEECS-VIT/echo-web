// src/components/MessageInput.tsx
import { Send, Camera, Mic, Smile } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="bg-black px-4 py-3 border-t border-gray-800">
      <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2">
        {/* Message Text Field */}
        <input
          type="text"
          placeholder="Type a message...."
          className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Icons */}
        <div className="flex items-center gap-3 ml-4">
          {/* Sticker (Smile icon used as placeholder for sticker) */}
          <button className="text-gray-400 hover:text-white">
            <Smile className="w-5 h-5" />
          </button>

          {/* Camera */}
          <button className="text-gray-400 hover:text-white">
            <Camera className="w-5 h-5" />
          </button>

          {/* Microphone */}
          <button className="text-gray-400 hover:text-white">
            <Mic className="w-5 h-5" />
          </button>

          {/* Send */}
          <button className="text-blue-500 hover:text-blue-400">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
