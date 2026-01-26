export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h2 className="footer-logo-title">
                            Oracle<br />of Art
                        </h2>
                        <p className="footer-text-muted footer-description">
                            Educational platform dedicated to the exploration and learning 
                            of Art History. Discover masterpieces from all eras.
                        </p>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Navigation</h3>
                        <ul className="footer-list footer-text-muted">
                            <li><a href="/gallery" className="footer-link">Gallery</a></li>
                            <li><a href="/ai-recognition" className="footer-link">AI / Recognition</a></li>
                            <li><a href="/contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Legal</h3>
                        <ul className="footer-list footer-text-muted">
                            <li><a href="/politica-de-privacidad" className="footer-link">Privacy Policy</a></li>
                            <li><a href="/terminos-de-uso" className="footer-link">Terms of Use</a></li>
                            <li><a href="/accesibilidad" className="footer-link">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>© 2026 Oracle of Art. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
};