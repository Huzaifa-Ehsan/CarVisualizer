"use client";

import { ShowMoreProps } from "@/types";
import CustomButtonComponent from "./CustomButton";

const ShowMoreComponent = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {

    const HandleNavigation = ()=> {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit)
    };
  return (
    <div className="w-full mt-10 flex-center gap-5">
      {
        !isNext && (
            <CustomButtonComponent
             title="Show More"
             containerStyles="bg-primary-blue rounded-full text-white"
             HandleClick={HandleNavigation}
            />
        )
      }
    </div>
  )
}

export default ShowMoreComponent

