/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { ImageButton } from "./ImageButton"

export const GalleryImg = ({img, icons}) => {
    const dispatch = useDispatch();

    const addToFavourites = () => {
        dispatch()
    }

    const showInfo = () => {

    }

    const download = () => {

    }

    return (
        <article>
            <img src={img} alt="" />
            <section>
                <ImageButton src={icons.addFav}/>
                <ImageButton src={icons.info}/>
                <ImageButton src={icons.download}/>
            </section>
        </article>
    )
}