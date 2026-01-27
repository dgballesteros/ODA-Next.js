'use client';

import { useState } from 'react';
import "@/styles/collection.css";

export default function MiColeccion() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <section className="coleccion-header">
            <div className="container">
                <div className="coleccion-header-content">
                    <h1 className="coleccion-title">My Collection</h1>
                    <p className="coleccion-description">
                        Create and manage your personalized collections of artworks. 
                        Organize your favorites by theme, period, or any criteria you prefer.
                    </p>
                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="coleccion-section">
            <div className="container">
                {/* Create Collection Card */}
                <div className="coleccion-create-card">
                    <div className="coleccion-create-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="coleccion-create-icon">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <h2 className="coleccion-create-title">Create your first collection</h2>
                        <p className="coleccion-create-description">
                            Organize your favorite artworks into personalized thematic collections. 
                            Share your collections with other users or keep them private.
                        </p>
                        <button className="btn-create-collection" onClick={openModal}>
                            Create collection
                        </button>
                    </div>
                </div>

                {/* Collections Grid (Empty State) */}
                {/* TODO: Agregar bucle para recorrer las colecciones cuando existan */}
                <div className="colecciones-grid" id="colecciones-grid">
                    <div className="coleccion-empty-state">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="coleccion-empty-icon">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <p className="coleccion-empty-text">
                            You haven't created any collections yet
                        </p>
                        <p className="coleccion-empty-hint">
                            Click "Create collection" to get started
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Create Collection Modal */}
        {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Create new collection</h2>
                    <button className="modal-close" onClick={closeModal} aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <form className="modal-form" id="create-collection-form">
                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="collection-name" className="form-label">
                            Collection name *
                        </label>
                        <input
                            type="text"
                            id="collection-name"
                            name="nombre"
                            className="form-input"
                            placeholder="E.g.: Renaissance Works"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="collection-description" className="form-label">
                            Description
                        </label>
                        <textarea
                            id="collection-description"
                            name="descripcion"
                            rows={4}
                            className="form-textarea"
                            placeholder="Describe the theme or purpose of your collection..."
                        ></textarea>
                    </div>

                    {/* Visibility */}
                    <div className="form-group">
                        <label htmlFor="collection-visibility" className="form-label">
                            Visibility
                        </label>
                        <select id="collection-visibility" name="visibilidad" className="form-select">
                            <option value="privada">Private (only you can see it)</option>
                            <option value="publica">Public (visible to everyone)</option>
                        </select>
                    </div>

                    {/* Form Actions */}
                    <div className="modal-actions">
                        <button type="button" className="btn-modal-cancel" onClick={closeModal}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-modal-submit">
                            Create collection
                        </button>
                    </div>
                </form>
                </div>
            </div>
        )}
        </>
    )
}