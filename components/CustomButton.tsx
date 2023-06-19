"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButtonComponent = ({
  title,
  containerStyles,
  HandleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={HandleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
            <Image src={rightIcon} fill alt="icon" className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButtonComponent;
