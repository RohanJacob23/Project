import React from "react";
import { CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function CardContent5({
  sleevesSelected,
  setSleevesSelected,
  sleeveType,
}: {
  sleevesSelected: string;
  setSleevesSelected: React.Dispatch<React.SetStateAction<string>>;
  sleeveType: string[];
}) {
  return (
    <CardContent className="flex flex-col justify-center space-y-3">
      <RadioGroup
        defaultValue={sleevesSelected}
        onValueChange={(value) => setSleevesSelected(value)}
      >
        {sleeveType.map((item) => (
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
