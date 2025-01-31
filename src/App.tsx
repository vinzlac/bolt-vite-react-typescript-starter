import React, { useState } from 'react';
import { Calendar, CheckSquare, FileText, MessageSquare, PieChart, Settings as SettingsIcon, Users } from 'lucide-react';
import TaskManager from './components/TaskManager';
import CalendarView from './components/Calendar';
import Communication from './components/Communication';
import FileManager from './components/FileManager';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('tasks');

  const renderContent = () => {
    switch (activeTab) {
      case 'tasks':
        return <TaskManager />;
      case 'calendar':
        return <CalendarView />;
      case 'communication':
        return <Communication />;
      case 'files':
        return <FileManager />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <TaskManager />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">OpManager</h1>
        </div>
        <nav className="mt-4">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'tasks' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CheckSquare className="w-5 h-5 mr-3" />
            Tasks
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'calendar' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar className="w-5 h-5 mr-3" />
            Calendar
          </button>
          <button
            onClick={() => setActiveTab('communication')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'communication' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Communication
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'files' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5 mr-3" />
            Files
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <PieChart className="w-5 h-5 mr-3" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 ${
              activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <SettingsIcon className="w-5 h-5 mr-3" />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Users className="w-5 h-5 mr-2" />
                Team
              </button>
            </div>
          </div>
        </header>
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;