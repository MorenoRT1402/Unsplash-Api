import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getByQueryThunk, getRandomThunk } from "../features/search/searchThunk";

export const SearchBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/');
        const query = event.target.search.value;
        console.log(query);
        if(query != '')
            dispatch(getByQueryThunk(query));
        else
            dispatch(getRandomThunk);
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