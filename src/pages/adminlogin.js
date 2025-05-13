import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) throw new Error('Invalid username or password');

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            navigate('/admin');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: 'url("https://png.pngtree.com/background/20230611/original/pngtree-an-old-path-through-a-forest-picture-image_3171764.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(7px)',
                    borderRadius: '12px',
                    padding: '40px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    width: '300px',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}
            >
                <h2 style={{ textAlign: 'center', color: 'white', fontSize: "35px" }}>Admin Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid gray',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'black',
                        outline: 'none'
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid gray',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'black',
                        outline: 'none'
                    }}
                />

                {error && (
                    <div style={{
                        color: 'red',
                        backgroundColor: 'mistyrose',
                        padding: '8px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#4a5568',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
