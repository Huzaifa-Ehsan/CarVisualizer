"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateImageUrl } from "@/utils";
import Image from "next/image";
import CustomButtonComponent from "./CustomButton";
import { useState } from "react";
import CarDetailsComponent from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCardComponent = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateImageUrl(car)}
          fill
          alt="car model"
          className="object-contain"
        />
      </div>

      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toLocaleUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButtonComponent
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            HandleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetailsComponent
        car={car}
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCardComponent;
