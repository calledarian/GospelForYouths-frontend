import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import GospelLogo from '../images/Gospel.png';

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <div
                className="nav-logo"
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => window.location.href = '/'}
            >
                <img style={{ width: "50px", borderRadius: "50%" }} src={GospelLogo} alt="Gospel For Youths Logo" />
                <div style={{ marginLeft: "10px" }}>Gospel For Youths</div>
            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>

            <div className={`nav-items ${open ? 'open' : ''}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/videos" onClick={() => setOpen(false)}>Videos</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                <Link to="/gift" onClick={() => setOpen(false)}>Gift</Link>
            </div>
        </nav>
    );
}
