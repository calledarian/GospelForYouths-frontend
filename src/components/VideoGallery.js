import React from 'react';
import '../styles/videogallery.css'

function VideoGallery({ videos = [], title = "Videos" }) {
    if (videos.length === 0) {
        return (
            <div className="gallery-container">
                <h2 className="gallery-title">{title}</h2>
                <div className="gallery-empty">
                    <p>No videos available yet</p>
                    <p>Check back later for new content!</p>
                </div>
            </div>
        );
    }

    // Handle click on a video
    const handleVideoClick = (video) => {
        console.log('Video clicked:', video);

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
                    >
                        <div className="thumbnail-wrapper">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="thumbnail"
                            />
                            <div className="play-overlay">
                                <span className="play-icon">▶</span>
                            </div>
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                            {video.duration && (
                                <span className="video-duration">{video.duration}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoGallery;