'use client'

import { useUserMenu } from '../hooks/useUserMenu'

export default function Header() {
    const { isMenuOpen, menuRef, toggleMenu } = useUserMenu()
    return (
        <header className="bg-(--primary)">
            <div className="container mx-auto flex items-center justify-between h-20">

                {/* Logo */}

                <a href="/" className="shrink-0">
                    <h1 className="font-(font-family-heading) text-2xl text-(--primary-foreground) leading-1.25">
                        Oracle<br />
                        <span className="font-(font-family-heading) text-xl text-(--primary-foreground)">of Art</span>
                    </h1>
                </a>

                {/* Menú de navegación */}

                <nav className="flex items-center gap-10 [&>a]:text-(--primary-foreground) [&>a]:opacity-80 [&>a]:transition-opacity [&>a]:duration-200 [&>a]:hover:opacity-100">
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/ai-recognition">AI / Recognition</a>
                    <a href="/my-collection">My Collection</a>
                    <a href="/contact">Contact</a>
                </nav>

                {/* Menú de */}

                <div className="flex items-center gap-(--spacing-md)">

                    <button className="opacity-80 transition-opacity duration-200
                    hover:opacity-100 bg-transparent border-none cursor-pointer p-0 flex items-center" aria-label="Search" style={{ color: 'var(--primary-foreground)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>

                    {/* User menu */}
                    <div className="relative" ref={menuRef} id="user-menu-container">
                        <button
                            onClick={toggleMenu}
                            className="opacity-80 transition-opacity duration-200 hover:opacity-100 bg-transparent border-none cursor-pointer p-0 flex items-center gap-1"
                            aria-label="User menu"
                            style={{ color: 'var(--primary-foreground)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        <div
                            id="user-menu"
                            className={isMenuOpen ? 'block' : 'hidden'}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                marginTop: '0.5rem',
                                width: '12rem',
                                backgroundColor: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: '0.375rem',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                zIndex: 50,
                                padding: 0,
                                color: 'var(--foreground)',
                                minWidth: '200px'
                            }}
                        >
                            <div style={{
                                padding: '0.75rem 1rem',
                                borderBottom: '1px solid var(--border)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted-foreground)', flexShrink: 0 }}>
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <p style={{
                                        fontFamily: 'var(--font-family-heading)',
                                        fontSize: '0.875rem',
                                        lineHeight: '1.25rem',
                                        margin: 0
                                    }}>
                                        Sign in as<br />student or teacher
                                    </p>
                                </div>
                            </div>
                            <div style={{ padding: '0.25rem 0' }}>
                                <a
                                    href="/login"
                                    style={{
                                        display: 'block',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.875rem',
                                        color: 'var(--foreground)',
                                        textDecoration: 'underline',
                                        transition: 'background-color 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    Sign in
                                </a>
                                <a
                                    href="/register"
                                    style={{
                                        display: 'block',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.875rem',
                                        color: 'var(--foreground)',
                                        textDecoration: 'underline',
                                        transition: 'background-color 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    Sign up
                                </a>
                                <a
                                    href="/contact"
                                    style={{
                                        display: 'block',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.875rem',
                                        color: 'var(--foreground)',
                                        textDecoration: 'none',
                                        transition: 'background-color 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}