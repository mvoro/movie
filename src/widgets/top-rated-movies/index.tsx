'use client';
import { useGetTopRatedMovieQuery } from '@/entities/movie/model/api';
import { Section } from '@/shared/ui/section';
import { ELinks } from '@/shared/constants/links';
import Movies from '@/widgets/movies';

type PropsType = {
    isInsidePage?: boolean;
};

const TOP_RATED_PATH = ELinks.CATEGORIES + '/top_rated';

const TopRatedMovies = ({ isInsidePage = false }: PropsType) => {
    const {
        data: topRatedMovies,
        isLoading,
        isError,
    } = useGetTopRatedMovieQuery(1);

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={TOP_RATED_PATH}
        >
            <h2>С высоким рейтингом</h2>
            <Movies
                movies={topRatedMovies?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default TopRatedMovies;
