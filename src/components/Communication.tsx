import React from 'react';
import { Send, Paperclip } from 'lucide-react';

export default function Communication() {
  return (
    <div className="h-[calc(100vh-12rem)] flex">
      {/* Contacts Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white">
        <div className="p-4">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="overflow-y-auto">
          {['John Doe', 'Jane Smith', 'Mike Johnson'].map((contact) => (
            <button
              key={contact}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {contact.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{contact}</div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="font-medium text-gray-900">John Doe</div>
          <div className="text-sm text-gray-500">Online</div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="bg-white rounded-lg p-3 max-w-md shadow-sm">
                <p className="text-gray-900">Hi, how can I help you today?</p>
                <span className="text-xs text-gray-500">9:41 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md shadow-sm">
                <p>I need help with the quarterly report review.</p>
                <span className="text-xs text-blue-100">9:42 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}