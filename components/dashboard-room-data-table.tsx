import React from 'react';
import { users } from '../src/constant/data-dummy';
import { Pencil, Trash2 } from 'lucide-react';
export default function DashboardUserDataTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 w-14">
                <input type="checkbox" className="size-5 rounded border-gray-300" />
              </th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                User Info
              </th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Joined
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">
                  <input type="checkbox" className="size-5 rounded border-gray-300" />
                </td>

                {/* User Info */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">ID: #{user.userId}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-sm font-medium text-gray-900">
                  {user.role}
                </td>

                <td className="p-4 text-sm text-gray-600">
                  {user.email}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold
                      ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : user.status === 'Inactive'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    <span
                      className={`size-1.5 rounded-full
                        ${
                          user.status === 'Active'
                            ? 'bg-green-500'
                            : user.status === 'Inactive'
                            ? 'bg-red-500'
                            : 'bg-yellow-500'
                        }`}
                    />
                    {user.status}
                  </span>
                </td>

                <td className="p-4 text-sm text-gray-500">
                  {user.joined}
                </td>

                {/* Actions */}
              <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        aria-label="Edit user"
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        aria-label="Delete user"
                        className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
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