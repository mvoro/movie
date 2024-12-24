'use client';
import { MovieType } from '@/entities/movie';
import FavouriteIcon from '@/shared/assets/favourite.svg?react';
import styles from './addToFavouriteMovie.module.css';

const AddToFavouriteMovie = ({ movieId }: { movieId: MovieType['id'] }) => {
    const handleAddFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log(e);
    };
    return (
        <button onClick={handleAddFavourite} className={styles.button}>
            <FavouriteIcon />
        </button>
    );
};
export default AddToFavouriteMovie;
