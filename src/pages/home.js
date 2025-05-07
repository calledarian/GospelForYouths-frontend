import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-home">
                <div className="hero-text">
                    <h4>New Video</h4>
                    <h1>Daniel and the Lion’s Den</h1>
                    <p>Standing Strong in Faith</p>
                    <Link to="/videos" className="cta-button">Daniel Chapter 6</Link>
                </div>
            </section>

            <div className="support-mes">
                <h2 className="support-title">Bringing Bible Stories to Life for the Youths</h2>
                <p className="support-subtext">
                    Your support helps us to create videos and articles with better qualities
                </p>
                <Link to="/gift" className="support-button">Give Now</Link>
            </div>
        </div>
    );
};

export default Home;
