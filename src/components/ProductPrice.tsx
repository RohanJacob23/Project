"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ProductPrice() {
  const [promoCode, setPromoCode] = useState("");
  const [applied, setApplied] = useState(false);
  const promo = "DPPG";
  const applyPromoCode = () => {
    if (promoCode === promo) setApplied(true);
    else setApplied(false);
  };
  return (
    <>
      <h1 className="font-semibold text-2xl text-center mt-6">
        Price: {applied && "399 "}
        <span className={applied ? "line-through text-xs" : ""}>499</span>
      </h1>

      <div className="gird w-full max-w-sm items-center gap-1.5 mt-4">
        <Label htmlFor="promoCode">Promo Code</Label>
        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Input
            type="promoCode"
            id="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Promo Code"
          />
          <Button onClick={applyPromoCode}>Apply</Button>
        </div>
      </div>
    </>
  );
}
