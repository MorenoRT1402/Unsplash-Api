export const FavGallery = () => {
    const imagesPath = "../res/images"
    const icons = {
        addFav: `${imagesPath}/Star(1).png`,
        info: `${imagesPath}/Info(1).png`,
        download: `${imagesPath}/Download(1).png`
    }

    const chargeImages = () => {
//        return allImages.map(img => <GalleryImg img={img.urls.thumb} key={img.id} icons={icons}></GalleryImg>)
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