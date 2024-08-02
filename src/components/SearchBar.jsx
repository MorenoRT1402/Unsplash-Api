import { imagesPath } from "../app/config/paths";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({placeholder, onSubmit}) => {

    return (
        <form className="searchbar" onSubmit={onSubmit}>
            <button>
                <img src={`${imagesPath}/icon.png`} alt="" />
            </button>
            <input type="text" name="search" placeholder={placeholder} />
        </form>
    );
}