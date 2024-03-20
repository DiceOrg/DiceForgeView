import { useState, useEffect, createContext } from "react";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import SignIn from "./pages/SignedOut/SignIn";
import Register from "./pages/SignedOut/Register";
import Home from "./pages/SignedIn/Home";
import "./App.css";
import CharacterView from "./pages/SignedIn/Characters/components/CharacterView";
import Cookies from "js-cookie";

const LoginContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [character, setCharacter] = useState();
  const [characters, setCharacters] = useState([]);
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

  async function fetchCharacterData() {
    try {
      // Get JWT token from wherever it's stored (e.g., localStorage, cookie)
      const jwtToken = Cookies.get('jwt');
  
      const response = await fetch('https://localhost:7256/character/1', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setCharacter(data);
        console.log('Data:', data);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    fetchCharacterData();
  }, [loginData, registerData])

  async function fetchAllCharacters() {
    try {
      // Get JWT token from wherever it's stored (e.g., localStorage, cookie)
      const jwtToken = Cookies.get('jwt');
  
      const response = await fetch('https://localhost:7256/character', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
        console.log('Data:', data);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  // useEffect(() => {
  //   if (!user && location.pathname !== "/register") {
  //     navigate("/signin", { replace: true });
  //   }
  // }, [user, navigate]);

  useEffect(()=>{
    console.log(registerData.jwtToken)
  }, [registerData])

  useEffect(()=>{
    console.log(loginData)
  }, [loginData])

  return (
    <>
      <LoginContext.Provider value={{loginData, setLoginData, registerData, setRegisterData, checkInput}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main" element={<CharacterView character={character} setCharacter={setCharacter}/>} />
        </Routes>
      </LoginContext.Provider>
    </>
  );
}

export {App, LoginContext};
