import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then( res => {
            setImages(res);
            setIsLoading(false);
        })
    }, [ ])

    return {
        images: [...images],
        isLoading: isLoading
    }
}