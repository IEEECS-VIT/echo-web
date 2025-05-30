// src/components/MessageBubble.tsx
import Image from "next/image";
import clsx from "clsx";

export default function MessageBubble({
  name,
  isSender,
  message,
  avatarUrl,
}: {
  name?: string;
  isSender?: boolean;
  message: string;
  avatarUrl?: string;
}) {
  return (
    <div
      className={clsx(
        "flex gap-3 items-start",
        isSender ? "justify-end text-right" : "justify-start text-left"
      )}
    >
      {!isSender && (
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name} avatar`}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : null}
        </div>
      )}

      <div>
        {name && <p className="text-sm text-gray-400 mb-1">{name}</p>}
        <div
          className={clsx(
            "px-4 py-2 rounded-lg max-w-md inline-block",
            isSender ? "bg-gray-700 text-white" : "bg-blue-700 text-white"
          )}
        >
          {message}
        </div>
      </div>

      {isSender && (
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name} avatar`}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
