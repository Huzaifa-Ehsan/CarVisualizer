import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButtonComponent from "./CustomButton";

const NavbarComponent = () => {
  /* min-w i.e 600px & max-w i.e 1440px  means the navbar adjust at until 600px*/
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-[16px] px-6 py-6">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Logo Car Hub"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButtonComponent
          title="Sign in"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full  min-w-[116px]"
        />
      </nav>
    </header>
  );
};

export default NavbarComponent;
