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
import CardContent1 from "./CardContent1";
import CardContent2 from "./CardContent2";
import CardContent3 from "./CardContent3";
import CardContent4 from "./CardContent4";
import CardContent5 from "./CardContent5";
import CardContent6 from "./CardContent6";
import CardContent8 from "./CardContent8";
import CardContent7 from "./CardContent7";
import Image from "next/image";

export default function CustomizeCard() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [genderSelected, setGenderSelected] = useState("");
  const [typeofDressSelected, setTypeofDressSelected] = useState("");
  const [typeofClothing, setTypeofClothing] = useState("");
  const [typeofTopsSelected, setTypeofTopsSelected] = useState("");
  const [sleevesSelected, setSleevesSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const genderCheckBox = ["Male", "Female"];
  const typeOfDress = ["Casuals", "Traditional", "Office Wear", "Party"];
  const clothing = ["T-Shirts", "Pants", "Hoodies"];
  const typeofTops = ["Casuals", "V-Necks", "Round Neck", "Turtle Neck"];
  const sleeveType = ["Short Sleeve", "Long Sleeve"];
  const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const cards: { id: number; card: JSX.Element }[] = [
    {
      id: 1,
      card: (
        <CardContent1
          genderSelected={genderSelected}
          setGenderSelected={setGenderSelected}
          genderCheckBox={genderCheckBox}
        />
      ),
    },
    {
      id: 2,
      card: (
        <CardContent2
          setTypeofDressSelected={setTypeofDressSelected}
          typeOfDress={typeOfDress}
          typeofDressSelected={typeofDressSelected}
        />
      ),
    },
    {
      id: 3,
      card: (
        <CardContent3
          clothing={clothing}
          setTypeofClothing={setTypeofClothing}
          typeofClothing={typeofClothing}
        />
      ),
    },
    {
      id: 4,
      card: (
        <CardContent4
          setTypeofTopsSelected={setTypeofTopsSelected}
          typeofTops={typeofTops}
          typeofTopsSelected={typeofTopsSelected}
        />
      ),
    },
    {
      id: 5,
      card: (
        <CardContent5
          setSleevesSelected={setSleevesSelected}
          sleeveType={sleeveType}
          sleevesSelected={sleevesSelected}
        />
      ),
    },
    {
      id: 6,
      card: (
        <CardContent6
          setColorSelected={setColorSelected}
          colorSelected={colorSelected}
          colors={colors}
        />
      ),
    },
    {
      id: 7,
      card: <CardContent7 />,
    },
    {
      id: 8,
      card: (
        <CardContent8
          selectSize={selectSize}
          setSelectSize={setSelectSize}
          sizes={sizes}
        />
      ),
    },
  ];
  const breadcrumbs = `${
    genderSelected.length !== 0 ? `${genderSelected} / ` : ""
  } ${typeofDressSelected.length !== 0 ? `${typeofDressSelected} / ` : ""} ${
    typeofClothing.length !== 0 ? `${typeofClothing} / ` : ""
  } ${typeofTopsSelected.length !== 0 ? `${typeofTopsSelected} / ` : ""} ${
    sleevesSelected.length !== 0 ? `${sleevesSelected} / ` : ""
  } ${colorSelected}`;

  return (
    <>
      <Card className="relative shadow-lg w-full md:w-1/2 max-w-md">
        {/* breadcrumb */}
        <div className="absolute top-1.5 left-6 text-xs font-bold dark:text-white/50 text-black/30">
          {breadcrumbs}
        </div>
        <CardHeader className="pt-12 md:pt-8">
          <CardTitle className="flex items-center justify-between text-xl md:text-2xl space-x-2">
            <span>Let&apos;s Custmoize</span>
            <span className="relative w-12 md:w-16 h-12 md:h-16">
              {" "}
              <Image
                src="/logo/logo.jpeg"
                fill
                alt="logo"
                className="rounded-full"
              />
            </span>
          </CardTitle>
        </CardHeader>
        <>{cards.filter((card) => card.id === page)[0].card}</>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() =>
              setPage((prev) => {
                if (prev === 1) {
                  router.push("/");
                  return 1;
                }
                return prev - 1;
              })
            }
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setPage((prev) => {
                if (prev === 8) {
                  router.push("/order");
                  return 8;
                }
                return prev + 1;
              })
            }
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
