import { Route, Routes } from "react-router-dom"
import { HomeGallery } from "./HomeGallery"
import { FavGallery } from "./FavGallery"
import { routes } from "../config/routes"
import { PathButton } from "./PathButton"

export const MainBody = () => {

    return (
        <main className="main-body">
            <section className="main-body__path-buttons">
                <PathButton path={routes.home}>Todas</PathButton>
                <PathButton path={routes.gallery}>Favs</PathButton>
            </section>
            <Routes>
                <Route path={routes.home} element={<HomeGallery />}></Route>
                <Route path={routes.gallery} element={<FavGallery />}></Route>
            </Routes>
        </main>
    )

}