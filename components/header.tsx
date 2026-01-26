export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="nav-items">

                    <a href="#" className="header-logo-link">
                        <h1 className="header-logo-title">
                            Oracle<br />
                            <span className="header-logo-subtitle">of Art</span>
                        </h1>
                    </a>

                    <nav className="header-nav">
                        <a href="/" className="header-nav-link {% if request.endpoint == 'index' %}active{% endif %}">
                            Home
                        </a>
                        <a href="/gallery" className="header-nav-link">
                            Gallery
                        </a>
                        <a href="/ai-recognition" className="header-nav-link">
                            AI / Recognition
                        </a>
                        <a href="/my-collection" className="header-nav-link">
                            My Collection
                        </a>
                        <a href="/contact" className="header-nav-link">
                            Contact
                        </a>
                    </nav>

                    <div className="header-actions">

                        <button className="header-button" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>

                        <div className="user-menu-container" id="user-menu-container">
                            <button className="header-button" aria-label="User menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="user-menu-button-icon">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div id="user-menu" className="user-menu hidden">
                                <div className="user-menu-header">
                                    <div className="user-menu-header-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="user-menu-header-icon">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <p className="user-menu-header-text">
                                            Sign in as<br />student or teacher
                                        </p>
                                    </div>
                                </div>
                                <a href="/login" className="user-menu-item underline">Sign in</a>
                                <a href="/register" className="user-menu-item underline">Sign up</a>
                                <a href="/contact" className="user-menu-item">Help</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}