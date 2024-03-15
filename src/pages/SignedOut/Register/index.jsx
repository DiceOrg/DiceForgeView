import { Link } from 'react-router-dom';

export default function Register() {

    return (
        <div className="sign-in-container">
            <img src="https://res.cloudinary.com/dhvcqoipp/image/upload/v1710498763/logo_xevjg4.png"></img>
            <div className="input-area">
                <input type="email" required />
                <div className="labelline">E-mail</div>
            </div>
            <div className="input-area">
                <input type="text" required />
                <div className="labelline">Username</div>
            </div>
            <div className="input-area">
                <input type="password" required />
                <div className="labelline">Password</div>
            </div>
            <button>
                Register
            </button>
            <div className="register-label">
                <Link to="/signin" style={{ textDecoration: 'none', color: "white" }}>Already registered? Click here to sign in.</Link>
            </div>
        </div>
    );
}