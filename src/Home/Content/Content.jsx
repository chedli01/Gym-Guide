import Card from "./Card";
import { useContext, useState } from "react";
import {Actual} from "../Home";
import ExCard from "./ExerciceCard";
import PCards from "./PCards";

export default function Content() {
  

  const contextItems =useContext(Actual);
  

  // const [Cont, setCont] = useState("Unclicked");
  return (
    <>
      {" "}
      <div
        className={`${
          contextItems.Cont == "Unclicked"
            ? "w-3/4 h-full flex justify-around items-center"
            : "hidden"
        }`}
      >
        <Card
          niv="Beginner"
          clI="black"
          clII="none"
          clIII="none"
          c={contextItems.Actb}
          handleShow={() => {
            contextItems.setCont("ShowClicked");
            contextItems.setTab(contextItems.beg[contextItems.Ind]);
            contextItems.setIme(contextItems.ImB[contextItems.Ind]);
            contextItems.setMyProg(contextItems.ProgB[contextItems.Ind]);
         
          }}
        />
        <Card
          niv="Intermediate"
          clI="black"
          clII="black"
          clIII="none"
          c={contextItems.Acti}
          handleShow={() => {
            contextItems.setCont("ShowClicked");
            contextItems.setTab(contextItems.Int[contextItems.Ind]);
            contextItems.setIme(contextItems.ImI[contextItems.Ind]);
            contextItems.setMyProg(contextItems.ProgI[contextItems.Ind]);
          }}
        />
        <Card
          niv="Pro"
          clI="black"
          clII="black"
          clIII="black"
          c={contextItems.Actp}
          handleShow={() => {
            contextItems.setCont("ShowClicked");
            contextItems.setTab(contextItems.Pro[contextItems.Ind]);
            contextItems.setIme(contextItems.ImP[contextItems.Ind]);
            contextItems.setMyProg(contextItems.ProgP[contextItems.Ind]);
          }}
        />
      </div>
      <div
        className={`${
          contextItems.Cont == "ShowClicked"
            ? " w-3/4 h-full flex justify-around items-center"
            : "hidden"
        }`}
      >
        <ExCard
          value={contextItems.tab}
          handleBack={() => contextItems.setCont("Unclicked")}
        />
      </div>
      <div className={`${
          contextItems.Cont == "clicked"
            ? " w-screen h-full flex justify-around items-center "
            : "hidden"
        }`}>
          <PCards Price={"50 TND"} Name={"ISO SENSATION® 93"}  url={"https://ultimatenutrition.com/cdn/shop/products/283_ISO93910gCafe-940x1018_cd1bf91d-ca03-476f-84b9-b4d3c9c04b8e-847692.png?v=1694639385&width=5000"}/>
          <PCards Price={"20 TND"} Name={"ISO SENSATION® 93"}  url={"https://ultimatenutrition.com/cdn/shop/products/99130_ProWheyPBJ30g-940x1018_4d011c4e-6b04-41c7-865d-192d55a9d935-180846.png?v=1694639368&width=5000"}/>
          <PCards Price={"60 TND"} Name={"WHEY GOLD"}  url={"https://ultimatenutrition.com/cdn/shop/products/356_WheyGold2.27kgVan-940x1018_a8c36233-b754-439f-af1d-1c1b4aa69b46-887379.png?v=1694639376&width=5000"} />
          <PCards Price={"40 TND"} Name={"ISOCOOL COLD"}  url={"https://ultimatenutrition.com/cdn/shop/products/251_ISoCool907gChBry-940x1018_4a27df88-bc36-4481-8f95-a6d901996b4f-310308.png?v=1694639333&width=5000"}/>



      </div>

    </>
  );
}
