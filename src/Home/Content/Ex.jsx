import { Checkbox, checkbox, useSelect } from "@material-tailwind/react";
import { useContext, useState } from "react";
import {Actual} from "../Home";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Pts from "./Pts";

export default function Ex({ val }) {
  
  const ContextItems = useContext(Actual);
  
  const handleChange=()=>{
    ContextItems.setDone((prev)=>(prev.map((item,indice)=>{
      if(indice==val.id) return (!item)
      return item
    })))

    if (ContextItems.Done[val.id]==false){
     
      
      if (0<=val.id && val.id<=4){ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item+20)
        return item
      
      }))) ;ContextItems.setMyProg(ContextItems.MyProg+20)} 
      else if(5<=val.id && val.id<=9){ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item+20);
        return item;
      }))) ;ContextItems.setMyProg(ContextItems.MyProg+20)} 
      else if(10<=val.id && val.id<=14){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(15<=val.id && val.id<=19){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(20<=val.id && val.id<=24){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(25<=val.id && val.id<=29){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(30<=val.id && val.id<=34){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(35<=val.id && val.id<=39){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(40<=val.id && val.id<=44){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(45<=val.id && val.id<=49){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else if(50<=val.id && val.id<=54){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      else{ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item+20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg+20)}
      //////////////////////////////////////////////////////////////////////
      ///////////////////////////////////
      
/////////////////////////////////////////////////
////////////////////////////////////////////////////////    
      if (ContextItems.ActPage=="Abs"){ContextItems.setProgMAbs(ContextItems.ProgMAbs+6)} 
      else if (ContextItems.ActPage=="Chest") ContextItems.setProgMCh(ContextItems.ProgMCh+6)
      else if (ContextItems.ActPage=="Arms") ContextItems.setProgMAr(ContextItems.ProgMAr+6)
      else ContextItems.setProgMLe(ContextItems.ProgMLe+6)
       
    


    }
    else{
      if (0<=val.id && val.id<=4){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(5<=val.id && val.id<=9){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(10<=val.id && val.id<=14){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(15<=val.id && val.id<=19){ ContextItems.setProgB((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(20<=val.id && val.id<=24){ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(25<=val.id && val.id<=29){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(30<=val.id && val.id<=34){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(35<=val.id && val.id<=39){ ContextItems.setProgI((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(40<=val.id && val.id<=44){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==0) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(45<=val.id && val.id<=49){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==1) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else if(50<=val.id && val.id<=54){ ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==2) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      else{ContextItems.setProgP((prev)=>(prev.map((item,indice)=>{
        if(indice==3) return (item-20)
        return item
      })));ContextItems.setMyProg(ContextItems.MyProg-20)}
      if (ContextItems.ActPage=="Abs") ContextItems.setProgMAbs(ContextItems.ProgMAbs-6)
      else if (ContextItems.ActPage=="Chest") ContextItems.setProgMCh(ContextItems.ProgMCh-6)
      else if (ContextItems.ActPage=="Arms") ContextItems.setProgMAr(ContextItems.ProgMAr-6)
      else ContextItems.setProgMLe(ContextItems.ProgMLe-6)


    }
   


    
    
    }
  

  return (
    <div className={`w-full h-1/6 flex justify-start items-center border-b-2 gap-x-4 border-t-2 border-red-800` }>
        <input className="ml-2 w-6 h-6" type="checkbox" checked={ContextItems.Done[val.id]} />
        <h1 className="text-2xl">{val.title}</h1>
        <button className="p-2 w-32 h-10  border-2 border-red-500 rounded-lg" onClick={handleChange}>{`${ContextItems.Done[val.id]?"Remove":"Add"}`}</button>
        
      
      
      
    </div>
  );
}