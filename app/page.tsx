import "@/styles/index.css";

export default function Home() {
  return (
      <>
      <section className="hero-section">
          <div className="container">
              <div className="hero-content">
                  <h1 className="hero-title">
                      Welcome to<br />
                      <span className="hero-title-italic">Oracle of Art</span>
                  </h1>
                  <p className="hero-subtitle">
                      Your educational portal to explore art history. 
                      Discover masterpieces, learn about artistic movements 
                      and immerse yourself in centuries of human creativity.
                  </p>
                  <div className="hero-actions">
                      <a href="/gallery" className="hero-button-primary">
                          View Gallery
                      </a>
                      <a href="/login" className="hero-button-secondary">
                          Sign In
                      </a>
                  </div>
              </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
          <div className="container">
              <h2 className="features-title">
                  Explore our tools
              </h2>

              <div className="features-grid">
                  {/* Bucle para recorrer las features */}

                  <a href="#" className="feature-card">
                      {/* TODO: Agregar href con el enlace de la feature (feature.enlace) */}
                      <div className="feature-image-container">
                          <img
                              src="#"
                              alt=""
                              className="feature-image"
                          />
                          {/* TODO: Agregar src con la ruta de la imagen (feature.imagen) y alt con el título (feature.titulo) */}
                      </div>
                      <div className="feature-content">
                          <h3 className="feature-title">
                              {/* TODO: Agregar título de la feature (feature.titulo) */}
                          </h3>
                          <p className="feature-description">
                              {/* TODO: Agregar descripción de la feature (feature.descripcion) */}
                          </p>
                          <span className="feature-link">
                              Learn more →
                          </span>
                      </div>
                  </a>
                  {/* Fin del bucle para recorrer las features */}
              </div>
          </div>
      </section>

      {/* About Section */}
      <section className="about-section">
          <div className="container">
              <div className="about-content">
                  <h2 className="about-title">
                      About Oracle of Art
                  </h2>
                  <p className="about-text">
                      Oracle of Art was born with the mission of bringing the world's artistic heritage 
                      closer to students, teachers, and art enthusiasts. Our platform combines 
                      academic rigor with modern technology to offer a unique and accessible educational 
                      experience.
                  </p>
                  <p className="about-text">
                      From the cave paintings of Altamira to the avant-garde of the 20th century, 
                      we invite you to discover the stories behind the works that have defined 
                      humanity's artistic expression.
                  </p>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
          <div className="container">
              <div className="cta-wrapper">
                  <h2 className="cta-title">
                      Ready to explore?
                  </h2>
                  <p className="cta-description">
                      Sign up for free and access all platform features.
                  </p>
                  <a href="/register" className="cta-button">
                      Create free account
                  </a>
              </div>
          </div>
      </section>
      </>
  )
}