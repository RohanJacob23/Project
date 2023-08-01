"use client";

import ModeToggle from "@/components/ThemeToggle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex items-center justify-center h-full px-8">
      <div className="absolute left-8 top-4">
        <ModeToggle />
      </div>
      <Card className="flex flex-col items-center justify-center text-center shadow-lg w-full md:w-1/2 md:h-1/2">
        <CardHeader>
          <CardTitle className="flex flex-col items-center justify-center text-xl md:text-3xl font-semibold space-y-3">
            <span className="relative w-20 md:w-24 h-20 md:h-24">
              <Image
                src="/logo/logo.jpeg"
                fill
                alt="logo"
                className="rounded-full"
              />
            </span>
            <span>YARNs</span>
          </CardTitle>
          <CardDescription>
            <Link
              href="/main"
              className="flex items-center space-x-2 text-base md:text-xl"
            >
              Let&apos;s Custmoize <ArrowRightIcon className="md:w-5 md:h-5" />
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
