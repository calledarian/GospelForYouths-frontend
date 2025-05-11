import '../styles/footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-text">
                © Copyright {currentYear} Gospel For Youths
            </div>
        </div>
    )
}