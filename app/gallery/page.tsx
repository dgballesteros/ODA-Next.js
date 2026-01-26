export default function GaleriaPage() { 
    return (
        <>
            <section className="galeria-header">
                <div className="container">
                    <div className="galeria-header-content">
                        <h1 className="galeria-title">
                            Artwork Gallery
                        </h1>
                        <p className="galeria-description">
                            Explore our collection of masterpieces from all periods 
                            and artistic movements in history.
                        </p>
                    </div>
                </div>
            </section>

            <div className="filters-bar">
                <div className="container">
                    <div className="filters-container">
                        <button className="filter-button">
                            <span>Author</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="filter-button">
                            <span>Movement</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="filter-button">
                            <span className="filter-button-text-underline">Year</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="filter-button">
                            <span>Material</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="filter-button">
                            <span>Technique</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="filter-button">
                            <span>Theme</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-button-icon">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        <button className="btn-academic-primary">
                            Apply filters
                        </button>
                    </div>
                </div>
            </div>

            <section className="obras-section">
                <div className="container">
                    <div className="obras-grid">
                        {/* Bucle para recorrer las obras*/}
                        <a href="/artwork" className="obra-card-link">
                            {/* TODO: Agregar href con el ID de la obra (obra.id) */}
                            <article className="obra-card">
                                {/* Imagen de la obra */}
                                <div className="obra-image-container">
                                    <img
                                        src="#"
                                        alt=""
                                        className="obra-image"
                                    />
                                    {/* TODO: Agregar src con la ruta de la imagen (obra.imagen) y alt con el título (obra.titulo) */}
                                </div>

                                {/* Información de la obra */}
                                <div className="obra-info">
                                    <div className="obra-header">
                                        <div className="obra-details">
                                            {/* Título en cursiva */}
                                            <h3 className="obra-title">
                                                {/* TODO: Agregar título de la obra (obra.titulo) */}
                                            </h3>
                                            
                                            {/* Autor y año */}
                                            <p className="obra-author">
                                                {/* TODO: Agregar autor (obra.autor) y año (obra.anio) */}
                                            </p>
                                            
                                            {/* Movimiento */}
                                            <p className="obra-movement">
                                                {/* TODO: Agregar movimiento artístico (obra.movimiento) */}
                                            </p>
                                        </div>

                                        {/* Badge de técnica */}
                                        <span className="obra-badge">
                                            {/* TODO: Agregar técnica (obra.tecnica) */}
                                        </span>
                                    </div>

                                    {/* Add to collection button */}
                                    <button 
                                        className="obra-add-button"
                                        aria-label="Add to my collection"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        </a>
                        {/* Fin del bucle para recorrer las obras */}
                    </div>

                    {/* Pagination */}
                    <nav className="pagination" aria-label="Pagination">
                        {/* Bucle para recorrer las páginas */}
                        <button className="pagination-link">
                            1
                        </button>
                        {/* Fin del bucle para recorrer las páginas */}
                    </nav>
                </div>
            </section>
        </>
    )
}