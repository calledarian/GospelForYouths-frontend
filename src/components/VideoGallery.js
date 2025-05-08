import React from 'react';
import '../styles/videogallery.css';

function VideoGallery({ videos = [], title = "Videos" }) {
    const handleVideoClick = (video) => {
        window.open(video.youtubeLink, '_blank');
    };

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">{title}</h2>

            <div className="gallery-grid">
                {videos.map((video) => (
                    <div
                        className="video-card"
                        key={video.id}
                        onClick={() => handleVideoClick(video)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="thumbnail-wrapper">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="thumbnail"
                            />
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                            <span className="video-duration">{video.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoGallery;
