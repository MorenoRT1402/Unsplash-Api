/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getFromLocalStorage, saveInLocalStorage } from "../app/utils/persistence";

export const usePersistence = (key, data) => {
    const [persistenceData, setPersistenceData] = useState(data);

    useEffect(() => {
        setPersistenceData(getFromLocalStorage(key));
        saveInLocalStorage(key, data);
    }, [data])


    return {persistenceData};
}