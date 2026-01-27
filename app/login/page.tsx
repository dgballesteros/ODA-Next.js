import "@/styles/auth.css";

export default function LoginPage() { 
    return (
        <>
        <section className="auth-section">
            <div className="container">
                <div className="auth-container">
                    <div className="auth-header">
                        <h1 className="auth-title">Sign In</h1>
                        <p className="auth-subtitle">
                            Access your account to manage your favorite artworks and access all features
                        </p>
                    </div>

                    <form className="auth-form" method="POST" action="/login">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email address
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

                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Your password"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {/* Remember me & Forgot password */}
                        <div className="form-options">
                            <label className="form-checkbox">
                                <input type="checkbox" name="remember" id="remember" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="form-link">Forgot your password?</a>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-auth-primary">
                            Sign in
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="auth-divider">
                        <span>o</span>
                    </div>

                    {/* Register Link */}
                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            Don't have an account?
                            <a href="/register" className="auth-footer-link"> Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}