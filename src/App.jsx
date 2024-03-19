import { useState, useEffect, createContext } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignedOut/SignIn";
import Register from "./pages/SignedOut/Register";
import Home from "./pages/SignedIn/Home";
import "./App.css";
import MainPage from "./pages/MainPage";


const LoginContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [loginData, setLoginData] = useState({ email: "", password: ""});
  const [registerData, setRegisterData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    //role: "User"
  });


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
      <LoginContext.Provider value={{loginData, setLoginData, registerData, setRegisterData}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </LoginContext.Provider>
    </>
  );
}

export {App, LoginContext};
