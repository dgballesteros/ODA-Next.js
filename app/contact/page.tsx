import "@/styles/help.css";

export default function Ayuda() {
    return (
        <>
        <section className="ayuda-header">
            <div className="container">
                <div className="ayuda-header-content">
                    <h1 className="ayuda-title">
                        {/* TODO: Agregar lógica condicional para mostrar "Contact" o "Help Center" según request.endpoint */}
                        Help Center
                    </h1>
                    <p className="ayuda-description">
                        {/* TODO: Agregar lógica condicional para mostrar diferentes textos según request.endpoint */}
                        Need help? We're here to assist you. Send us your inquiry and we'll respond as soon as possible.
                    </p>
                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="ayuda-section">
            <div className="container">
                <div className="ayuda-grid">
                    {/* Contact Form */}
                    <div className="ayuda-form-section">
                        <div className="ayuda-form-card">
                            <h2 className="ayuda-form-title">Send us a message</h2>
                            <p className="ayuda-form-subtitle">
                                Fill out the form and we'll get in touch with you
                            </p>

                            <form className="ayuda-form" method="POST" action="/contact">
                                {/* Name */}
                                <div className="form-group">
                                    <label htmlFor="nombre" className="form-label">
                                        Full name *
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="form-input"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                {/* Inquiry type */}
                                <div className="form-group">
                                    <label htmlFor="tipo_consulta" className="form-label">
                                        Inquiry type *
                                    </label>
                                    <select id="tipo_consulta" name="tipo_consulta" className="form-select" required>
                                        <option value="">Select an option</option>
                                        <option value="tecnica">Technical issue</option>
                                        <option value="cuenta">Account inquiry</option>
                                        <option value="contenido">Content question</option>
                                        <option value="sugerencia">Suggestion</option>
                                        <option value="otro">Other</option>
                                    </select>
                                </div>

                                {/* Subject */}
                                <div className="form-group">
                                    <label htmlFor="asunto" className="form-label">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="asunto"
                                        name="asunto"
                                        className="form-input"
                                        placeholder="Brief summary of your inquiry"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label htmlFor="mensaje" className="form-label">
                                        Message *
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={6}
                                        className="form-textarea"
                                        placeholder="Describe your inquiry or problem in detail..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn-ayuda-submit">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="ayuda-info-section">
                        <div className="ayuda-info-card">
                            <h2 className="ayuda-info-title">Frequently asked questions</h2>
                            
                            <div className="faq-list">
                                <div className="faq-item">
                                    <h3 className="faq-question">How can I create an account?</h3>
                                    <p className="faq-answer">
                                        You can create an account by clicking "Sign up" in the top menu. 
                                        The process is quick and free.
                                    </p>
                                </div>

                                <div className="faq-item">
                                    <h3 className="faq-question">Do I need to register to use the platform?</h3>
                                    <p className="faq-answer">
                                        No, you can explore the gallery and use AI recognition without registering. 
                                        However, creating an account allows you to save your favorite artworks and access additional features.
                                    </p>
                                </div>

                                <div className="faq-item">
                                    <h3 className="faq-question">How does AI recognition work?</h3>
                                    <p className="faq-answer">
                                        Simply upload an image of an artwork and our artificial intelligence 
                                        will analyze it to provide you with detailed information about the work, its author, and historical context.
                                    </p>
                                </div>

                                <div className="faq-item">
                                    <h3 className="faq-question">Can I add my own artworks to the gallery?</h3>
                                    <p className="faq-answer">
                                        Yes, registered users can add artworks through the admin panel. 
                                        Artworks will be reviewed before being published.
                                    </p>
                                </div>

                                <div className="faq-item">
                                    <h3 className="faq-question">What image formats does recognition accept?</h3>
                                    <p className="faq-answer">
                                        We accept images in PNG, JPG, and WEBP formats with a maximum size of 10MB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="ayuda-contact-card">
                            <h2 className="ayuda-contact-title">Contact information</h2>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <div>
                                        <p className="contact-label">Email</p>
                                        <p className="contact-value">support@oracleofart.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <div>
                                        <p className="contact-label">Response time</p>
                                        <p className="contact-value">24-48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
} 