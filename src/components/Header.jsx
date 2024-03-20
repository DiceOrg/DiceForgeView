import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const color = "white";
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="logo" viewBox="0 0 16 16">
                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
            <h1 className="logo-title">DiceForge</h1>
            <div className="navbar">
                <NavLink to="/" style={{ color: color, textDecoration: 'none' }} className={(navData) => (navData.isActive ? "active" : 'none')}>
                    <div className="nav-item-container">
                        <div className="nav-item-content">
                            <h3>Home</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/characters" style={{ color: color, textDecoration: 'none' }} className={(navData) => (navData.isActive ? "active" : 'none')}>
                    <div className="nav-item-container">
                        <div className="nav-item-content">
                            <h3>Characters</h3>
                        </div>
                    </div>
                </NavLink>
            </div>
        </header>
    );
}