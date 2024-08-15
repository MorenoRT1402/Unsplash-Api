/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { ImageButton } from "./ImageButton"
import { add, remove } from "../features/favourites/favouritesSlice";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

export const GalleryImg = ({img, icons, showInfo}) => {
    const dispatch = useDispatch();
    const favouritesImages = useSelector(state => state.fav.images);
    const [addToFavImage, setAddToFavImage] = useState(icons.addFav.default);

    const isInFavourites = favouritesImages.some(favImg => favImg.id === img.id);

    const getAddToFavImage = () => {
        const addFav = icons.addFav;
        return isInFavourites ? addFav.filled : addFav.default;
    }
    
    useEffect(() => {
        setAddToFavImage(getAddToFavImage);
    }, [favouritesImages])

    const addToFavourites = () => {
        const action = isInFavourites ? remove : add;
        dispatch(action(img));
    }

    const handleInfoClick = () => showInfo(img);

    const download = () => {
        saveAs(img.urls.full, img.id);
    }

    return (
        <article className="gallery-img">
            <img src={img.urls.thumb} alt="" />
            <section>
                <ImageButton src={addToFavImage} onClick={addToFavourites}/>
                <ImageButton src={icons.info} onClick={handleInfoClick}/>
                <ImageButton src={icons.download} onClick={download}/>
            </section>
        </article>
    )
}