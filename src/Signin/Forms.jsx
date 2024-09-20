import { useContext } from "react";
import { MyLogin } from "../App";

export default function Forms({handlePageSign}) {
    const MyContext=useContext(MyLogin)
  return (
    <div className=" py-10 w-1/3 gap-y-8   flex flex-col items-center justify-center rounded-2xl bg-white/50">
      <form onSubmit={(event)=>{event.preventDefault();handlePageSign()}} className=" flex flex-col justify-center items-center w-full gap-y-6 ">
        <label className="text-4xl font-mono" id="1">
          UserName
        </label>
        <input onChange={(event)=>{MyContext.setNewUser(event.target.value)}}
          className="w-5/6 h-10 rounded-lg p-4"
          type="text"
          name="userName"
          required
        />
        <label className="text-4xl font-mono" id="4">
          New Password
        </label>
        <input onChange={(event)=>{MyContext.setNewPass(event.target.value)}}
          className="w-5/6 h-10 rounded-lg p-4"
          type="Password"
          name="Email"
          required
        />
        <label className="text-4xl font-mono" id="7">
          Confirm Password
        </label>
        <input onChange={(event)=>{MyContext.setNewPassC(event.target.value)}}
          className="w-5/6 h-10 rounded-lg p-4"
          type="Password"
          name="Email"
          required
        />
        <label className="text-4xl font-mono" id="10">
          E-Mail
        </label>
        <input
          className="w-5/6 h-10 rounded-lg p-4"
          type="email"
          name="Email"
          required
        />

        <button
          
          className="border-2 p-4 rounded-md text-4xl font-mono bg-white/80   border-white hover:bg-white "
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
