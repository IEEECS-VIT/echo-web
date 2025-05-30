// src/app/chat/page.tsx

import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      
      <ChatList />
      <div className="flex flex-col flex-1">
        <ChatWindow />
        <MessageInput />
      </div>
    </div>
  );
}
