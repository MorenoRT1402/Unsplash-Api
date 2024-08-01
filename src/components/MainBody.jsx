import { Route, Routes } from "react-router-dom"
import { HomeGallery } from "./HomeGallery"
import { FavGallery } from "./FavGallery"
import { routes } from "../config/routes"

export const MainBody = () => {

    return (
        <main className="main-body">
            <section className="main-body__path-buttons">
                <button>Todas</button>
                <button>Favs</button>
            </section>
            <Routes>
                <Route path={routes.home} element={<HomeGallery />}></Route>
                <Route path={routes.gallery} element={<FavGallery />}></Route>
            </Routes>
        </main>
    )

}