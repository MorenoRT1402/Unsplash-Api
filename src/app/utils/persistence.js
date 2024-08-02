export const saveInLocalStorage = (key, data) => {
    const jsonString = JSON.stringify(data);
    localStorage.setItem(key, jsonString);
}

export const getFromLocalStorage = key => {
    const jsonString = localStorage.getItem(key);
    return JSON.parse(jsonString);
}