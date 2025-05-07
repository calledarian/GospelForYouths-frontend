import VideoGallery from "../components/VideoGallery";
import sampleVideos from '../data/videos';

export default function Videos() {
    return (
        <div style={{
            padding: '20px',
        }}>
            <VideoGallery videos={sampleVideos} />
        </div>
    )
};
