import { useState } from 'react'
import SignIn from './pages/SignedOut/SignIn'
import Home from './pages/SignedIn/Home'
import './App.css'

function App() {
  const [user, setUser] = useState();

  return (
    <>
      {user ? <Home/> : <SignIn/>}
    </>
  )
}

export default App
