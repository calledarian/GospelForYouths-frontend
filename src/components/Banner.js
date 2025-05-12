import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';



export default function Banner() {

    const [banner, setBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const apiUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {
        const fetchBanner = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${apiUrl}/banner`);
                setBanner(response.data);
            } catch (err) {
                console.error("Failed to fetch the banenr", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBanner();
    }, [apiUrl]);

    if (isLoading) {
        return <div className='loading-container'>Loading News...</div>;
    }

    if (banner.length === 0) {
        return (
            <section className="hero-home">
                <div className="hero-text">
                    <h4>Hey there, welcome to Gospel For Youths!</h4>
                    <h1>Discover Powerful Bible Stories</h1> {/* Title */}
                    <p>Inspiring you to stand strong in faith, every step of the way.</p> {/* Statement */}
                    <Link to="/videos" className="cta-button">Start Watching</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="hero-home">
            <div className="hero-text">
                <h4>New Video</h4>
                <h1>{banner.bannerTitle}</h1> {/* Title */}
                <p>{banner.bannerStatement}</p> {/* Statement */}
                <Link to="/videos" className="cta-button">Start Watching</Link>
            </div>
        </section>
    );

}