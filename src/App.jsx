import { useState, createContext, useEffect } from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";
export const MyLogin = createContext();
import Signin from "./Signin/Signin";

// const logins = [
//   { userName: "Chedli", Password: "Chedli123" },
//   { userName: "Fedi", Password: "1234" },
//   { userName: "Ahmed", Password: "0000" },
//   { userName: "Koussay", Password: "11" },
// ];
// localStorage.setItem("users", JSON.stringify(logins));

function App() {
  const [logins, setLogins] = useState([
    { userName: "Chedli", Password: "Chedli123" },
  ]);
  const [currentLocal, setCurrentLocal] = useState([]);
  const [page, setPage] = useState("Login");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassC, setNewPassC] = useState("");
  const st = {
    newUser,
    setNewUser,
    newPass,
    setNewPass,
    newPassC,
    setNewPassC,
    user,
    setUser,
    pass,
    setPass,
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(logins));
    const obj = JSON.parse(localStorage.getItem("users"));

    setCurrentLocal(obj);
  }, [logins, setLogins]);

  return (
    <MyLogin.Provider value={st}>
      <Login
        page={page}
        handlePage={() => {
          // console.log(user)
          // console.log(pass)

          currentLocal.map((item, index) => {
            if (item.userName == user && item.Password == pass) {
              setPage("Home");
              alert(`welcome back`);
            }
          });
        }}
        handleSign={() => {
          setPage("Signin");
        }}
      />
      <Home page={page} />
      <Signin
        page={page}
        handlePageSign={() => {
          if (newPass == newPassC) {
            setLogins((prev) => [
              ...prev,
              { userName: newUser, Password: newPass },
            ]);
            setPage("Login");
            alert(`account created successfully`);
          }
          else{
            alert("Re Enter password")
          }
        }}
      />
    </MyLogin.Provider>
  );
}

export default App;
