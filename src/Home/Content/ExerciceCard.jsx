import ExItems from "./ExItems";
import { Progress, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import {Actual} from "../Home";

export default function ExCard({value,handleBack}) {
    const contextItems = useContext(Actual);
 

    
  return (
    <div className="w-2/3 h-5/6  flex items-center justify-center border-2 border-black rounded-xl">
      <div className={`w-1/2 h-full ${contextItems.Ime} opacity-80 hover:opacity-100`}></div>
      <div className="w-1/2 h-full  flex flex-col gap-y-4 items-center">
        <div className="w-full h-1/4 flex items-center justify-start gap-x-10 mt-4">
          <svg onClick={handleBack}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <h1 className=" text-9xl">{contextItems.ActPage}</h1>
        </div>
        <ExItems value={value}  />
        
        <div className=" w-full h-10 flex items-center gap-x-10">
          <Progress className=" w-4/6 ml-10 " color="red" value={contextItems.MyProg} />
          <Typography className="w-1/6" color="red" variant="h5">
            {contextItems.MyProg}%
          </Typography>
        </div>
      </div>
    </div>
  );
}
