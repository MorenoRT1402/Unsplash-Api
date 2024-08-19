/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { GalleryImg } from "../GalleryImg";
import { imagesPath } from "../../app/config/paths";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar";
import { ShowImgInfo } from "../ShowImgInfo";

export const FavGallery = () => {
    const sortedOptions = {
        addDate: 'add-date',
        width: 'width',
        height: 'height',
        likes: 'likes'
    }

    const allImages = useSelector(state => state.fav.images);

    const [sortedImages, setSortedImages] = useState(allImages);
    const [imgInfoDisplayed, setImgInfoDisplayed] = useState(null)

    const [sortOption, setSortOption] = useState(sortedOptions.addDate);

    const icons = { //These with jpg for transparency issues
        addFav: {
            default: `${imagesPath}/Star.jpg`,
            filled: `${imagesPath}/star_filled.jpg`
        },
        info: `${imagesPath}/Info.jpg`,
        download: `${imagesPath}/download.jpg`
    }

    useEffect(() => {
        let sorted = [...allImages];

        switch(sortOption) {
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
    }, [allImages, sortOption])

    const filterByDescription = query => {
        if (query.trim() === '') {
            setSortedImages(allImages);
        } else {
            const filteredItems = allImages.filter(item => item.description?.includes(query));
            setSortedImages(filteredItems);
        }
    }

    const showImgInfo = img => setImgInfoDisplayed(img);
    const closeInfo = () => setImgInfoDisplayed(null);

    const sortOptionChanged = e => setSortOption(e.target.value);
    
    return (
        <section className="gallery">
            <h2>My Photos</h2>
            <SearchBar className="searchbar" placeholder="Busca en tus imágenes" filterByDescription={filterByDescription}/>
            <select className="gallery__order-select" name="order-select" id="order-select" onChange={sortOptionChanged}>
                <option value={sortedOptions.addDate}>Añadido</option>
                <option value={sortedOptions.width}>Ancho</option>
                <option value={sortedOptions.height}>Alto</option>
                <option value={sortedOptions.likes}>Likes</option>
            </select>
            <section className="gallery__images">
                { sortedImages.map(img => <GalleryImg key={img.id} img={img} icons={icons} showInfo={showImgInfo}></GalleryImg>) }
            </section>
            {imgInfoDisplayed ? <ShowImgInfo img={imgInfoDisplayed} close={closeInfo} editable={true} /> : null}
        </section>
    )
}