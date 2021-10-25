import { useEffect, useState } from "react";
const DATA_LINK = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

export const useFetch = () => {
    const [res, setRes] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(DATA_LINK);
            const json = await data.json();
            setRes(json);
        }
        getData();

    }, [])

    return res;
};