"use client";

import React from "react";
import { CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function CardContent1({
  genderSelected,
  setGenderSelected,
  genderCheckBox,
}: {
  genderSelected: string;
  setGenderSelected: React.Dispatch<React.SetStateAction<string>>;
  genderCheckBox: string[];
}) {
  return (
    <CardContent className="flex flex-col justify-center space-y-3">
      <RadioGroup
        defaultValue={genderSelected}
        onValueChange={(value) => setGenderSelected(value)}
      >
        {genderCheckBox.map((item) => (
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
    </CardContent>
  );
}
