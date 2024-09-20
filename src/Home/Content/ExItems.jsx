import { useContext } from "react";
import Ex from "./Ex";
import {Actual} from "../Home";
import { Progress, Typography } from "@material-tailwind/react"

export default function ExItems({value}){
    const ContextIt=useContext(Actual)    
    
    return <div  className={`w-full h-3/5  flex flex-col items-center gap-y-4 `}>
        {value.map((el)=>(<Ex val={el} key={el.id}/> ))}
        
        

        
    </div>
}