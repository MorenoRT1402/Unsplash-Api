import { keys } from "./api_config";

const apiUrl = 'https://api.unsplash.com/';
const clientIDPart = `client_id=${keys.accesKey}`;

const endpointsWords = {
    search: 'search',
    photos: 'photos',
    random: 'random'
}

const endpointWithAuth = endpoint => `${apiUrl}${endpoint}/?${clientIDPart}`;

export const getPhotosEndpoint = endpointWithAuth(endpointsWords.photos);

const randomPhotosEndpoint = `${endpointsWords.photos}/${endpointsWords.random}`;
export const getRandomPhotosEndpoint = (count = 3) => `${endpointWithAuth(randomPhotosEndpoint)}&count=${count}`;

export const getPhotosByQuery = query => {
    const endpoint = `${endpointsWords.search}/${endpointsWords.photos}`;
    return `${apiUrl}${endpoint}/?query=${query}&${clientIDPart}`;
}