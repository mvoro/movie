import { useCallback, useEffect, useState } from 'react';
import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';

const LOAD_MOVIE_PATH = '/images/movie/load-poster.png';
const ERROR_MOVIE_PATH = '/images/movie/error-poster.png';

export const useMovieCardImage = (imagePath: string) => {
    const [cardImagePath, setCardImagePath] = useState<string>(LOAD_MOVIE_PATH);

    const checkImagePath = useCallback(() => {
        const img = new Image();
        const posterPath = IMAGE_PATH_W500 + imagePath;
        img.src = posterPath;
        img.onloadstart = () => setCardImagePath(LOAD_MOVIE_PATH);
        img.onload = () => setCardImagePath(posterPath);
        img.onerror = () => setCardImagePath(ERROR_MOVIE_PATH);
    }, [imagePath]);

    useEffect(() => {
        checkImagePath();
    }, [checkImagePath]);

    return cardImagePath;
};
