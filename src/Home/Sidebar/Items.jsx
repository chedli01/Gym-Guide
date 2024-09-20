import { Progress, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import {Actual} from "../Home";

export default function Items({name,cl,isActive,handleActive,pr}) {
  const ContextItems=useContext(Actual)
  
  
  return (
    <div className="w-full h-1/4    bg-white">
      <div onClick={handleActive} className={`w-full h-5/6 ${cl} flex justify-start items-end ${isActive?"opacity-100 border-r-2 border-r-red-600":" opacity-60 "} font-extralight hover:opacity-100`}>
        <h1 className="text-7xl text-red-500 ml-5 -translate-y-1">{name}</h1>
      </div>
      <div className=" w-full flex justify-around items-center mt-1">
        
      
      <Progress className=" w-4/6 " color="red" value={pr} />
      <Typography className="w-1/6" color="red" variant="h5">
          {pr}%
        </Typography>
      </div>
    

    </div>
  );
}
