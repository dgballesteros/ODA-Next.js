export default function GaleriaPage() { 
    return (
        <>
            <section className="bg-(--card) py-(--spacing-2xl)">
                <div className="mx-auto w-full max-w-[1280px] px-4">
                    <div className="text-center">
                        <h1 className="mb-(--spacing-lg) font-(--font-family-heading) text-4xl">
                            Artwork Gallery
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-(--muted-foreground)">
                            Explore our collection of masterpieces from all periods 
                            and artistic movements in history.
                        </p>
                    </div>
                </div>
            </section>

            <div className="border-y border-(--border) bg-(--card) py-(--spacing-md)">
                <div className="mx-auto w-full max-w-[1280px] px-4">
                    <div className="flex flex-wrap items-center justify-center gap-(--spacing-lg)">
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span>Author</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span>Movement</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span className="no-underline">Year</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span>Material</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span>Technique</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button className="flex items-center gap-(--spacing-xs) bg-transparent p-0 font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            <span>Theme</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        <button className="border border-black bg-(--primary-foreground) px-[18px] py-[7px] font-(--font-family-heading) text-base transition-all duration-300 hover:bg-(--hover-button)">
                            Apply filters
                        </button>
                    </div>
                </div>
            </div>

            <section className="py-(--spacing-2xl)">
                <div className="mx-auto w-full max-w-[1280px] px-4">
                    <div className="grid grid-cols-1 gap-(--spacing-xl) sm:grid-cols-2 lg:grid-cols-3">
                        {/* Bucle para recorrer las obras*/}
                        <a href="/artwork" className="block group">
                            {/* TODO: Agregar href con el ID de la obra (obra.id) */}
                            <article className="relative block border border-[#afafaf80] bg-(--card) transition-shadow duration-(--transition-normal) hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                                {/* Imagen de la obra */}
                                <div className="relative w-full overflow-hidden pb-[75%]">
                                    <img
                                        src="#"
                                        alt=""
                                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-(--transition-slow) group-hover:scale-105"
                                    />
                                    {/* TODO: Agregar src con la ruta de la imagen (obra.imagen) y alt con el título (obra.titulo) */}
                                </div>

                                {/* Información de la obra */}
                                <div className="p-(--spacing-lg)">
                                    <div className="flex items-start justify-between gap-(--spacing-sm)">
                                        <div className="flex-1">
                                            {/* Título en cursiva */}
                                            <h3 className="mb-(--spacing-xs) font-(--font-family-heading) text-xl italic text-(--foreground)">
                                                {/* TODO: Agregar título de la obra (obra.titulo) */}
                                            </h3>
                                            
                                            {/* Autor y año */}
                                            <p className="text-sm text-(--muted-foreground)">
                                                {/* TODO: Agregar autor (obra.autor) y año (obra.anio) */}
                                            </p>
                                            
                                            {/* Movimiento */}
                                            <p className="text-sm text-(--muted-foreground)">
                                                {/* TODO: Agregar movimiento artístico (obra.movimiento) */}
                                            </p>
                                        </div>

                                        {/* Badge de técnica */}
                                        <span className="inline-block shrink-0 bg-(--primary) px-3 py-(--spacing-xs) font-(--font-family-heading) text-sm text-(--primary-foreground)">
                                            {/* TODO: Agregar técnica (obra.tecnica) */}
                                        </span>
                                    </div>

                                    {/* Add to collection button */}
                                    <button 
                                        className="absolute bottom-(--spacing-lg) right-(--spacing-lg) flex h-8 w-8 items-center justify-center bg-(--foreground) text-(--background) transition-opacity duration-(--transition-fast) hover:opacity-80"
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
                    <nav className="flex items-center justify-center gap-(--spacing-sm) py-(--spacing-xl)" aria-label="Pagination">
                        {/* Bucle para recorrer las páginas */}
                        <button className="bg-transparent px-(--spacing-sm) py-(--spacing-xs) font-(--font-family-heading) text-(--foreground) transition-colors duration-(--transition-fast) hover:text-(--primary)">
                            1
                        </button>
                        {/* Fin del bucle para recorrer las páginas */}
                    </nav>
                </div>
            </section>
        </>
    )
}