'use client';
import styles from './nowPlayingMovies.module.css';
import { useGetNowPlayingMovieQuery } from '@/entities/movie/model/api';
import Link from 'next/link';
import ArrowIcon from '@/shared/assets/arrow.svg';
import Movies from '@/widgets/movies';
import Button from '@/shared/ui/button';
import { ELinks } from '@/shared/constants/links';

type PropsType = {
    isInsideNowPlaying?: boolean;
};

const NowPlayingMovies = ({ isInsideNowPlaying = false }: PropsType) => {
    const {
        data: nowPlayingData,
        isLoading,
        isError,
    } = useGetNowPlayingMovieQuery(1);

    const movies = isInsideNowPlaying
        ? nowPlayingData?.results
        : nowPlayingData?.results.slice(0, 5);

    if (isError || isLoading) {
        return;
    }

    return (
        <section className={styles.wrapper}>
            <h2>Сейчас в прокате</h2>
            <Movies
                movies={movies}
                isLoading={isLoading}
                isInside={isInsideNowPlaying}
                isError={isError}
            />
            {isInsideNowPlaying ? (
                'pagination'
            ) : (
                <Link
                    className={styles.linkShowMore}
                    href={ELinks.CATEGORIES + '/now_playing'}
                >
                    <Button variant={'text'} color={'light'}>
                        Смотреть все <ArrowIcon />
                    </Button>
                </Link>
            )}
        </section>
    );
};
export default NowPlayingMovies;
