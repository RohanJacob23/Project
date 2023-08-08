"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function AddressCard() {
  const { toast } = useToast();
  const router = useRouter();
  return (
    <Card className="relative shadow-lg w-full md:w-1/2 max-w-md">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Your Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="address">Your address</Label>
            <Textarea placeholder="Type your address here." id="address" />
          </div>

          <RadioGroup defaultValue="upi">
            <h1 className="text-xl font-semibold">Mode of Payment</h1>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash On Delivery</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            toast({
              title: "Placing Your Order",
              description: "Please Wait While We Place Your Order",
              className: "border-none bg-[#3abff8]",
            });
            setTimeout(() => {
              toast({
                title: "Order Placed!!",
                description: "Your Order Has Been Placed Successfully",
                className: "border-none bg-[#36d399]",
              });
              router.push("/");
            }, 2500);
          }}
        >
          Place Order
        </Button>
      </CardFooter>
    </Card>
  );
}
