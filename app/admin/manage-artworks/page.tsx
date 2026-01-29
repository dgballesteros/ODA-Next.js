export default function ManageArtworks() { 
    return (
        <>
            <section className="flex-1 flex flex-col items center justify-center">
                <div className="w-full max-w-[1280px] mx-auto">
                    <h1 className="text-4xl font-(--font-family-heading) text-(--foreground) mb-(--spacing-xl) text-center">Manage Artworks</h1>
                    <p className="text-lg text-(--muted-foreground) mb-(--spacing-2xl) text-center">Add, edit or delete artworks</p>
                    <div className="">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}