import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";
import { useNavigate } from "react-router";


export default function Register() {
    const { registerData, setRegisterData, checkInput } = useContext(LoginContext);
    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        try {
            document.body.classList.add('loading');
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
                document.body.classList.remove('loading');
                setShowPopup(false);
                navigate(`/signin`);
            } else {
                // Handle error response
                console.log(response)
                console.error("Registration failed:", response.statusText);
                document.body.classList.remove('loading');
                setErrorMessage("Registration failed");
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Registration failed:", error.message);
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
                    value={registerData.email}
                    onChange={(e) =>
                        setRegisterData({ ...registerData, email: e.target.value })
                    }
                    onInput={checkInput("e-mail")}
                />
                <div className="labelline">E-mail</div>
            </div>
            <div className="input-area">
                <input
                    id="username"
                    type="text"
                    value={registerData.username}
                    onChange={(e) =>
                        setRegisterData({ ...registerData, username: e.target.value })
                    }
                    onInput={checkInput("username")}
                />
                <div className="labelline">Username</div>
            </div>
            <div className="input-area">
                <input
                    id="password"
                    type="password"
                    value={registerData.password}
                    onChange={(e) =>
                        setRegisterData({ ...registerData, password: e.target.value })
                    }
                    onInput={checkInput("password")}
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
