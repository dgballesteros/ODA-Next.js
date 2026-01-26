export default function Registro() { 
    return ( 
        <>
            <section className="auth-section">
                <div className="container">
                    <div className="auth-container">
                        <div className="auth-header">
                            <h1 className="auth-title">Create account</h1>
                            <p className="auth-subtitle">
                                Join Oracle of Art and access all educational features
                            </p>
                        </div>

                        <form className="auth-form" method="POST" action="/register">
                            {/* Full name */}
                            <div className="form-group">
                                <label htmlFor="nombre" className="form-label">
                                    Full name *
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="form-input"
                                    placeholder="Your full name"
                                    required
                                    autoComplete="name"
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
                                    autoComplete="email"
                                />
                            </div>

                            {/* User type */}
                            <div className="form-group">
                                <label htmlFor="tipo_usuario" className="form-label">
                                    User type *
                                </label>
                                <select id="tipo_usuario" name="tipo_usuario" className="form-select" required>
                                    <option value="">Select your profile</option>
                                    <option value="alumno">Student</option>
                                    <option value="docente">Teacher</option>
                                </select>
                            </div>

                            {/* Institution */}
                            <div className="form-group">
                                <label htmlFor="institucion" className="form-label">
                                    Educational institution
                                </label>
                                <input
                                    type="text"
                                    id="institucion"
                                    name="institucion"
                                    className="form-input"
                                    placeholder="University, school, institute..."
                                    autoComplete="organization"
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="Minimum 8 characters"
                                    required
                                    autoComplete="new-password"
                                    minLength={8}
                                />
                                <p className="form-hint">Password must be at least 8 characters long</p>
                            </div>

                            {/* Confirm Password */}
                            <div className="form-group">
                                <label htmlFor="confirm_password" className="form-label">
                                    Confirm password *
                                </label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    className="form-input"
                                    placeholder="Repeat your password"
                                    required
                                    autoComplete="new-password"
                                    minLength={8}
                                />
                            </div>

                            {/* Terms */}
                            <div className="form-group">
                                <label className="form-checkbox">
                                    <input type="checkbox" name="terms" id="terms" required />
                                    <span>I accept the <a href="/terminos" className="form-link-inline">terms and conditions</a> and the <a href="/privacidad" className="form-link-inline">privacy policy</a></span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-auth-primary">
                                Create account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="auth-divider">
                            <span>o</span>
                        </div>

                        {/* Login Link */}
                        <div className="auth-footer">
                            <p className="auth-footer-text">
                                Already have an account?
                                <a href="/login" className="auth-footer-link">Sign in here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}