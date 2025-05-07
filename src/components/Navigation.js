import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <div className="nav-logo">Gospel For Youths</div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>

            <div className={`nav-items ${open ? 'open' : ''}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/videos" onClick={() => setOpen(false)}>Videos</Link>
                <Link to="/blog" onClick={() => setOpen(false)}>Blog Articles</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact Page</Link>
                <Link to="/gift" onClick={() => setOpen(false)}>Gift</Link>
            </div>
        </nav>
    );
}
