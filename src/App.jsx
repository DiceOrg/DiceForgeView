import { useState, useEffect, createContext } from "react";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignedOut/SignIn";
import Register from "./pages/SignedOut/Register";
import Home from "./pages/SignedIn/Home";
import "./App.css";
import CharacterView from "./pages/SignedIn/Characters/components/CharacterView";


const LoginContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState("s");
  const [loginData, setLoginData] = useState({ email: "", password: ""});
  const [registerData, setRegisterData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    //role: "User"
  });

  function checkInput(inputField) {
    var input = document.getElementById(inputField);
    if (input){
      if(input.value !== '') {
        input.classList.add('not-empty');
      } else {
        input.classList.remove('not-empty');
      }
    }
  }

  // useEffect(() => {
  //   if (!user && location.pathname !== "/register") {
  //     navigate("/signin", { replace: true });
  //   }
  // }, [user, navigate]);

  useEffect(()=>{
    console.log(registerData)
  }, [registerData])

  return (
    <>
      <LoginContext.Provider value={{loginData, setLoginData, registerData, setRegisterData, checkInput}}>
        {user ? <Header/> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main" element={<CharacterView />} />
        </Routes>
      </LoginContext.Provider>
    </>
  );
}

export {App, LoginContext};
