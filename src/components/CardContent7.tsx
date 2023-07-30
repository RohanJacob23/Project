import React from "react";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";

export default function CardContent7() {
  return (
    <CardContent className="flex flex-col justify-center">
      <div className="space-y-5">
        {/* textbox */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Text</Label>
          <Input type="text" id="text" placeholder="Text" />
        </div>
        {/* image selection */}
        <div className="flex flex-col space-y-1">
          <Label>Image</Label>
          <Label
            htmlFor="file"
            className={`${buttonVariants({
              variant: "default",
            })} cursor-pointer w-fit`}
          >
            Select a file
          </Label>
          <Input id="file" type="file" className="hidden" />
        </div>
      </div>
    </CardContent>
  );
}
