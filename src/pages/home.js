import '../styles/home.css';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="home-page">
            <Banner />
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
