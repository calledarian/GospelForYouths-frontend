export default function Gift() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
                Donations Coming Soon!
            </h1>
            <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '600px' }}>
                We're working on setting up a donation method to support our mission. Stay tuned for updates!
            </p>
            <div style={{
                marginTop: '30px',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <span>Thank you for your patience!</span>
            </div>
        </div>
    )
}