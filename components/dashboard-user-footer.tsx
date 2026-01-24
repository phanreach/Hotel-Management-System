import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DashboardUserFooter() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-gray-200 bg-gray-50">
      
      {/* Info */}
      <div className="text-sm text-gray-500">
        Showing <span className="font-semibold text-gray-900">1–5</span> of{' '}
        <span className="font-semibold text-gray-900">48</span> users
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          disabled
          className="p-2 rounded-lg text-gray-400 hover:bg-gray-200 disabled:opacity-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          <button className="h-8 w-8 rounded-lg bg-blue-500 text-white text-sm font-bold flex items-center justify-center">
            1
          </button>
          <button className="h-8 w-8 rounded-lg text-gray-600 hover:bg-gray-200 text-sm font-medium flex items-center justify-center transition-colors">
            2
          </button>
          <button className="h-8 w-8 rounded-lg text-gray-600 hover:bg-gray-200 text-sm font-medium flex items-center justify-center transition-colors">
            3
          </button>
          <span className="text-gray-500 px-1">…</span>
          <button className="h-8 w-8 rounded-lg text-gray-600 hover:bg-gray-200 text-sm font-medium flex items-center justify-center transition-colors">
            10
          </button>
        </div>

        {/* Next */}
        <button className="p-2 rounded-lg text-gray-900 hover:bg-gray-200 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
