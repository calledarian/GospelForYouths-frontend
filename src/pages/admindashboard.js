import CreateBanner from '../components/CreateBanner';
import CreateVideos from '../components/CreateVideos';
import '../styles/AdminDashboard.css';


function AdminDashboard() {

    const logout = () => {
        localStorage.removeItem('token'); // Remove the JWT token from localStorage
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div className="admin-wrapper" style={{
            backgroundImage: 'url("https://png.pngtree.com/background/20230611/original/pngtree-an-old-path-through-a-forest-picture-image_3171764.jpg")'
        }}>

            <div className="dashboard-header">
                <h1 style={{ color: "white", fontSize: "30px" }}>Admin Dashboard</h1>
                <button onClick={logout}>Logout</button>
            </div>

            <div className="dashboard-content">

                <CreateVideos />
                <CreateBanner />

            </div>
        </div>
    );
}

export default AdminDashboard;
