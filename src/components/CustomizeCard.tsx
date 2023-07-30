"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CustomizeCard() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [genderSelected, setGenderSelected] = useState("");
  const [typeofDressSelected, setTypeofDressSelected] = useState("");
  const [typeofClothing, setTypeofClothing] = useState("");
  const genderCheckBox = ["Male", "Female"];
  const typeOfDress = [
    "Casuals",
    "Traditional",
    "Office Wear",
    "Party",
    "Other...",
  ];
  const clothing = ["T-Shirts", "Pants", "Hoodies"];

  return (
    <>
      <Card className="shadow-lg w-full md:w-1/2 max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-xl md:text-2xl space-x-2">
            <span>Let&apos;s Custmoize</span>
            <span className="rounded-full w-10 h-10 bg-red-400"></span>
          </CardTitle>
        </CardHeader>
        {/* page 1 */}
        {page === 1 && (
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
        )}
        {/* page 2 */}
        {page === 2 && (
          <CardContent className="flex flex-col justify-center space-y-3">
            <RadioGroup
              defaultValue={typeofDressSelected}
              onValueChange={(value) => setTypeofDressSelected(value)}
            >
              {typeOfDress.map((item) => (
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
        )}
        {page === 3 && (
          <CardContent className="flex flex-col justify-center space-y-3">
            <RadioGroup
              defaultValue={typeofClothing}
              onValueChange={(value) => setTypeofClothing(value)}
            >
              {clothing.map((item) => (
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
        )}
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() =>
              setPage((prev) => {
                if (prev === 1) {
                  router.push("/");
                  return 1;
                } else {
                  return prev - 1;
                }
              })
            }
          >
            Previous
          </Button>
          <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
        </CardFooter>
      </Card>
    </>
  );
}
