/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { ImageButton } from "./ImageButton"
import { add, remove } from "../features/favourites/favouritesSlice";
import { useEffect, useState } from "react";

export const GalleryImg = ({img, icons}) => {
    const dispatch = useDispatch();
    const favouritesImages = useSelector(state => state.favourites.images);
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

    const showInfo = () => {

    }

    const download = () => {

    }

    return (
        <article>
            <img src={img.urls.thumb} alt="" />
            <section>
                <ImageButton src={addToFavImage} onClick={addToFavourites}/>
                <ImageButton src={icons.info}/>
                <ImageButton src={icons.download}/>
            </section>
        </article>
    )
}