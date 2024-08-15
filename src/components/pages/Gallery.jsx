/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GalleryImg } from "../GalleryImg";
import { imagesPath } from "../../app/config/paths";
import { promiseStatus } from "../../app/variables/async";
import { getRandomThunk } from "../../features/search/searchThunk";
import { ShowImgInfo } from "../ShowImgInfo";
import { Flip, toast, ToastContainer } from "react-toastify";
import { BallTriangle } from "react-loader-spinner";
import { SearchBar } from "../SearchBar";

export const Gallery = ({ isFavGallery = true, images = [], editable }) => {
    const dispatch = useDispatch();
    const [sortedImages, setSortedImages] = useState(images);
    const searchStatus = useSelector(state => state.search.status);
    const searchError = useSelector(state => state.search.error);
    const [imgInfoDisplayed, setImgInfoDisplayed] = useState(null);
    const [sortOption, setSortOption] = useState('add-date');
    const [isLoading, setIsLoading] = useState(false);

    const icons = {
        addFav: {
            default: `${imagesPath}/Star.png`,
            filled: `${imagesPath}/star_filled.png`,
        },
        info: `${imagesPath}/Info.png`,
        download: `${imagesPath}/Download.png`,
    };

    useEffect(() => {
        if (isFavGallery) {
            setSortedImages(images);
        } else {
            switch (searchStatus) {
                case promiseStatus.idle:
                    dispatch(getRandomThunk());
                    break;
                case promiseStatus.pending:
                    setIsLoading(true);
                    break;
                case promiseStatus.fulfilled:
                    setIsLoading(false);
                    break;
                case promiseStatus.rejected:
                    toast.error("No se ha podido obtener la información", {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Flip,
                    });
                    console.log(searchError);
                    break;
            }
        }
    }, [images, searchStatus]);

    useEffect(() => {
        let sorted = [...images];

        switch (sortOption) {
            case "add-date":
                sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case "width":
                sorted.sort((a, b) => b.width - a.width);
                break;
            case "height":
                sorted.sort((a, b) => b.height - a.height);
                break;
            case "likes":
                sorted.sort((a, b) => b.likes - a.likes);
                break;
            default:
                sorted = images;
        }

        setSortedImages(sorted);
    }, [images, sortOption]);

    const filterByDescription = (query) => {
        if (query.trim() === "") {
            setSortedImages(images);
        } else {
            const filteredItems = images.filter((item) =>
                item.description?.includes(query)
            );
            setSortedImages(filteredItems);
        }
    };

    const showImgInfo = (img) => setImgInfoDisplayed(img);
    const closeInfo = () => setImgInfoDisplayed(null);

    const sortOptionChanged = (e) => setSortOption(e.target.value);

    const loadingSpinner = () => (
        <BallTriangle
            className="loading-spinner"
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    );

    return (
        <section className="gallery">
            {isFavGallery ? (
                <>
                <h2>My Photos</h2>
                <SearchBar
                    className="searchbar"
                    placeholder="Busca en tus imágenes"
                    filterByDescription={filterByDescription}
                /> </>
            ) : null}
            <select className="gallery__order-select" name="order-select" id="order-select"
                onChange={sortOptionChanged}
            >
                <option value="add-date">Añadido</option>
                <option value="width">Ancho</option>
                <option value="height">Alto</option>
                <option value="likes">Likes</option>
            </select>
            <section className="gallery__images">
                {isLoading
                    ? loadingSpinner()
                    : sortedImages.map((img) => (
                          <GalleryImg
                              key={img.id}
                              img={img}
                              icons={icons}
                              showInfo={showImgInfo}
                          />
                      ))}
            </section>
            {imgInfoDisplayed != null ? (
                <ShowImgInfo
                    img={imgInfoDisplayed}
                    close={closeInfo}
                    editable={editable}
                />
            ) : null}
            <ToastContainer />
        </section>
    );
};
