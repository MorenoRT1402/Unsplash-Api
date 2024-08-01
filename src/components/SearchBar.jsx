export const SearchBar = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const query = event.target.search.value;
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