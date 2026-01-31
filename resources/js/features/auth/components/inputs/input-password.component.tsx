"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { type ComponentProps, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = ComponentProps<"input">;

const InputPassword = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Input
          type={isVisible ? "text" : "password"}
          placeholder="Password"
          className="pr-9"
          {...props}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible((prevState) => !prevState)}
          className="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
          type="button"
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          <span className="sr-only">
            {isVisible ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InputPassword;
