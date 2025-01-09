'use client';
import { useGetNowPlayingMovieQuery } from '@/entities/movie/model/api';
import Movies from '@/widgets/movies';
import { ELinks } from '@/shared/constants/links';
import { Section } from '@/shared/ui/section';

type PropsType = {
    isInsidePage?: boolean;
};

const NOW_PLAYING_PATH = ELinks.CATEGORIES + '/now_playing';

const NowPlayingMovies = ({ isInsidePage = false }: PropsType) => {
    const {
        data: nowPlayingData,
        isLoading,
        isError,
    } = useGetNowPlayingMovieQuery(1);

    return (
        <Section
            isInsidePage={isInsidePage}
            pagination={'pagination'}
            showMorePath={NOW_PLAYING_PATH}
        >
            <h2>Сейчас в прокате</h2>
            <Movies
                movies={nowPlayingData?.results}
                isLoading={isLoading}
                isInside={isInsidePage}
                isError={isError}
            />
        </Section>
    );
};
export default NowPlayingMovies;
