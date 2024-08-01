import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getByQueryThunk } from "../features/search/searchThunk";

export const SearchBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/');
        const query = event.target.search.value;
        dispatch(getByQueryThunk(query));
        console.log(query);
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <button>
                <img src="../../res/images/icon.png" alt="" />
            </button>
            <input type="text" name="search" placeholder="Busca imágenes en Unsplash" />
        </form>
    );
}