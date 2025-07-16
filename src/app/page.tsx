'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatPage from '../components/ChatPage';

export default function Home() {
  const router = useRouter();
  const [shouldRenderChat, setShouldRenderChat] = useState(true); // default true

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const match = hash.match(/access_token=([^&]+)/);
      const token = match ? match[1] : null;

      if (token) {
        setShouldRenderChat(false);
        router.replace(`/reset-password?token=${token}`);
      }
    }
  }, [router]);


  if (!shouldRenderChat) {
    return null;
  }

  return <ChatPage />;
}
