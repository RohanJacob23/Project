"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full px-8">
      <Card className="flex flex-col items-center justify-center text-center shadow-lg w-full md:w-1/2 md:h-1/2">
        <CardHeader>
          <CardTitle className="flex flex-col items-center justify-center text-xl md:text-3xl font-semibold space-y-3">
            <span className="rounded-full w-10 h-10 bg-red-400"></span>
            <span>Name</span>
          </CardTitle>
          <CardDescription>
            <Link
              href="/customize"
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
