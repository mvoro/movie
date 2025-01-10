import Movies from '@/widgets/movies';
import { ELinks } from '@/shared/constants/links';
import { Section } from '@/shared/ui/section';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';
import { makeStore } from '@/app/store';

type PropsType = {
    isInsidePage?: boolean;
};

const NOW_PLAYING_CATEGORY = '/now_playing';

const NowPlayingMovies = async ({ isInsidePage = false }: PropsType) => {
    const store = await makeStore();
    const responseData = await store.dispatch(
        movieApi.endpoints.getNowPlayingMovie.initiate(1),
    );
    const { data, isError, isLoading } = responseData;

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={ELinks.CATEGORIES + NOW_PLAYING_CATEGORY}
        >
            <h2>Сейчас в прокате</h2>
            <Movies
                category={NOW_PLAYING_CATEGORY}
                movies={data?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default NowPlayingMovies;
