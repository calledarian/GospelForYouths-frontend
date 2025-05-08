import { Mail, Youtube } from 'lucide-react';

export default function Contact() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)', margin: '50px 0', backgroundColor: '#ffffff' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: 'auto', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ color: '#222', marginBottom: '25px', fontSize: '28px' }}>Get in Touch</h1>
                <p style={{ color: '#444', marginBottom: '35px', fontSize: '18px', lineHeight: '1.6' }}>
                    We'd love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out to us anytime.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Mail color="#0056b3" size={26} />
                        <a href="mailto:gospelforyouths@gmail.com" style={{ color: '#0056b3', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>gospelforyouths@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Youtube color="#cc0000" size={26} />
                        <a href="https://youtube.com/@gospelforyouths" target="_blank" rel="noopener noreferrer" style={{ color: '#cc0000', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>@gospelforyouths</a>
                    </div>
                </div>
            </div>
        </div>
    );
}