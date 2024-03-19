import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";

export default function Register() {
  const {registerData, setRegisterData} = useContext(LoginContext);

  const handleRegister = async () => {
    try {
      const response = await fetch("https://localhost:7256/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      if (response.ok) {
        // Handle successful registration
        console.log(response)
        console.log("Registration successful");
      } else {
        // Handle error response
        console.log(response)
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
        console.log(response)
        console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <img src="https://res.cloudinary.com/dhvcqoipp/image/upload/v1710498763/logo_xevjg4.png"></img>
      <div className="input-area">
        <input
          type="text"
          placeholder="Email"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
        />
        <div className="labelline">E-mail</div>
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Username"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
        />
        <div className="labelline">Username</div>
      </div>
      <div className="input-area">
        <input
          type="password"
          placeholder="Password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
        <div className="labelline">Password</div>
      </div>
      <button onClick={handleRegister}>Register</button>
      <div className="register-label">
        <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>
          Already registered? Click here to sign in.
        </Link>
      </div>
    </div>
  );
}
