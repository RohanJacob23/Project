import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/ProductPrice";

export default function page() {
  return (
    <main className="flex justify-center items-center px-2.5">
      <Card className="relative shadow-lg w-full md:w-1/2 max-w-md">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Your Customized Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-evenly space-x-4">
            <div className="relative w-36 h-36 md:w-44 md:h-44">
              <Image
                src="/final/clothFront.jpeg"
                fill
                alt="logo"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="relative w-36 h-36 md:w-44 md:h-44">
              <Image
                src="/final/clothBack.jpeg"
                fill
                alt="logo"
                className="rounded-xl"
              />
            </div>
          </div>
          <ProductPrice />
        </CardContent>
        <CardFooter className="flex space-x-3">
          <Button variant="outline">Add to cart</Button>
          <Button asChild>
            <Link href="/address">Buy Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
