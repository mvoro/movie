'use client';
import Movies from '@/widgets/movies';
import { ELinks } from '@/shared/constants/links';
import { Section } from '@/shared/ui/section';
import { useGetPopularMovieQuery } from '@/entities/movie/model/api';

const POPULAR_PATH = ELinks.CATEGORIES + '/now_playing';

type PropsType = {
    isInsidePage?: boolean;
};

const PopularMovies = ({ isInsidePage = false }: PropsType) => {
    const {
        data: popularMovies,
        isLoading,
        isError,
    } = useGetPopularMovieQuery(1);

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={POPULAR_PATH}
        >
            <h2>Популярное сегодня</h2>
            <Movies
                movies={popularMovies?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default PopularMovies;
