import { MovieType } from '@/entities/movie';
import { Section } from '@/shared/ui/section';
import Button from '@/shared/ui/button';
import styles from './movieRating.module.css';
import { MovieRatingSkeleton } from './MovieRatingSkeleton';
import RatingIcon from '@/shared/assets/rating.svg?react';

type MovieRatingProps = {
    vote_average: MovieType['vote_average'] | undefined;
    vote_count: MovieType['vote_count'] | undefined;
    movieId: MovieType['id'] | undefined;
    isFetchingData?: boolean;
};

const MovieRating = ({
    vote_average = 0,
    movieId,
    vote_count = 0,
    isFetchingData,
}: MovieRatingProps) => {
    if (isFetchingData) return <MovieRatingSkeleton />;

    const colorRating =
        vote_average > 4
            ? vote_average > 7
                ? 'var(--success)'
                : 'var(--warning)'
            : 'var(--error)';

    const onRateMovie = () => {
        console.log('Movie rating', movieId);
    };
    return (
        <Section zIndex>
            <div className={styles.stats}>
                <span style={{ color: colorRating }}>
                    {vote_average.toFixed(1)} <b>/ 10</b>
                </span>
                <span>{vote_count.toLocaleString()} оценок</span>
            </div>
            <Button
                color={'light'}
                variant={'outlined'}
                style={{ width: '100%', gap: '0.75rem' }}
                onClick={onRateMovie}
            >
                <RatingIcon />
                Оценить фильм
            </Button>
        </Section>
    );
};
export default MovieRating;
export { MovieRatingSkeleton } from './MovieRatingSkeleton';
