import { Outlet } from "react-router-dom"
import { routes } from "../../config/routes"
import { Header } from "../Header"
import { PathButton } from "../PathButton"
import { Footer } from "../Footer"

export const Layout = () => {
    return (
        <>
            <Header />
                <main className="main-body">
                    <section className="main-body__path-buttons">
                        <PathButton path={routes.home} buttonText={'Todas'}></PathButton>
                        <PathButton path={routes.gallery} buttonText={'Favs'}></PathButton>
                    </section>
                    <Outlet />
                </main>
            <Footer />
        </>
    )
  }