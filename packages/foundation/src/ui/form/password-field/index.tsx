import { useState } from "react";
import type { ComponentProps } from "react";
import { Input } from "../input-field";

export function PasswordField(props: ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      rightIcon={
        <div className="flex items-center justify-center bg-[#FFFFFF] h-[28px] w-[47px] rounded-[6px] ml-2 font-semibold shadow-sm">
          <button
            className="cursor-pointer text-sm text-[#111214] "
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      }
    />
  );
}
