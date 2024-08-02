import { useEffect } from "react"
import { GalleryImg } from "../GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../../features/search/searchThunk";
import { imagesPath } from "../../config/paths";

export const HomeGallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    
    const testImage = {
        id: 'local-test-image',
        urls:{
            thumb: `${imagesPath}/searchmeme.png`
        }
    };
    const icons = {
        addFav: {
            default: `${imagesPath}/Star.png`,
            filled: `${imagesPath}/star_filled.png`
        },
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`
    }

    useEffect(() => {
        if(searchStatus === 'idle'){
            dispatch(getRandomThunk());
        }
    }, [dispatch, searchStatus])

    const chargeImages = () => {
        if(allImages == null) return <GalleryImg img={testImage} icons={icons}></GalleryImg>;
        return allImages.map(img => <GalleryImg img={img} key={img.id} icons={icons}></GalleryImg>)
    }

    return (
        <section className="gallery --transparent">
            <section className="gallery__images">
                {chargeImages()}
            </section>
        </section>
    )
}