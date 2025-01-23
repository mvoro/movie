import styles from './similarMovies.module.css';
import Movies from '@/widgets/movies';
import { useGetSimilarMoviesQuery } from './model/endpoints';
import { Section } from '@/shared/ui/section';

type Props = {
    movieId: number;
    category: string;
};

const SimilarMovies = ({ movieId, category }: Props) => {
    const {
        data: similarMovies,
        isLoading,
        isError,
    } = useGetSimilarMoviesQuery(movieId);
    return (
        <Section className={styles.wrapper} title={'Похожие'}>
            <Movies
                movies={similarMovies?.results}
                isLoading={isLoading}
                category={category}
                isError={isError}
            />
        </Section>
    );
};
export { SimilarMoviesSkeleton } from './SimularMoviesSkeleton';
export default SimilarMovies;
