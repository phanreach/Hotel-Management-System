"use client";
import { ArrowRight,ArrowLeft } from "lucide-react";

type Props = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
};

export default function BookingHistoryPagination({
  totalPages,
  currentPage,
  onChange,
}: Props) {
  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    onChange(p);
  };

  return (
    <div className="flex justify-center items-center gap-2 pt-6 pb-12">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-50"
      >
        <span className="material-symbols-outlined"><ArrowLeft/></span>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={`w-10 h-10 rounded-lg text-sm font-medium ${
            p === currentPage
              ? "bg-blue-600 text-white font-bold"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-50"
      >
        <span className="material-symbols-outlined"><ArrowRight/></span>
      </button>
    </div>
  );
}
