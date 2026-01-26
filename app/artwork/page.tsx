export default function ObraDetalle() {
    return (
        <>
        <div className="detail-navigation">
            <a href="/gallery" className="detail-back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-back-icon">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span className="detail-back-link-text">Back to gallery</span>
            </a>
        </div>

        {/* Contenido principal */}
        <section className="detail-section container">
            <div className="detail-grid">
                {/* Imagen de la obra */}
                <div className="detail-image-container">
                    <div className="items-container">
                        <img
                            src="#"
                            alt=""
                            className="obra-image"
                        />
                        {/* TODO: Agregar src con la ruta de la imagen (obra.imagen) y alt con el título (obra.titulo) */}
                        {/* Zoom button (prepared for future functionality) */}
                        <button
                            className="detail-zoom-button"
                            aria-label="Zoom image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-zoom-icon">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </button>  
                    </div>
                    
                </div>

                {/* Información de la obra */}
                <div className="detail-info">
                    {/* Técnica badge */}
                    <span className="detail-badge">
                        {/* TODO: Agregar técnica (obra.tecnica) */}
                    </span>

                    {/* Título */}
                    <h1 className="detail-title">
                        {/* TODO: Agregar título (obra.titulo) */}
                    </h1>

                    {/* Metadata */}
                    <div className="detail-metadata">
                        <p className="detail-metadata-item">
                            <span className="detail-metadata-label">Author:</span>
                            <span className="detail-metadata-value">
                                {/* TODO: Agregar autor (obra.autor) */}
                            </span>
                        </p>
                        <p className="detail-metadata-item">
                            <span className="detail-metadata-label">Year:</span>
                            <span className="detail-metadata-value">
                                {/* TODO: Agregar año (obra.anio) */}
                            </span>
                        </p>
                        <p className="detail-metadata-item">
                            <span className="detail-metadata-label">Movement:</span>
                            <span className="detail-metadata-value">
                                {/* TODO: Agregar movimiento (obra.movimiento) */}
                            </span>
                        </p>
                        <p className="detail-metadata-item">
                            <span className="detail-metadata-label">Dimensions:</span>
                            <span className="detail-metadata-value">
                                {/* TODO: Agregar dimensiones (obra.dimensiones) */}
                            </span>
                        </p>
                        <p className="detail-metadata-item">
                            <span className="detail-metadata-label">Location:</span>
                            <span className="detail-metadata-value">
                                {/* TODO: Agregar ubicación (obra.ubicacion) */}
                            </span>
                        </p>
                    </div>

                    {/* Description */}
                    <div className="detail-description detail-description-wrapper">
                        <h2 className="detail-description-title">Description</h2>
                        {/* TODO: Agregar bucle para recorrer los párrafos de la descripción (obra.descripcion.split('\n\n')) */}
                        <p className="detail-description-text">
                            {/* TODO: Agregar contenido del párrafo (parrafo) */}
                        </p>
                        {/* Fin del bucle para recorrer los párrafos */}
                    </div>

                    {/* Add to collection button */}
                    <button className="btn-academic-primary detail-add-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-add-icon">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add to my collection
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}