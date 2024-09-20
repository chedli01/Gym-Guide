import { useContext } from "react";
import { MyLogin } from "../App";

export default function Form({handlePage,handleSign}) {
  const MyContext=useContext(MyLogin)
  return (
    <div className=" py-10 w-1/3 gap-y-8   flex flex-col items-center justify-center rounded-2xl bg-white/50">
      <form onSubmit={(event)=>{event.preventDefault();handlePage()}} className=" flex flex-col justify-center items-center w-full gap-y-6 ">
        <label className="text-4xl font-mono" id="1" >
          UserName
        </label>
        <input required onChange={(event)=>{MyContext.setUser(event.target.value)}} className="w-5/6 h-10 rounded-lg p-4" type="text" name="userName" />
        <label className="text-4xl font-mono" id="2" >
          Password
        </label>
        <input required  onChange={(event)=>{MyContext.setPass(event.target.value)}} className="w-5/6 h-10 rounded-lg p-4" type="Password" name="Email" />
        <div className="flex items-center justify-between gap-x-8">
        <button
          className="border-2 p-4 rounded-md text-4xl font-mono bg-white/80   border-white hover:bg-white "
          type="submit"
        >
          Login
        </button>
        <button onClick={handleSign} className="border-2 p-4 rounded-md text-4xl font-mono bg-white/80   border-white hover:bg-white ">Sign-Up</button>
        </div>
      </form>
      <a
        href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp2QdvUHF9KsVjn06DvI4qnsxy8g2ySjl4-hwa45zT5NpFuLtjLf5oLUGSKwJshI8kBeTdXj&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1878912117%3A1701338967012879&theme=glif"
        className="flex justify-between items-center h-14 w-5/6 p-5 border-2 border-white bg-white/80  rounded-lg hover:bg-white/100"
      >
        <h1 className="text-xl font-mono">Continue With Google </h1>
        <img
          width={50}
          height={50}
          src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
          alt=""
        />
      </a>
      <a
        href="https://www.facebook.com/"
        className="flex justify-between items-center p-5 h-14 w-5/6  rounded-lg border-2 border-white bg-white/80 hover:bg-white/100"
      >
        <h1 className="text-xl font-mono">Continue With Facebook </h1>
        <img
          width={50}
          height={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
      </a>
      <a
        href="https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
        className="flex justify-between p-5 items-center h-14 w-5/6  rounded-lg border-2 border-white bg-white/80 hover:bg-white/100"
      >
        <h1 className="text-xl font-mono">Continue With Outlook </h1>
        <img
          className=" translate-y-2"
          width={50}
          height={50}
          src="https://www.freepnglogos.com/uploads/logo-outlook-png/outlook-trouble-march-technology-services-3.png"
          alt=""
        />
      </a>
    </div>
  );
}
