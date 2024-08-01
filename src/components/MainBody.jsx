import { Route, Routes } from "react-router-dom"
import { HomeGallery } from "./HomeGallery"
import { FavGallery } from "./FavGallery"

export const MainBody = () => {

    return (
        <main className="main-body">
            <section className="main-body__path-buttons">
                <button>Todas</button>
                <button>Favs</button>
            </section>
            <Routes>
                <Route path="/" element={<HomeGallery />}></Route>
                <Route path="/gallery" element={<FavGallery />}></Route>
            </Routes>
        </main>
    )

}