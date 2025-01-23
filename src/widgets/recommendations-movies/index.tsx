import styles from './recommendationsMovies.module.css';
import Movies from '@/widgets/movies';
import { useGetRecommendationsMoviesQuery } from './model/endpoints';
import { Section } from '@/shared/ui/section';

type Props = {
    movieId: number;
    category: string;
};

const RecommendationsMovies = ({ movieId, category }: Props) => {
    const {
        data: recommendationsMovies,
        isLoading,
        isError,
    } = useGetRecommendationsMoviesQuery(movieId);

    return (
        <Section className={styles.wrapper} title={'Рекомендуем к просмотру'}>
            <Movies
                movies={recommendationsMovies?.results}
                isLoading={isLoading}
                category={category}
                isError={isError}
            />
        </Section>
    );
};
export { RecommendationMoviesSkeleton } from './RecommendationMoviesSkeleton';
export default RecommendationsMovies;
