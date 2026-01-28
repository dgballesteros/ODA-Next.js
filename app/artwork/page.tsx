export default function ObraDetalle() {
    return (
        <>
        <div className="p-(--spacing-lg)">
            <a href="/gallery" className="inline-flex items-center gap-(--spacing-sm) text-(--muted-foreground) no-underline transition-colors duration-(--transition-fast) hover:text-(--foreground)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span className="font-(--font-family-heading)">Back to gallery</span>
            </a>
        </div>

        {/* Contenido principal */}
        <section className="mx-auto w-full max-w-[1280px] px-4 pb-(--spacing-4xl)">
            <div className="grid grid-cols-1 gap-(--spacing-2xl) lg:grid-cols-2">
                {/* Imagen de la obra */}
                <div className="flex items-center overflow-hidden border border-(--border) bg-(--card) p-(--spacing-lg)">
                    <div className="relative w-full">
                        <img
                            src="#"
                            alt=""
                            className="h-auto w-full"
                        />
                        {/* TODO: Agregar src con la ruta de la imagen (obra.imagen) y alt con el título (obra.titulo) */}
                        {/* Zoom button (prepared for future functionality) */}
                        <button
                            className="absolute right-(--spacing-lg) top-(--spacing-lg) flex h-10 w-10 cursor-pointer items-center justify-center border-0 bg-(--foreground) text-(--background) transition-all duration-(--transition-fast) hover:bg-[rgba(26,26,26,0.8)]"
                            aria-label="Zoom image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </button>  
                    </div>
                    
                </div>

                {/* Información de la obra */}
                <div>
                    {/* Técnica badge */}
                    <span className="mb-(--spacing-lg) inline-block bg-(--primary) px-3 py-(--spacing-xs) font-(--font-family-heading) text-sm text-(--primary-foreground)">
                        {/* TODO: Agregar técnica (obra.tecnica) */}
                    </span>

                    {/* Título */}
                    <h1 className="mb-(--spacing-lg) font-(--font-family-heading) text-4xl italic">
                        {/* TODO: Agregar título (obra.titulo) */}
                    </h1>

                    {/* Metadata */}
                    <div className="mb-(--spacing-xl) flex flex-col gap-(--spacing-sm)">
                        <p className="text-lg">
                            <span className="text-(--muted-foreground)">Author:</span>{' '}
                            <span className="font-medium">
                                {/* TODO: Agregar autor (obra.autor) */}
                            </span>
                        </p>
                        <p className="text-lg">
                            <span className="text-(--muted-foreground)">Year:</span>{' '}
                            <span className="font-medium">
                                {/* TODO: Agregar año (obra.anio) */}
                            </span>
                        </p>
                        <p className="text-lg">
                            <span className="text-(--muted-foreground)">Movement:</span>{' '}
                            <span className="font-medium">
                                {/* TODO: Agregar movimiento (obra.movimiento) */}
                            </span>
                        </p>
                        <p className="text-lg">
                            <span className="text-(--muted-foreground)">Dimensions:</span>{' '}
                            <span className="font-medium">
                                {/* TODO: Agregar dimensiones (obra.dimensiones) */}
                            </span>
                        </p>
                        <p className="text-lg">
                            <span className="text-(--muted-foreground)">Location:</span>{' '}
                            <span className="font-medium">
                                {/* TODO: Agregar ubicación (obra.ubicacion) */}
                            </span>
                        </p>
                    </div>

                    {/* Description */}
                    <div className="max-w-[65ch] text-lg">
                        <h2 className="mb-(--spacing-lg) mt-(--spacing-xl) font-(--font-family-heading) text-2xl">Description</h2>
                        {/* TODO: Agregar bucle para recorrer los párrafos de la descripción (obra.descripcion.split('\n\n')) */}
                        <p className="mb-(--spacing-lg) leading-relaxed text-(--muted-foreground)">
                            {/* TODO: Agregar contenido del párrafo (parrafo) */}
                        </p>
                        {/* Fin del bucle para recorrer los párrafos */}
                    </div>

                    {/* Add to collection button */}
                    <button className="mt-(--spacing-xl) flex items-center gap-(--spacing-sm) border border-black bg-(--primary-foreground) px-[18px] py-[7px] font-(--font-family-heading) text-base transition-all duration-300 hover:bg-(--hover-button)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
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