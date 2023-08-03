"use client";

import React, { useState } from "react";
import { CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { HexColorPicker } from "react-colorful";

export default function CardContent6({
  colorSelected,
  setColorSelected,
  colors,
}: {
  colorSelected: string;
  setColorSelected: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
}) {
  const [color, setColor] = useState("#000000");
  const [showColor, setShowColor] = useState(false);
  console.log(color);
  return (
    <CardContent className="flex flex-col justify-center space-y-3">
      <RadioGroup
        defaultValue={colorSelected}
        onValueChange={(value) => setColorSelected(value)}
      >
        {colors.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem id={item} value={item} />
            <Label
              htmlFor={item}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {item}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="relative">
        <div className="flex items-center space-x-3 font-medium">
          <h1>Select Color: </h1>
          <div
            className="w-10 h-8 rounded-lg"
            style={{ backgroundColor: color }}
            onClick={() => setShowColor((prev) => !prev)}
          ></div>
          <div
            className={`colorP absolute right-0 top-10 md:top-auto ${
              showColor ? "block" : "hidden"
            }`}
          >
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
      </div>
    </CardContent>
  );
}
