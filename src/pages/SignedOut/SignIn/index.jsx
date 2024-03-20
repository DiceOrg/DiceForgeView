import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";
import Cookies from "js-cookie";

export default function SignIn() {
  const { loginData, setLoginData, checkInput } = useContext(LoginContext);

  console.log(loginData);
  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:7256/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store token in local storage
        console.log(data);
        Cookies.set("jwt", data.token);
      } else {
        // Handle error response
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <img src="https://res.cloudinary.com/dhvcqoipp/image/upload/v1710498763/logo_xevjg4.png"></img>
      <div className="input-area">
        <input
          id="e-mail"
          type="text"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          onInput={checkInput("e-mail")}
        />
        <div className="labelline">Email</div>
      </div>
      <div className="input-area">
        <input
          id="password"
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          onInput={checkInput("password")}
        />
        <div className="labelline">Password</div>
      </div>
      <button onClick={handleLogin}>Login</button>
      <div className="register-label">
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          No account? Click here to register.
        </Link>
      </div>
    </div>
  );
}
