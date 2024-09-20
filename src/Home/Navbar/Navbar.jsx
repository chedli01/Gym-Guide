import { useContext, useState } from "react";
import { Actual } from "../Home";

export default function Navbar() {

  const ContextItems = useContext(Actual);
  const handleState = (event) => {
    ContextItems.setSearch(event.target.value);
    

  };
  const handleP=()=>{ContextItems.setCont("clicked")}
  const handleIm=()=>{ContextItems.setCont("Unclicked")}
  const handleClick = () => {
    if (ContextItems.search == "abs-beginner") {
      ContextItems.setActPage("Abs");
      ContextItems.setActb("backAbsBeg");
      ContextItems.setActi("backAbsInt");
      ContextItems.setActp("backAbsPro");
      ContextItems.setInd(0);
      ContextItems.setCont("ShowClicked");
      ContextItems.setTab(ContextItems.beg[0]);
      ContextItems.setIme(ContextItems.ImB[0]);
      ContextItems.setMyProg(ContextItems.ProgB[0]);
    } else if (ContextItems.search == "abs-int") {
      ContextItems.setActPage("Abs");
      ContextItems.setActb("backAbsBeg");
      ContextItems.setActi("backAbsInt");
      ContextItems.setActp("backAbsPro");
      ContextItems.setInd(0);
      ContextItems.setCont("ShowClicked");
      ContextItems.setTab(ContextItems.Int[0]);
      ContextItems.setIme(ContextItems.ImI[0]);
      ContextItems.setMyProg(ContextItems.ProgI[0]);
    }
    else if(ContextItems.search == "abs-pro"){
      ContextItems.setActPage("Abs");
      ContextItems.setActb("backAbsBeg");
      ContextItems.setActi("backAbsInt");
      ContextItems.setActp("backAbsPro");
      ContextItems.setInd(0);
      ContextItems.setCont("ShowClicked");
      ContextItems.setTab(ContextItems.Pro[0]);
      ContextItems.setIme(ContextItems.ImP[0]);
      ContextItems.setMyProg(ContextItems.ProgP[0]);

    }
    else if(ContextItems.search == "chest-beginner"){
      ContextItems.setActPage("Chest");
      ContextItems.setActb("backChestBeg");
      ContextItems.setActi("backChestInt");
      ContextItems.setActp("backChestPro");
      ContextItems.setInd(1);
      ContextItems.setCont("ShowClicked");
      ContextItems.setTab(ContextItems.beg[1]);
      ContextItems.setIme(ContextItems.ImB[1]);
      ContextItems.setMyProg(ContextItems.ProgB[1]);
    }
    else if(ContextItems.search == "chest-int"){ContextItems.setActPage("Chest");
    ContextItems.setActb("backChestBeg");
    ContextItems.setActi("backChestInt");
    ContextItems.setActp("backChestPro");
    ContextItems.setInd(1);
    ContextItems.setCont("ShowClicked");
    ContextItems.setTab(ContextItems.Int[1]);
    ContextItems.setIme(ContextItems.ImI[1]);
    ContextItems.setMyProg(ContextItems.ProgI[1]);}
    else if(ContextItems.search == "chest-pro"){ContextItems.setActPage("Chest");
    ContextItems.setActb("backChestBeg");
    ContextItems.setActi("backChestInt");
    ContextItems.setActp("backChestPro");
    ContextItems.setInd(1);
    ContextItems.setCont("ShowClicked");
    ContextItems.setTab(ContextItems.Pro[1]);
    ContextItems.setIme(ContextItems.ImP[1]);
    ContextItems.setMyProg(ContextItems.ProgP[1]);}
    else if(ContextItems.search == "arms-beginner"){
      ContextItems.setActPage("Arms");
      ContextItems.setActb("backArmsBeg");
      ContextItems.setActi("backArmsInt");
      ContextItems.setActp("backArmsPro");
      ContextItems.setInd(2);
      ContextItems.setCont("ShowClicked");
      ContextItems.setTab(ContextItems.beg[2]);
      ContextItems.setIme(ContextItems.ImB[2]);
      ContextItems.setMyProg(ContextItems.ProgB[2]);
    }
    else if(ContextItems.search == "arms-int"){
    ContextItems.setActPage("Arms");
    ContextItems.setActb("backArmsBeg");
    ContextItems.setActi("backArmsInt");
    ContextItems.setActp("backArmsPro");
    ContextItems.setInd(2);
    ContextItems.setCont("ShowClicked");
    ContextItems.setTab(ContextItems.Int[2]);
    ContextItems.setIme(ContextItems.ImI[2]);
    ContextItems.setMyProg(ContextItems.ProgI[2]);

    }
  else if(ContextItems.search == "arms-pro"){ContextItems.setActPage("Arms");
  ContextItems.setActb("backArmsBeg");
  ContextItems.setActi("backArmsInt");
  ContextItems.setActp("backArmsPro");
  ContextItems.setInd(2);
  ContextItems.setCont("ShowClicked");
  ContextItems.setTab(ContextItems.Pro[2]);
  ContextItems.setIme(ContextItems.ImP[2]);
  ContextItems.setMyProg(ContextItems.ProgP[2]);}
  else if(ContextItems.search == "legs-beginner"){
    ContextItems.setActPage("legs");
    ContextItems.setActb("backlegsBeg");
    ContextItems.setActi("backlegsInt");
    ContextItems.setActp("backlegsPro");
    ContextItems.setInd(3);
    ContextItems.setCont("ShowClicked");
    ContextItems.setTab(ContextItems.beg[3]);
    ContextItems.setIme(ContextItems.ImB[3]);
    ContextItems.setMyProg(ContextItems.ProgB[3]);
  }
  else if(ContextItems.search == "legs-int"){
  ContextItems.setActPage("legs");
  ContextItems.setActb("backlegsBeg");
  ContextItems.setActi("backlegsInt");
  ContextItems.setActp("backlegsPro");
  ContextItems.setInd(3);
  ContextItems.setCont("ShowClicked");
  ContextItems.setTab(ContextItems.Int[3]);
  ContextItems.setIme(ContextItems.ImI[3]);
  ContextItems.setMyProg(ContextItems.ProgI[3]);

  }
else if(ContextItems.search == "legs-pro"){ContextItems.setActPage("legs");
ContextItems.setActb("backlegsBeg");
ContextItems.setActi("backlegsInt");
ContextItems.setActp("backlegsPro");
ContextItems.setInd(3);
ContextItems.setCont("ShowClicked");
ContextItems.setTab(ContextItems.Pro[3]);
ContextItems.setIme(ContextItems.ImP[3]);
ContextItems.setMyProg(ContextItems.ProgP[3]);}
  };
  return (
    <nav className="w-full h-36 bg-black fixed z-10 flex items-center justify-start">
      <img onClick={handleIm}
        className=" scale-50 "
        src="src\assets\logo-removebg-preview.png"
        alt=""
      />
      <div className="flex gap-x-2 items-center  w-2/5 translate-x-20 ">
        <input
          type="text"
          placeholder="Search"
          className=" w-5/6 rounded-md h-10 p-4"
          onChange={(event) => {
            handleState(event);
          }}
        />
        <button
          onClick={handleClick}
          className="w-24 h-10 absolute right-4 bg-red-700 text-white p-2 rounded-md text-xl "
        >
          Search
        </button>
      </div>
      <button onClick={handleP}  className="w-44 h-14 absolute right-4 bg-red-700 text-white p-2 rounded-md text-xl ">
        Our Products
      </button>
    </nav>
  );
}
