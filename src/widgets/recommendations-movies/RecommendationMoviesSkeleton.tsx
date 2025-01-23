import styles from './recommendationsMovies.module.css';
import { Skeleton } from '@/shared/ui/skeleton';
import Movies from '@/widgets/movies';
import { Section } from '@/shared/ui/section';

export const RecommendationMoviesSkeleton = () => {
    return (
        <Section className={styles.wrapper}>
            <Skeleton
                style={{ width: '275px', height: '24px', marginBottom: '1rem' }}
            />
            <Movies
                movies={[]}
                isLoading={true}
                category={''}
                isError={false}
            />
        </Section>
    );
};
