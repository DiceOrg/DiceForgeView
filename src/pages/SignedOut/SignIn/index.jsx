import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";

export default function SignIn() {
    const { loginData, setLoginData, checkInput, setUser } = useContext(LoginContext);
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    console.log(loginData);
    const handleLogin = async () => {
        try {
            document.body.classList.add('loading');
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
                
                Cookies.set("jwt", data.token);
                document.body.classList.remove('loading');
                setShowPopup(false);
                setUser(loginData.email)
            } else {
                document.body.classList.remove('loading');
                setErrorMessage("Login failed");
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    useEffect(() => {
        document.body.classList.add('full-height');
        return () => {
            document.body.classList.remove('full-height');
        };
    }, []);

    return (
        <div className="sign-in-container">
            <img src="https://res.cloudinary.com/dhvcqoipp/image/upload/v1710498763/logo_xevjg4.png"></img>
            {showPopup && (
                <div className="popup">
                    <p>{errorMessage}</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )}
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
