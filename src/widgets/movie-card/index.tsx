'use client';
import Movie, { MovieType } from '@/entities/movie';
import AddToFavouriteMovie from '@/features/add-to-favourite-movie';
import { useRouter } from 'next/navigation';

const MovieCard = (props: MovieType & { category: string }) => {
    const router = useRouter();
    const handleNavigateInsidePage = () => {
        router.push(`/categories/${props.category}/${props.id}`);
        console.log(props.category);
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
