import React from 'react';
import { File, Folder, Upload, Download, MoreVertical } from 'lucide-react';

export default function FileManager() {
  const files = [
    { name: 'Q1 Reports', type: 'folder', items: 12, modified: '2024-03-20' },
    { name: 'Client Database.xlsx', type: 'file', size: '2.4 MB', modified: '2024-03-19' },
    { name: 'Meeting Notes.docx', type: 'file', size: '856 KB', modified: '2024-03-18' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Upload className="w-5 h-5 mr-2" />
            Upload
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Folder className="w-5 h-5 mr-2" />
            New Folder
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size/Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Modified
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {files.map((file) => (
              <tr key={file.name} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {file.type === 'folder' ? (
                      <Folder className="w-5 h-5 text-gray-400 mr-3" />
                    ) : (
                      <File className="w-5 h-5 text-gray-400 mr-3" />
                    )}
                    <span className="text-sm font-medium text-gray-900">{file.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">
                    {file.type.charAt(0).toUpperCase() + file.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">
                    {file.type === 'folder' ? `${file.items} items` : file.size}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{file.modified}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}