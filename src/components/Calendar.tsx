import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {currentMonth} {currentYear}
          </h2>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          New Event
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-7 gap-px border-b">
          {days.map((day) => (
            <div key={day} className="px-4 py-2 text-sm font-medium text-gray-900 text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 grid-rows-5 gap-px">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[120px] p-2 border-r border-b last:border-r-0"
            >
              <div className="text-sm text-gray-500">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}