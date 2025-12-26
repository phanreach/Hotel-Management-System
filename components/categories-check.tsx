"use client";

import { useState } from "react";
import { categories } from "@/src/constant/data-dummy";

export default function CategoriesCheck() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h1 className="font-semibold text-lg">Categories</h1>

      {categories.map((cat) => (
        <label
          key={cat.id}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <input
            type="checkbox"
            checked={selected.includes(cat.id)}
            onChange={() => toggle(cat.id)}
            className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          {cat.roomType}
        </label>
      ))}
    </div>
  );
}
