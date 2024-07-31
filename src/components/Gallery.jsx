import { GalleryImg } from "./GalleryImg"

export const Gallery = () => {
    const imagesPath = "../res/images"
    const icons = {
        addFav: `${imagesPath}/Star.png`,
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`
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
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />

            </section>
        </section>
    )
}