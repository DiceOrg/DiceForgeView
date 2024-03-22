import { useState, useEffect, createContext } from "react";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import SignIn from "./pages/SignedOut/SignIn";
import Register from "./pages/SignedOut/Register";
import Home from "./pages/SignedIn/Home";
import Header from "./components/Header";
import "./App.css";
import CharacterCreate from "./pages/SignedIn/Characters/components/CharacterCreate";
import CharacterView from "./pages/SignedIn/Characters/components/CharacterView";
import Cookies from "js-cookie";
import Characters from "./pages/SignedIn/Characters";

const StyleContext = createContext();
const LoginContext = createContext();
const DataContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    //role: "User"
  });
  const [color, setColor] = useState(() => {
    const initialTheme = localStorage.getItem("color");
    console.log("first set");
    return initialTheme ? initialTheme : "monochrome";
});

  function checkInput(inputField) {
    var input = document.getElementById(inputField);
    if (input) {
      if (input.value !== '') {
        input.classList.add('not-empty');
      } else {
        input.classList.remove('not-empty');
      }
    }
  }

  async function fetchCharacter(id, setCharacter) {
    try {
      // Get JWT token from wherever it's stored (e.g., localStorage, cookie)
      const jwtToken = Cookies.get('jwt');

      const response = await fetch(`https://localhost:7256/character/${id}`, {
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

  async function fetchAllCharacters(setCharacters) {
    try {
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

  function isCookieExpired(cookieName) {
    const cookieValue = Cookies.get(cookieName);
    return cookieValue === undefined;
  }

  useEffect(() => {
    const jwtToken = Cookies.get('jwt');
    let signedIn = false;
    console.log(jwtToken)
    if (jwtToken) {
      const isExpired = isCookieExpired('jwt');
      if (isExpired) {
        setUser();
        signedIn = false;
      } else {
        setUser("user");
        signedIn = true;
      }
    }
    if (!signedIn && location.pathname !== "/register") {
      navigate("/signin", { replace: true });
    } else if (signedIn && location.pathname === "/signin" || signedIn && location.pathname === "/register") {
      navigate("/", { replace: true });
    }

  }, [user, navigate]);

  useEffect(() => {
    console.log(registerData)
  }, [registerData])

  useEffect(() => {
    console.log(loginData)
  }, [loginData])

  return (
    <>
      <StyleContext.Provider value={{ color: color, setColor: setColor }}>
        <DataContext.Provider value={{ fetchCharacter: fetchCharacter, fetchAllCharacters: fetchAllCharacters }}>
          <LoginContext.Provider value={{ loginData, setLoginData, registerData, setRegisterData, checkInput, setUser }}>
            {user ? <Header /> : null}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/new" element={<CharacterCreate />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterView />} />
            </Routes>
          </LoginContext.Provider>
        </DataContext.Provider>
      </StyleContext.Provider>
    </>
  );
}

export { App, LoginContext, DataContext, StyleContext };
