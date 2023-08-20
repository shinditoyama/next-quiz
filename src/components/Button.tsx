import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-base font-sans font-bold text-white py-3.5 px-6 rounded-md transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
