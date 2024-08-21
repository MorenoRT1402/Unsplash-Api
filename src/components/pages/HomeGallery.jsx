/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { GalleryImg } from "../GalleryImg"
import { useDispatch, useSelector } from "react-redux"
import { getRandomThunk } from "../../features/search/searchThunk";
import { imagesPath } from "../../app/config/paths";
import { promiseStatus } from "../../app/variables/async";
import { Flip, toast, ToastContainer } from "react-toastify";
import { BallTriangle } from 'react-loader-spinner';
import { ShowImgInfo } from "../ShowImgInfo";

export const HomeGallery = () => {
    const dispatch = useDispatch();
    const allImages = useSelector(state => state.search.images);
    const searchStatus = useSelector(state => state.search.status);
    const searchError = useSelector(state => state.search.error);
    const [imgInfoDisplayed, setImgInfoDisplayed] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const icons = { //These with png
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
                toast.error('No se ha podido obtener la información', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Flip
                    });
                console.log(searchError);
                break;
            }
        }
    }, [allImages, dispatch, searchStatus])

    const loadMore = e => {
        e.preventDefault();
        dispatch(getRandomThunk());
        scrollTo({bottom: 0, behavior: 'smooth'});
    }

    return (
        <section className="gallery --transparent">
            <section className="gallery__images">
                {isLoading ? 
                <BallTriangle className="loading-spinner"
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
                : allImages.map(img => <GalleryImg key={img.id} 
                    img={img} icons={icons} 
                    showInfo={img => setImgInfoDisplayed(img)} />)
                }
            </section>
            <button onClick={loadMore} disabled={isLoading}>Load more</button>
            {imgInfoDisplayed != null ? 
            <ShowImgInfo img={imgInfoDisplayed} close={() => setImgInfoDisplayed(null)} /> 
            : null}
            <ToastContainer />        
            </section>
    )
}