import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: "Sindy Forest",
      message: "Hi Tom! Hate to break it...",
      time: "Yesterday",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "David Peterson",
      message: "Thanks for reaching out...",
      time: "4h ago",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];

  const messages = [
    { from: "other", text: "Great, if you need clarification 👍" },
    { from: "me", text: "Thanks for choosing my offer!" },
    { from: "other", text: "I'm on vacation until Sunday 😄" },
    { from: "me", text: "No problem, noted 👍" },
  ];

  const activeChat = chats.find((c) => c.id === selectedChat);

  return (
   <>
   <Navbar />
    <div className="h-screen mt-14 flex bg-[#fafafa]">

      {/* ✅ CHAT LIST */}
      <div
        className={`
          ${selectedChat ? "hidden md:flex" : "flex"}
          w-full md:w-[320px] flex-col bg-white border-r
        `}
      >
        {/* SEARCH */}
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* LIST */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition ${
                selectedChat === chat.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-100"
              }`}
            >
              <img src={chat.avatar} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-sm">{chat.name}</p>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">
                  {chat.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CHAT WINDOW */}
      <div
        className={`
          ${selectedChat ? "flex" : "hidden md:flex"}
          flex-1 flex-col bg-gray-50
        `}
      >
        {activeChat ? (
          <>
            {/* HEADER */}
            <div className="p-4 bg-white border-b flex items-center gap-3">
              
              {/* 🔙 Back button (mobile only) */}
              <button
                onClick={() => setSelectedChat(null)}
                className="md:hidden"
              >
                <ArrowLeft />
              </button>

              <img
                src={activeChat.avatar}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{activeChat.name}</p>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[75%] sm:max-w-xs text-sm shadow ${
                      msg.from === "me"
                        ? "bg-blue-600 text-white"
                        : "bg-white border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-3 sm:p-4 bg-white border-t flex items-center gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                <Send size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
   </>
  );
}