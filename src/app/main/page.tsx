import Image from "next/image";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function page() {
  const clothesPath = [
    "cloth1.jpeg",
    "cloth2.jpeg",
    "cloth3.jpeg",
    "cloth4.jpeg",
    "cloth5.jpeg",
    "cloth6.jpeg",
  ];
  return (
    <main className="w-full h-full">
      {/* header section */}
      <section className="flex items-center justify-between bg-background mx-4 px-2 pr-4 rounded-lg space-x-3">
        <div className="flex items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <Image
              src="/logo/logo.jpeg"
              alt="logo"
              fill
              className="rounded-full"
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">YARNs</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-7 h-7">
            <Image src="/icons/cart.png" alt="cart" fill />
          </div>

          {/* sheet */}
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col text-xl font-semibold justify-between h-full">
                <div className="flex flex-col mt-8 space-y-2">
                  <h1>Profile</h1>
                  <h1>Your orders</h1>
                  <h1>Premium</h1>
                  <h1>Thrift</h1>
                  <h1>Rent</h1>
                  <h1>Recyling</h1>
                  <h1>Settings</h1>
                </div>
                <h1>Sign Out</h1>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* main section */}
      <section className="flex flex-col gap-4 md:items-center bg-background mt-5 mx-4 p-4 rounded-lg">
        {/* offers section */}
        <Dialog>
          <Button asChild variant="outline" className="md:w-1/2">
            <DialogTrigger>Offers!!</DialogTrigger>
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Offers!!</DialogTitle>
            </DialogHeader>
            <ul className="list-disc list-outside px-5">
              <li>
                Season wise offers(eg: More buying less spending August-
                Exciting offers everyday)
              </li>
              <li>10% off on the purchase of clothes with YARNs logo</li>
              <li>Use promo-codo dppg to get 20%off on every merchandise</li>
              <li>
                Get your creativity printed with us- place your first order and
                get flat 50% off and fastest delivery
              </li>
              <li>
                Join yearly membership worth ₹699 and get exciting offers
                everyday
              </li>
              <li>
                YARNs never disappoint!! - surprise gifts on orders above ₹1500
              </li>
            </ul>
          </DialogContent>
        </Dialog>

        <Dialog>
          <Button asChild className="md:w-1/2">
            <DialogTrigger>Suggestion!!</DialogTrigger>
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Suggestion!!</DialogTitle>
            </DialogHeader>
            <div className="bg-white mt-5 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-4">
                {clothesPath.map((item) => {
                  return (
                    <div
                      key={item}
                      className="relative w-24 h-24 md:w-32 md:h-32 hover:scale-105 transition-transform ease-in duration-200 cursor-pointer"
                    >
                      <Image
                        src={`/clothes/${item}`}
                        alt="clothes"
                        fill
                        className="rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Link
          href="/customize"
          className="flex items-center space-x-2 text-base md:text-xl justify-center mt-5"
        >
          Let&apos;s Custmoize <ArrowRightIcon className="md:w-5 md:h-5" />
        </Link>
      </section>
    </main>
  );
}
