'use client';
import Movie, { MovieType } from '@/entities/movie';
import AddToFavouriteMovie from '@/features/add-to-favourite-movie';

const MovieCard = (props: MovieType) => {
    const handleNavigateInsidePage = () => {
        console.log('click navigate');
    };

    return (
        <Movie
            {...props}
            handleNavigate={handleNavigateInsidePage}
            addFavourite={<AddToFavouriteMovie movieId={props.id} />}
        />
    );
};
export default MovieCard;
