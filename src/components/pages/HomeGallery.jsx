import { useEffect } from "react"
import { GalleryImg } from "../GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../../features/search/searchThunk";
import { imagesPath } from "../../config/paths";

export const HomeGallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    const searchLoading = useSelector(state => state.search.loading);

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
        switch (searchStatus) {
            case 'idle':{
                dispatch(getRandomThunk());
                break;
            }
            case 'pending':{
                console.log('pending');
                break;
            }
            case 'fulfilled':{
                console.log('fulfilled');
                console.log(allImages);
                break;
            }
            case 'rejected': {
                console.log('Toast: rejected');
                break;
            }
        }
    }, [searchStatus])

    return (
        <section className="gallery --transparent">
            <section className="gallery__images">
                {!searchLoading ? 
                allImages.map(img => <GalleryImg img={img} key={img.id} icons={icons}></GalleryImg>) 
                : <p>Loading</p>}
            </section>
        </section>
    )
}