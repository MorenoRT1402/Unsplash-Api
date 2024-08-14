import { imagesPath } from "../app/config/paths"

export const Footer = () => {
    return (
        <footer className="footer">
            <button className="footer__button">
                <a href="https://www.linkedin.com/in/carlos-moreno-ortega" target="_blank" rel="noopener noreferrer">
                    <img src={`${imagesPath}/Danleech-Simple-Linkedin.512.png`} alt="LinkedIn" className="footer__icon" />
                </a>
            </button>
            <h5 className="footer__text">© 2024, All rights reserved</h5>
        </footer>
    )
}