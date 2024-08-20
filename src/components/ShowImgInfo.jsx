/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { modifyDescription } from "../features/favourites/favouritesSlice";

export const ShowImgInfo = ({ img, close, editable=false }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState(img.description || '');

    const getFormatedDate = () => {
        const date = img.importDate;
        return new Date(date).toLocaleString();
    }

    const handleChange = e => setDescription(e.target.value);

    const handleClick = e => {
        e.preventDefault();
        dispatch(modifyDescription({ id: img.id, newDescription: description}));
        close();
    }

    return (
        <dialog className="show-info">
            <button onClick={close} className="show-info__close">X</button>
            <div className="show-info__static">
                <img src={img.urls.thumb} alt="" className="show-info__static__img" />
                <section className="show-info__static__data">
                    <h5>{`Import Date: ${getFormatedDate()}`}</h5>
                    <h5>{`Width: ${img.width}`}</h5>
                    <h5>{`Height: ${img.height}`}</h5>
                    <h5>{`Likes: ${img.likes}`}</h5>
                </section>
            </div>
            <form action="" className="show-info__form">
                <textarea id='text' className="show-info__form__description" rows="4" value={description} 
                readOnly={!editable} onChange={handleChange} />
                {editable ? <button onClick={handleClick}>Guardar</button> : null}
            </form>
        </dialog>
    )
}