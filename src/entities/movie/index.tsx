'use client';
import styles from './movie.module.css';
import { MovieType } from './model/types';
import { Rating } from '@/entities/movie/ui/rating';
import { useMouseMoveDebounce } from '@/shared/helpers/hooks/useMouseMoveDebounce';
import { useMovieCardImage } from './helpers/useMovieCardImage';

type MovieProps = MovieType & { handleNavigate: () => void } & {
    addFavourite: React.ReactNode;
};

const Movie = (props: MovieProps) => {
    const {
        handleNavigate,
        addFavourite,
        vote_average,
        title,
        poster_path,
        vote_count,
        overview,
    } = props;
    const [isMouseMoving, handleMouseMove, handleMouseLeave] =
        useMouseMoveDebounce(500);

    const cardImagePath = useMovieCardImage(poster_path);

    return (
        <div
            onClick={handleNavigate}
            style={{ backgroundImage: `url(${cardImagePath})` }}
            onMouseMove={handleMouseLeave}
            onMouseLeave={handleMouseMove}
            className={`${styles.movie} ${isMouseMoving ? styles.move : ''}`}
        >
            <header>
                <Rating vote_average={vote_average} vote_count={vote_count} />{' '}
                {addFavourite}
            </header>
            <main>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </div>
                <div className={styles.bg} />
            </main>
        </div>
    );
};
export default Movie;

export type { MovieType, MovieMoreInfoType } from './model/types';
export { MovieLoader } from './ui/movie-loader';
