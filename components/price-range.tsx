"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

export default function PriceRange() {
  const [price, setPrice] = React.useState<number>(200);

  return (
    <div>
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold">Price Range</h2>
        <div className="text-sm text-muted-foreground">
          Up to <span className="font-semibold text-heading">${price}</span> /
          night
        </div>

        <Slider
          min={50}
          max={500}
          step={10}
          value={[price]}
          onValueChange={(value) => setPrice(value[0])}
        />

        <div className="flex justify-between text-xs text-gray-400">
          <span>$50</span>
          <span>$500+</span>
        </div>
      </div>
    </div>
  );
}
