'use client';
import { MovieType } from '@/entities/movie';
import FavouriteIcon from '@/shared/assets/favourite.svg?react';
import styles from './addToFavouriteMovie.module.css';
import Button from '@/shared/ui/button';

type Props = {
    movieId: MovieType['id'] | undefined;
    isInside?: boolean;
    isLoading?: boolean;
};

const AddToFavouriteMovie = ({
    movieId,
    isInside = false,
    isLoading,
}: Props) => {
    const handleAddFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log(e, movieId);
    };

    if (isInside) {
        return (
            <Button
                disabled={isLoading}
                style={{ gap: '0.75rem' }}
                onClick={handleAddFavourite}
                variant={'contained'}
                color={'primary'}
                size={'large'}
            >
                <FavouriteIcon />
                Буду смотреть
            </Button>
        );
    }

    return (
        <button onClick={handleAddFavourite} className={styles.button}>
            <FavouriteIcon />
        </button>
    );
};
export default AddToFavouriteMovie;
