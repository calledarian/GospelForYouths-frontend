import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/VideoGallery.css';

function VideoGallery() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${apiUrl}/videos`);
                setVideos(response.data);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, [apiUrl]);

    const extractYouTubeId = (url) => {
        if (!url) return null;
        const pattern = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/i;
        const match = url.match(pattern);
        return match && match[1] ? match[1] : null;
    };

    if (isLoading) {
        return <div className="loading-container">Loading videos...</div>;
    }

    if (videos.length === 0) {
        return (
            <div className="empty-container">
                <h2>No Videos Available</h2>
                <p>No videos have been added to the gallery yet.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="video-gallery-container">
                <h2 className="gallery-title">Video Gallery</h2>

                <div className="video-grid">
                    {videos.map((video) => {
                        const videoId = extractYouTubeId(video.url);

                        return (
                            <div key={video.id} className="video-card">
                                <h3 className="video-title">{video.title}</h3>

                                {videoId ? (
                                    <div className="video-frame-container">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="no-video">
                                        <p>No valid YouTube URL provided</p>
                                    </div>
                                )}

                                <div className="video-details">
                                    {video.description && (
                                        <p className="video-description">{video.description}</p>
                                    )}
                                    <a
                                        href={video.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="youtube-link"
                                    >
                                        Watch on YouTube
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default VideoGallery;