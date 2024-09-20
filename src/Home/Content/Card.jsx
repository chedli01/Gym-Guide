import { useState } from "react";
import Sv from "./Sv";
import { useContext } from "react";
import { Progress, Typography } from "@material-tailwind/react";
import {Actual} from "../Home";


export default function Card({niv,clI,clII,clIII,c,handleShow}) {
  const contextItems=useContext(Actual)
    


  return (
    <div className="w-1/4 h-2/3 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 ">
      <div className={`w-full h-2/3 ${c} opacity-60 hover:opacity-100`}></div>
      <div className="w-full flex flex-col items-center gap-y-3">
        <h1 className="text-BLACK text-6xl">{niv}</h1>
        <div className="flex justify-around items-center w-2/3">
            <Sv fill={clI}/>
            <Sv fill={clII}/>
            <Sv fill={clIII}  />

        </div>
        
      </div>
      
       


      <button onClick={handleShow} className="bg-gray-300 text-red-700 text-lg font-bold p-3 border-2 border-black rounded-md mt-3">
        Show Exercises
      </button>
    </div>
  );
}
