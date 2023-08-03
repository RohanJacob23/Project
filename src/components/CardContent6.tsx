"use client";

import React, { useState } from "react";
import { CardContent } from "./ui/card";
import { HexColorPicker } from "react-colorful";

export default function CardContent6() {
  const [color, setColor] = useState("#000000");
  return (
    <CardContent className="flex flex-col justify-center space-y-3">
      <div className="relative">
        <div className="flex flex-col space-y-3 font-medium">
          <h1>Select Color</h1>
          <div
            className="w-10 h-8 rounded-lg"
            style={{ backgroundColor: color }}
          ></div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div>
    </CardContent>
  );
}
