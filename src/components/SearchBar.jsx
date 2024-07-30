import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandom } from "../store/slices/searchSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandom);
    }, [dispatch])

    return (
        <div className="searchbar">
            <button>
                <img src="../../res/images/icon.png" alt="" />
            </button>
            <input type="text" placeholder="Busca imágenes en Unsplash" />
        </div>
    );
}