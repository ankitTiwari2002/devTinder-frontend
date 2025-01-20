import React, { useState } from "react";
import { FaSmile, FaPaperPlane, FaEllipsisV } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([
    { text: "Hey there! How are you doing today? 😊" },
  ]);
  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-xl font-bold text-blue-400">Chat</h1>
          <p className="text-gray-400 text-sm">You are connected</p>
        </div>
        <button className="text-gray-400 hover:text-gray-300">
          <FaEllipsisV size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-900">
        {/* Example Message (Received) */}
        <div className="flex justify-start">
          <div className="bg-gray-800 text-gray-200 rounded-tl-none rounded-lg p-4 max-w-xs shadow-md">
            {messages.map((msg, index) => {
              return (
                <div>
                  <p className="text-gray-400 text-base">{msg.text}</p>
                  <span className="text-xs text-gray-500 block mt-2 text-right">
                    10:15 AM
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example Message (Sent) */}
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white rounded-tr-none rounded-lg p-4 max-w-xs shadow-md">
            I’m good, thanks! Just working on some tasks. You?
            <span className="text-xs text-gray-300 block mt-2 text-right">
              10:16 AM
            </span>
          </div>
        </div>

        {/* Example Message (Received) */}
        <div className="flex justify-start">
          <div className="bg-gray-800 text-gray-200 rounded-tl-none rounded-lg p-4 max-w-xs shadow-md">
            Same here! Let’s catch up later. 🌟
            <span className="text-xs text-gray-500 block mt-2 text-right">
              10:17 AM
            </span>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-gray-800 p-4 flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-300">
          <FaSmile size={24} />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-200">
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
