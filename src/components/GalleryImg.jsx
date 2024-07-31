/* eslint-disable react/prop-types */
import { ImageButton } from "./ImageButton"

export const GalleryImg = ({img, icons}) => {
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