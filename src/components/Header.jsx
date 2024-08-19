import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar"
import { useDispatch } from "react-redux";
import { routes } from "../app/config/routes";
import { getByQueryThunk, getRandomThunk } from "../features/search/searchThunk";

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = query => {
        navigate(routes.home);
        if(query.length > 0)
            dispatch(getByQueryThunk(query));
        else
            dispatch(getRandomThunk());
    }

    return (
    <header>
        <h1>OXYGEN UNSPLASH</h1>
        <SearchBar placeholder={'Busca imágenes en Unsplash'} filterByDescription={handleSubmit} />
    </header>
    )
}