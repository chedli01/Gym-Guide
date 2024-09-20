import { useContext } from "react"
import {Actual} from "../Home";

export default function Pts({v}){
    const ContextItems =useContext(Actual)
    return <div className={`ml-4 w-4 h-4 ${ContextItems.check[v.id]==true?"bg-green-600":"bg-red-700"}`}>
        
    </div>
}