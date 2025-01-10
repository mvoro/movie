import { Section } from '@/shared/ui/section';
import { ELinks } from '@/shared/constants/links';
import Movies from '@/widgets/movies';
import { makeStore } from '@/app/store';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';

type PropsType = {
    isInsidePage?: boolean;
};

const TOP_RATED_CATEGORY = '/top_rated';

const TopRatedMovies = async ({ isInsidePage = false }: PropsType) => {
    const store = await makeStore();
    const responseData = await store.dispatch(
        movieApi.endpoints.getTopRatedMovie.initiate(1),
    );
    const { data, isLoading, isError } = responseData;

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={ELinks.CATEGORIES + TOP_RATED_CATEGORY}
        >
            <h2>С высоким рейтингом</h2>
            <Movies
                category={TOP_RATED_CATEGORY}
                movies={data?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default TopRatedMovies;
