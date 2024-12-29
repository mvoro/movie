import styles from './movies.module.css';
import { MovieType } from '@/entities/movie';
import MovieCard from '@/widgets/movie-card';
import Loader from '@/shared/ui/loader';

type PropsType = {
    movies: MovieType[] | undefined;
    isLoading: boolean;
    isError: boolean;
    isInside?: boolean;
};

const Movies = ({
    movies,
    isLoading,
    isError,
    isInside = false,
}: PropsType) => {
    const replacedMoviesData = isInside ? movies : movies?.slice(0, 5);

    if (isLoading || isError) {
        return (
            <div
                className={`${styles.movies} ${isLoading ? styles.loader : ''}`}
            >
                <Loader />
            </div>
        );
    }

    return (
        <div className={styles.movies}>
            {replacedMoviesData?.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    );
};
export default Movies;
