import { useEffect, useState } from "react"
import { GalleryImg } from "./GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../features/search/searchThunk";

export const Gallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    const searchError = useSelector(state => state.search.error);

    const [images, setImages] = useState(allImages);
    
    const imagesPath = "../res/images"
    const icons = {
        addFav: `${imagesPath}/Star.png`,
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`
    }

    useEffect(() => {
        console.log(searchStatus);
        if(searchStatus === 'idle'){
            dispatch(getRandomThunk());
            setImages(allImages);
        }
    }, [dispatch, searchStatus])

    const chargeImages = () => {
        console.log(images);
        return images.map(img => <GalleryImg img={img.urls.thumb} key={img.id}></GalleryImg>)
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
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />
                <GalleryImg img={`${imagesPath}/icon.png`} icons={icons} />

            </section>
        </section>
    )
}