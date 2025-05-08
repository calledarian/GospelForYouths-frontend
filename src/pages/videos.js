import VideoGallery from "../components/VideoGallery";
import sampleVideos from '../data/videos';

export default function Videos() {
    return (
        <div style={{
            padding: '20px', minHeight: 'calc(100vh - 200px)', margin: '50px 0'
        }}>
            <VideoGallery videos={sampleVideos} />
        </div>
    )
};
