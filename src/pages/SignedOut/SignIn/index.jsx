export default function SignIn() {

    return (
        <div className="sign-in-container">
            <img src="https://res.cloudinary.com/dhvcqoipp/image/upload/v1710498763/logo_xevjg4.png"></img>
            <div className="input-area">
                <input type="text" required />
                <div className="labelline">Username</div>
            </div>
            <div className="input-area">
                <input type="password" required />
                <div className="labelline">Password</div>
            </div>
            <div className="register-label">
                No account? Click here to register.
            </div>
        </div>
    );
}