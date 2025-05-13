import axios from "axios";
import { useEffect, useState } from "react";


export default function CreateBanner() {

    const apiUrl = process.env.REACT_APP_API_URL;

    const [isLoading, setIsLoading] = useState(true);
    const [bannerTitle, setBannerTitle] = useState('');
    const [bannerStatement, setBannerStatement] = useState('');
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${apiUrl}/banner`);
                setBanner(response.data);
            } catch (err) {
                console.error("Failed to fetch the banner", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBanner();
    }, [apiUrl]);

    const changeBanner = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            setIsLoading(true);
            await axios.put(
                `${apiUrl}/banner`,
                {
                    bannerTitle,
                    bannerStatement
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            // Reset the input fields after successful API request
            setBannerTitle('');
            setBannerStatement('');
            window.location.reload();
        } catch (error) {
            console.error('ERROR changing banner:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="video-panel">
            <h2 className="panel-title">Change Current Banner</h2>
            <form onSubmit={changeBanner} className="banner-form">
                <div className="form-group">
                    <label htmlFor="banner-title">Banner Title</label>
                    <input
                        id="banner-title"
                        type="text"
                        value={bannerTitle}
                        onChange={(e) => setBannerTitle(e.target.value)}
                        placeholder={`Current title is: ${banner.bannerTitle || '...Loading'}`}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="banner-statement">Banner Statement</label>
                    <textarea
                        id="banner-statement"
                        value={bannerStatement}
                        onChange={(e) => setBannerStatement(e.target.value)}
                        placeholder={`Current statement is: ${banner.bannerStatement || '...Loading'}`}
                        rows="3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                >
                    {isLoading ? 'Saving...' : 'Change'}
                </button>
            </form>
        </div>
    )

}