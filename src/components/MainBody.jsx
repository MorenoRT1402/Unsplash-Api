import { Gallery } from "./HomeGallery"

export const MainBody = () => {
    return (
        <main className="main-body">
            <section className="main-body__path-buttons">
                <button>Todas</button>
                <button>Favs</button>
            </section>
            <Gallery />
        </main>
    )

}