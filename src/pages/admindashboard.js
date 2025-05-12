import React, { useState, useEffect, useCallback } from 'react';
import '../styles/AdminDashboard.css';
import axios from 'axios';

function AdminDashboard() {

    const apiUrl = process.env.REACT_APP_API_URL;

    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

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

    // Function to fetch videos from the API
    const fetchVideos = useCallback(async () => {
        const token = localStorage.getItem('token'); // Retrieve JWT from localStorage

        try {
            setIsLoading(true);
            const response = await axios.get(
                `${apiUrl}/videos`,
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the JWT token in Authorization header
                    }
                }
            );
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setIsLoading(false);
        }
    }, [apiUrl]);

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);


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



    const createVideo = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            setIsLoading(true);
            await axios.post(
                `${apiUrl}/videos`,
                {
                    title,
                    url,
                    description
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setTitle('');
            setUrl('');
            setDescription('');
            fetchVideos(); // Fetch videos after adding the new one
        } catch (error) {
            console.error('Error creating video:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteVideo = async (id) => {
        const token = localStorage.getItem('token');

        if (!window.confirm("Are you sure you want to delete this video?")) return;

        try {
            setIsLoading(true);
            await axios.delete(
                `${apiUrl}/videos/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            fetchVideos();
        } catch (error) {
            console.error('Error deleting video:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const extractYouTubeId = (url) => {
        if (!url) return null;

        const pattern = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/i;
        const match = url.match(pattern);

        return match && match[1] ? match[1] : null;
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove the JWT token from localStorage
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button onClick={logout}>Logout</button>
            </div>

            <div className="dashboard-content">
                <div className="add-video-section">
                    <h2>Add Video</h2>
                    <form onSubmit={createVideo} className="video-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter video title"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="url">YouTube URL</label>
                            <input
                                id="url"
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Enter YouTube video URL"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description (optional)</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter video description"
                                rows="3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Saving...' : 'Add Video'}
                        </button>
                    </form>
                </div>

                <div className="video-management">
                    <h2>Manage Videos</h2>
                    {isLoading && <div className="loading">Loading videos...</div>}

                    {!isLoading && videos.length === 0 && (
                        <div className="no-videos">
                            No videos available
                        </div>
                    )}

                    {!isLoading && videos.length > 0 && (
                        <div className="video-list">
                            {videos.map((video) => {
                                const videoId = extractYouTubeId(video.url);

                                return (
                                    <div key={video.id} className="video-item">
                                        <div className="video-content">
                                            <div className="video-header">
                                                <h3>{video.title}</h3>
                                            </div>

                                            {videoId && (
                                                <div className="video-thumbnail">
                                                    <img
                                                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                        alt={`Thumbnail for ${video.title}`}
                                                    />
                                                </div>
                                            )}

                                            <div className="video-details">
                                                <a
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="video-url"
                                                >
                                                    {video.url}
                                                </a>

                                                {video.description && (
                                                    <div className="video-description">
                                                        {video.description}
                                                    </div>
                                                )}

                                                <div className="video-id">
                                                    ID: {video.id}
                                                </div>
                                            </div>

                                            <div className="video-actions">
                                                <button
                                                    onClick={() => deleteVideo(video.id)}
                                                    className="btn btn-danger"
                                                    disabled={isLoading}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="banner-management">
                    <h2>Change Current Banner</h2>
                    <form onSubmit={changeBanner} className="banner-form">
                        <div className="form-group">
                            <label htmlFor="banner-title">Banner Title</label>
                            <input
                                id="banner-title"
                                type="text"
                                value={bannerTitle}
                                onChange={(e) => setBannerTitle(e.target.value)}
                                placeholder={`Current title is: ${banner.bannerTitle}`}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="banner-statement">Banner Statement</label>
                            <textarea
                                id="banner-statement"
                                value={bannerStatement}
                                onChange={(e) => setBannerStatement(e.target.value)}
                                placeholder={`Current statement is: ${banner.bannerStatement}`}
                                rows="3"
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
            </div>
        </div>
    );
}

export default AdminDashboard;
