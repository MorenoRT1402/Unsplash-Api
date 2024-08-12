import { useSelector } from "react-redux";
import { GalleryImg } from "../GalleryImg";
import { imagesPath } from "../../app/config/paths";
import { useEffect, useState } from "react";
//import { usePersistence } from "../../hooks/usePersistence";
import { SearchBar } from "../SearchBar";

export const FavGallery = () => {
    const allImages = useSelector(state => state.fav.images);

    const [sortedImages, setSortedImages] = useState(allImages);

    const sortedOptions = {
        addDate: 'add-date',
        width: 'width',
        height: 'height',
        likes: 'likes'
    }

    const icons = {
        addFav: {
            default: `${imagesPath}/Star.jpg`,
            filled: `${imagesPath}/star_filled.jpg`
        },
        info: `${imagesPath}/Info.jpg`,
        download: `${imagesPath}/download.jpg`
    }

    /*
    useEffect(() => {
        setSortedImages(allImages);
    }, [allImages])
    */

    const handleSelectChange = e => {
        const value = e.target.value;
        let sorted = [...allImages];

        switch(value) {
            case sortedOptions.addDate:
                sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case sortedOptions.width:
                sorted.sort((a, b) => b.width - a.width);
                break;
            case sortedOptions.height:
                sorted.sort((a, b) => b.height - a.height);
                break;
            case sortedOptions.likes:
                sorted.sort((a, b) => b.likes - a.likes);
                break;
            default:
                sorted = allImages;
        }

        setSortedImages(sorted);
    }

    const filterByDescription = query => {
        if (query.trim() === '') {
            setSortedImages(allImages);
        } else {
            const filteredItems = allImages.filter(item => item.description?.includes(query));
            setSortedImages(filteredItems);
        }
    }
    

    return (
        <section className="gallery">
            <h2>My Photos</h2>
            <SearchBar className="searchbar" placeholder="Busca en tus imágenes" filterByDescription={filterByDescription}/>
            <select name="order-select" id="order-select" onChange={handleSelectChange}>
                <option value={sortedOptions.addDate}>Añadido</option>
                <option value={sortedOptions.width}>Ancho</option>
                <option value={sortedOptions.height}>Alto</option>
                <option value={sortedOptions.likes}>Likes</option>
            </select>
            <section className="gallery__images">
                { sortedImages.map(img => <GalleryImg img={img} key={img.id} icons={icons}></GalleryImg>) }
            </section>
        </section>
    )
}