import styles from './movies.module.css';
import { MovieLoader, MovieType } from '@/entities/movie';
import MovieCard from '@/widgets/movie-card';

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

    const movieContainer = (children: React.ReactNode) => (
        <div className={styles.movies}>{children}</div>
    );

    if (isLoading) {
        return movieContainer(
            <>
                {[...new Array(4)].map((_, idx) => (
                    <MovieLoader key={idx} />
                ))}
            </>,
        );
    }
    if (isError) {
        return movieContainer(<h5>Ошибка загрузки фильмов</h5>);
    }

    return movieContainer(
        <>
            {replacedMoviesData?.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </>,
    );
};
export default Movies;
