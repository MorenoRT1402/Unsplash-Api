/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDataFromAPI = async () => {
        setLoading(true);
        try {
            const res = await fetch(url, options);
            if (res.ok) {
                const data = await res.json();
                setData(data);
            }
            setError('response is not ok');
        }
        catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getDataFromAPI();
    }, []);

    return { data, loading, error };
}