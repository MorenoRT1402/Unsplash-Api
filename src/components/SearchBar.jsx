import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getByQueryThunk, getRandomThunk } from "../features/search/searchThunk";
import { routes } from "../app/config/routes";
import { imagesPath } from "../app/config/paths";

export const SearchBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        navigate(routes.home);
        const query = event.target.search.value;
        if(query.length > 0)
            dispatch(getByQueryThunk(query));
        else
            dispatch(getRandomThunk);
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <button>
                <img src={`${imagesPath}/icon.png`} alt="" />
            </button>
            <input type="text" name="search" placeholder="Busca imágenes en Unsplash" />
        </form>
    );
}