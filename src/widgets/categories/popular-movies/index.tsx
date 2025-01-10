import Movies from '@/widgets/movies';
import { ELinks } from '@/shared/constants/links';
import { Section } from '@/shared/ui/section';
import { makeStore } from '@/app/store';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';

const POPULAR_CATEGORY = '/popular';

type PropsType = {
    isInsidePage?: boolean;
};

const PopularMovies = async ({ isInsidePage = false }: PropsType) => {
    const store = await makeStore();
    const responseData = await store.dispatch(
        movieApi.endpoints.getPopularMovie.initiate(1),
    );
    const { data, isError, isLoading } = responseData;

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={ELinks.CATEGORIES + POPULAR_CATEGORY}
        >
            <h2>Популярное сегодня</h2>
            <Movies
                category={POPULAR_CATEGORY}
                movies={data?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default PopularMovies;
