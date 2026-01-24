import React from 'react';
import { Plus } from 'lucide-react';

export default function DashboardUserHeader() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-tight">
            User Management
          </h1>
          <p className="text-gray-500 text-base">
            Manage users, roles, permissions, and account status.
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="group inline-flex items-center gap-2 rounded-lg h-12 px-6
                     bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold
                     shadow-md shadow-blue-500/30 transition-all
                     hover:-translate-y-0.5 active:translate-y-0"
        >
          <Plus className="w-5 h-5" />
          <span>Add New User</span>
        </button>

      </div>
    </div>
  );
}
