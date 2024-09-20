import Body from "./Body";
import Navbar from "./Navbar/Navbar";
import { createContext, useState } from "react";

export const Actual = createContext();

export default function Home({ page }) {
  const beg = [
    [
      { title: "Russian Twist x20 ", id: 0 },
      { title: "Jumping Jacks x16", id: 1 },
      { title: "Crunch Abs x12", id: 2 },
      { title: "Mountain Cimber x12", id: 3 },
      { title: "Leg Raises x14", id: 4 },
    ],
    [
      { title: "Push-Ups x4 ", id: 5 },
      { title: "Incline Push-Ups x6", id: 6 },
      { title: "Wide Arm Push-Ups x4", id: 7 },
      { title: "Triceps Dips x6", id: 8 },
      { title: "Knee Push-Ups x4", id: 9 },
    ],
    [
      { title: "Arm Raises 00:30  ", id: 10 },
      { title: "Side Arm Raise 00:30", id: 11 },
      { title: "Arm Circles Clockwise 00:30", id: 12 },
      { title: "Diamond Push-Ups x6", id: 13 },
      { title: "Jumping Jacks 00:30", id: 14 },
    ],
    [
      { title: "Side Hop 00:30 ", id: 15 },
      { title: "Squats x12", id: 16 },
      { title: "Backward Lunge x14", id: 17 },
      { title: "Wall Calf Raises x12", id: 18 },
      { title: "Side Lying Leg x12", id: 19 },
    ],
  ];
  const Int = [
    [
      { title: "Heel Touch x26 ", id: 20 },
      { title: "Crossover Crunch x20", id: 21 },
      { title: "Plank 00:30", id: 22 },
      { title: "Bicycle Crunches x20", id: 23 },
      { title: "Cobra Stretch 00:30", id: 24 },
    ],
    [
      { title: "Hindu Push-Ups x10 ", id: 25 },
      { title: "Shoulder Stretch 00:30", id: 26 },
      { title: "Straggered Push-Ups x10", id: 27 },
      { title: "Decline Push-Ups x12", id: 28 },
      { title: "Chest Stretch 00:30", id: 29 },
    ],
    [
      { title: "Alternating Hooks 00:30", id: 30 },
      { title: "Military Push Ups x12", id: 31 },
      { title: "Burpees x8", id: 32 },
      { title: "Skipping Without Rope 00:30", id: 33 },
      { title: "Floor Tricep Dips x14", id: 34 },
    ],
    [
      { title: "Jumping Jacks 00:30", id: 35 },
      { title: "Wall Sit 00:30", id: 36 },
      { title: "Single Leg Calf x12", id: 37 },
      { title: "Reverse Flutter Kicks x12", id: 38 },
      { title: "Knee To Chest 00:30", id: 39 },
    ],
  ];

  const Pro = [
    [
      { title: "Jumping Jacks 00:30", id: 40 },
      { title: "Bicycle Crunches x24", id: 41 },
      { title: "V-Up x18", id: 42 },
      { title: "Crossover Crunch x24", id: 43 },
      { title: "Spine Lumbar Twist Stretch 00:30", id: 44 },
    ],
    [
      { title: "Arm Circles x20", id: 45 },
      { title: "Burpees x10", id: 46 },
      { title: "Box Push-Ups", id: 47 },
      { title: "Shoulder Stretch 00:30", id: 48 },
      { title: "Chest Stretch 00:30", id: 49 },
    ],
    [
      { title: "Chest Press Pulse 00:18", id: 50 },
      { title: "Push-Up & Rotation x12", id: 51 },
      { title: "Triceps Stretch 00:30", id: 52 },
      { title: "Standing Biceps 00:30", id: 53 },
      { title: "Floor Tricep Dips x12", id: 54 },
    ],
    [
      { title: "Squats x14", id: 55 },
      { title: "Bottom Lift x12", id: 56 },
      { title: "Cursty Lunges x14", id: 57 },
      { title: "Jumping Squats x14", id: 58 },
      { title: "Leaning Stretcher Raises x16", id: 59 },
    ],
  ];
  const [tab, setTab] = useState(beg[0]);
  const [ActPage, setActPage] = useState("Abs");
  const [Actb, setActb] = useState("backAbsBeg");
  const [Acti, setActi] = useState("backAbsInt");
  const [Actp, setActp] = useState("backAbsPro");
  const [Ind, setInd] = useState(0);
  const [ProgT, setProgT] = useState(0);
  const [ProgMAbs, setProgMAbs] = useState(0);
  const [ProgMCh, setProgMCh] = useState(0);
  const [ProgMAr, setProgMAr] = useState(0);
  const [ProgMLe, setProgMLe] = useState(0);
  const [Done, setDone] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [color, setColor] = useState("red");
  const [Cont, setCont] = useState("Unclicked");
  const [ProgB, setProgB] = useState([0, 0, 0, 0]);
  const [ProgI, setProgI] = useState([0, 0, 0, 0]);
  const [ProgP, setProgP] = useState([0, 0, 0, 0]);
  const [Progs, setProgs] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //..<id<..
  const [ImB, setImB] = useState([
    "backAbsBeg",
    "backChestBeg",
    "backArmsBeg",
    "backlegsBeg",
  ]);
  const [ImI, setImI] = useState([
    "backAbsInt",
    "backChestInt",
    "backArmsInt",
    "backlegsInt",
  ]);
  const [ImP, setIm] = useState([
    "backAbsPro",
    "backChestPro",
    "backArmsPro",
    "backlegsPro",
  ]);
  const [Ime, setIme] = useState("");
  const [MyProg, setMyProg] = useState(0);
  const [search, setSearch] = useState("");
  const [produc,setProduc]=useState("")

  const store = {
    produc,setProduc,
    tab, setTab,
    beg,Int,Pro,
    search,
    setSearch,
    MyProg,
    setMyProg,
    Ime,
    setIme,
    ImB,
    setImB,
    ImI,
    setImI,
    ImP,
    setIm,
    Progs,
    setProgs,
    ActPage,
    ProgB,
    setProgB,
    ProgI,
    setProgI,
    ProgP,
    setProgP,
    setActPage,
    Actb,
    setActb,
    Acti,
    setActi,
    Actp,
    setActp,
    Ind,
    setInd,
    ProgT,
    setProgT,
    ProgMAbs,
    setProgMAbs,
    ProgMCh,
    setProgMCh,
    ProgMAr,
    setProgMAr,
    ProgMLe,
    setProgMLe,
    Done,
    setDone,
    color,
    setColor,
    Cont,
    setCont,
  };

  return (
    <Actual.Provider value={store}>
      <div
        className={`${
          page == "Home" ? "flex flex-col gap-y-10 w-screen h-screen" : "hidden"
        }`}
      >
        <Navbar  />
        <Body />
      </div>
    </Actual.Provider>
  );
}
