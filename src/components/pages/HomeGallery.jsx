import { useEffect, useState } from "react"
import { GalleryImg } from "../GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../../features/search/searchThunk";
import { imagesPath } from "../../config/paths";

export const HomeGallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);

    const [isLoading, setIsLoading] = useState(false);

    const icons = {
        addFav: {
            default: `${imagesPath}/Star.png`,
            filled: `${imagesPath}/star_filled.png`
        },
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`
    }

    useEffect(() => {
        switch (searchStatus) {
            case 'idle':{
                dispatch(getRandomThunk());
                break;
            }
            case 'pending':{
                setIsLoading(true);
                break;
            }
            case 'fulfilled':{
                setIsLoading(false);
                break;
            }
            case 'rejected': {
                setIsLoading(true);
                console.log('Toast: rejected');
                break;
            }
        }
    }, [allImages, dispatch, searchStatus])

    return (
        <section className="gallery --transparent">
            <section className="gallery__images">
                {!isLoading ? 
                allImages.map(img => <GalleryImg img={img} key={img.id} icons={icons}></GalleryImg>) 
                : <p>Loading</p>}
            </section>
        </section>
    )
}