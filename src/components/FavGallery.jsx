import { useSelector } from "react-redux";
import { GalleryImg } from "./GalleryImg";

export const FavGallery = () => {
    const allImages = useSelector(state => state.favourites.images);
    const imagesPath = "../res/images"

    const icons = {
        addFav: {
            default: `${imagesPath}/Star.jpg`,
            filled: `${imagesPath}/star_filled.jpg`
        },
        info: `${imagesPath}/Info.jpg`,
        download: `${imagesPath}/download.jpg`
    }

    const chargeImages = () => {
        return allImages.map(img => <GalleryImg img={img} key={img.id} icons={icons}></GalleryImg>)
    }

    return (
        <section className="gallery">
            <h2>My Photos</h2>
            <select name="order-select" id="order-select">
                <option value="add-date">Añadido</option>
                <option value="width">Ancho</option>
                <option value="height">Alto</option>
                <option value="likes">Likes</option>
            </select>
            <section className="gallery__images">
                {chargeImages()}
            </section>
        </section>
    )
}