export default function Reconocimiento() { 
    return (
        <>
        <section className="reconocimiento-header">
            <div className="container">
                <div className="reconocimiento-header-content">
                    <h1 className="reconocimiento-title">
                        Artificial Intelligence Recognition
                    </h1>
                    <p className="reconocimiento-description">
                        Upload an image of an artwork and our AI will analyze it to 
                        provide you with detailed information about the work, its author, artistic 
                        period, and historical context.
                    </p>
                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="reconocimiento-section">
            <div className="container">
                <div className="reconocimiento-grid">
                    {/* Upload Area */}
                    <div className="reconocimiento-upload-section">
                        <div className="upload-card">
                            <h2 className="upload-title">Upload an image</h2>
                            <p className="upload-subtitle">
                                Drag an image here or click to select
                            </p>
                            
                            {/* Upload Zone */}
                            <div className="upload-zone" id="upload-zone">
                                <input 
                                    type="file" 
                                    id="image-input" 
                                    name="image" 
                                    accept="image/*" 
                                    className="upload-input"
                                />
                                <div className="upload-zone-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                    <p className="upload-zone-text">
                                        <span className="upload-zone-text-bold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="upload-zone-hint">
                                        PNG, JPG, WEBP up to 10MB
                                    </p>
                                </div>
                            </div>

                            {/* Image Preview */}
                            <div className="image-preview-container hidden" id="image-preview-container">
                                <div className="image-preview-wrapper">
                                    <img id="image-preview" src="" alt="Preview" className="image-preview" />
                                    <button className="image-preview-remove" id="remove-image" aria-label="Remove image">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                                <p className="image-preview-filename" id="image-filename"></p>
                            </div>

                            {/* Analyze Button */}
                            <div className="upload-actions">
                                <button className="btn-analyze" id="analyze-button" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-analyze-icon">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                    Analyze artwork
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="reconocimiento-results-section">
                        <div className="results-card">
                            <h2 className="results-title">Analysis results</h2>
                            
                            {/* Loading State */}
                            <div className="results-loading hidden" id="results-loading">
                                <div className="loading-spinner"></div>
                                <p className="loading-text">Analyzing image...</p>
                                <p className="loading-subtext">This may take a few seconds</p>
                            </div>

                            {/* Empty State */}
                            <div className="results-empty" id="results-empty">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="results-empty-icon">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                                <p className="results-empty-text">
                                    Analysis results will appear here
                                </p>
                                <p className="results-empty-hint">
                                    Upload an image and click "Analyze artwork" to begin
                                </p>
                            </div>

                            {/* Results Content */}
                            {/* TODO: Agregar lógica condicional para mostrar/ocultar estados (loading, empty, content) */}
                            <div className="results-content hidden" id="results-content">
                                {/* Artwork Info */}
                                <div className="result-section">
                                    <h3 className="result-section-title">Artwork information</h3>
                                    <div className="result-info-grid">
                                        <div className="result-info-item">
                                            <span className="result-info-label">Title:</span>
                                            <span className="result-info-value" id="result-titulo">-</span>
                                        </div>
                                        <div className="result-info-item">
                                            <span className="result-info-label">Author:</span>
                                            <span className="result-info-value" id="result-autor">-</span>
                                        </div>
                                        <div className="result-info-item">
                                            <span className="result-info-label">Year:</span>
                                            <span className="result-info-value" id="result-anio">-</span>
                                        </div>
                                        <div className="result-info-item">
                                            <span className="result-info-label">Movement:</span>
                                            <span className="result-info-value" id="result-movimiento">-</span>
                                        </div>
                                        <div className="result-info-item">
                                            <span className="result-info-label">Technique:</span>
                                            <span className="result-info-value" id="result-tecnica">-</span>
                                        </div>
                                        <div className="result-info-item">
                                            <span className="result-info-label">Location:</span>
                                            <span className="result-info-value" id="result-ubicacion">-</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="result-section">
                                    <h3 className="result-section-title">Description</h3>
                                    <div className="result-description" id="result-descripcion">
                                        <p>-</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="result-actions">
                                    <a href="/gallery" className="btn-result-action" id="view-in-gallery">
                                        View in gallery
                                    </a>
                                    <button className="btn-result-action-secondary" id="save-to-collection">
                                        Save to my collection
                                    </button>
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