import { useEffect, useState } from "react"
import { GalleryImg } from "../GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../../features/search/searchThunk";
import { imagesPath } from "../../app/config/paths";
import { promiseStatus } from "../../app/variables/async";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const HomeGallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    const searchError = useSelector(state => state.search.error);

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
            case promiseStatus.idle:{
                toast('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
                dispatch(getRandomThunk());
                break;
            }
            case promiseStatus.pending:{
                setIsLoading(true);
                break;
            }
            case promiseStatus.fulfilled:{
                setIsLoading(false);
                break;
            }
            case promiseStatus.rejected: {
                toast('No se ha podido obtener la información');
                console.log(searchError);
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
            <ToastContainer position="top-center" autoClose={5000}
                hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false}
                pauseOnFocusLoss draggable pauseOnHover theme="light"
                transition={Bounce} />        
            </section>
    )
}