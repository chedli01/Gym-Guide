import { useContext } from "react";
import Items from "./Items";
import {Actual} from "../Home";


export default function Menu() {
  const contextItems = useContext(Actual);

  return (
    <div className={`${contextItems.Cont=="clicked"?"hidden":"w-1/4 h-full bg-red-500 flex flex-col border-r-2 border-r-black"}`}>
      <Items
        name="Abs"
        cl="backAbs"
        isActive={contextItems.ActPage == "Abs"}
        handleActive={() => {
          contextItems.setActPage("Abs");
          contextItems.setActb("backAbsBeg");
          contextItems.setActi("backAbsInt");
          contextItems.setActp("backAbsPro");
          contextItems.setInd(0)
          contextItems.setCont("Unclicked")

        
        }}
        pr={contextItems.ProgMAbs}
      
      />
      <Items
        name="Chest"
        cl="backChess"
        isActive={contextItems.ActPage == "Chest"}
        handleActive={() => {
          contextItems.setActPage("Chest");
          contextItems.setActb("backChestBeg");
          contextItems.setActi("backChestInt");
          contextItems.setActp("backChestPro");
          contextItems.setInd(1)
          contextItems.setCont("Unclicked")
          }}
          pr={contextItems.ProgMCh}
      />
      <Items
        name="Arms"
        cl="backArms"
        isActive={contextItems.ActPage == "Arms"}
        handleActive={() => {
          contextItems.setActPage("Arms");
          contextItems.setActb("backArmsBeg");
          contextItems.setActi("backArmsInt");
          contextItems.setActp("backArmsPro");
          contextItems.setInd(2)
          contextItems.setCont("Unclicked")
          }}
          pr={contextItems.ProgMAr}
      />
      <Items
        name="legs"
        cl="backLegs"
        isActive={contextItems.ActPage == "legs"}
        handleActive={() => {
          contextItems.setActPage("legs");
          contextItems.setActb("backlegsBeg");
          contextItems.setActi("backlegsInt");
          contextItems.setActp("backlegsPro");
          contextItems.setInd(3)
          contextItems.setCont("Unclicked")
          }}
          pr={contextItems.ProgMLe}
      />
    </div>
  );
}
