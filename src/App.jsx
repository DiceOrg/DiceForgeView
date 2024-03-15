import { useState, useEffect,  } from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import SignIn from './pages/SignedOut/SignIn'
import Register from './pages/SignedOut/Register';
import Home from './pages/SignedIn/Home'
import './App.css'


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  console.log(location)

  
  useEffect(() => {
    if (!user && location.pathname !== "/register") {
      navigate('/signin', { replace: true });
    }
  }, [user, navigate]);
  return (
    <>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
          />
        </Routes>
    </>
  )
}

export default App
