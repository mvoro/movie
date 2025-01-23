import styles from './movies.module.css';
import { MovieLoader, MovieType } from '@/entities/movie';
import MovieCard from '@/widgets/movie-card';

type PropsType = {
    movies: MovieType[] | undefined;
    isLoading: boolean;
    category: string;
    isError: boolean;
    isInside?: boolean;
    isSwiper?: boolean;
    className?: string;
};

const Movies = ({
    movies,
    isLoading,
    isError,
    category,
    isInside = false,
    isSwiper = false,
    className,
}: PropsType) => {
    const replacedMoviesData = isInside ? movies : movies?.slice(0, 5);

    const movieContainer = (children: React.ReactNode) => (
        <div className={`${styles.movies} ${className ? className : ''}`}>
            {children}
        </div>
    );

    if (isLoading) {
        return movieContainer(
            <>
                {[...new Array(5)].map((_, idx) => (
                    <MovieLoader key={idx} />
                ))}
            </>,
        );
    }
    if (isError) {
        return movieContainer(<h5>Ошибка загрузки фильмов</h5>);
    }

    // TODO: Обработать isSwiper

    return movieContainer(
        <>
            {replacedMoviesData?.map((movie) => (
                <MovieCard category={category} key={movie.id} {...movie} />
            ))}
        </>,
    );
};
export default Movies;
