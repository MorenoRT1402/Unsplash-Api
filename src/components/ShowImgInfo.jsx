/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { modifyDescription } from "../features/favourites/favouritesSlice";

export const ShowImgInfo = ({ img, close }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState(img.description || '');

    const handleClick = e => {
        e.preventDefault();
        dispatch(modifyDescription({ id: img.id, newDescription: description}));
        close();
    }

    const handleChange = e => setDescription(e.target.value);

    return (
        <dialog className="gallery-img__info">
            <button onClick={close}>X</button>
            <img src={img.urls.thumb} alt="" className="gallery-img__info__img" />
            <form action="" className="gallery-img__info__form">
                <textarea className="gallery-img__info__form__description" rows="4" value={description} onChange={handleChange} />
                <button onClick={handleClick}>Guardar</button>
            </form>
        </dialog>
    )
}