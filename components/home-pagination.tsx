"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  totalPages: number;
  currentPage: number; // 1-based (UI)
  onChange: (page: number) => void;
};

export default function HomePagination({
  totalPages,
  currentPage,
  onChange,
}: Props) {
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 pt-8 pb-12">
      {/* Previous */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100 disabled:opacity-40"
      >
        <ArrowLeft size={18} />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={`w-10 h-10 rounded-lg text-sm font-medium border ${
            p === currentPage
              ? "bg-blue-600 text-white border-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100 disabled:opacity-40"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
