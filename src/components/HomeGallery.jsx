import { useEffect } from "react"
import { GalleryImg } from "./GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../features/search/searchThunk";

export const Gallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    
    const imagesPath = "../res/images"
    const icons = {
        addFav: `${imagesPath}/Star.png`,
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`
    }

    useEffect(() => {
        if(searchStatus === 'idle'){
            dispatch(getRandomThunk());
            setImages(allImages);
        }
    }, [dispatch, searchStatus])

    const chargeImages = () => {
        return allImages.map(img => <GalleryImg img={img.urls.thumb} key={img.id} icons={icons}></GalleryImg>)
    }

    return (
        <section className="gallery --transparent">
            <section className="gallery__images">
                {chargeImages()}
            </section>
        </section>
    )
}