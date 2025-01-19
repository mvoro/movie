'use client';
import { useParams } from 'next/navigation';
import { useGetInfoMovieQuery } from '@/entities/movie/model/api';
import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';
import styles from './page.module.css';
import { MoreInfoSkeleton } from '@/widgets/more-info-movie';
import dynamic from 'next/dynamic';
import { MovieRatingSkeleton } from '@/features/movie-rating';
import { MovieMediaSkeleton } from '@/widgets/media-movie';

const MovieMedia = dynamic(() => import('@/widgets/media-movie'), {
    ssr: false,
    loading: () => <MovieMediaSkeleton />,
});
const MoreInfoMovie = dynamic(() => import('@/widgets/more-info-movie'), {
    ssr: false,
    loading: () => <MoreInfoSkeleton />,
});
const MovieRating = dynamic(() => import('@/features/movie-rating'), {
    ssr: false,
    loading: () => <MovieRatingSkeleton />,
});

const MoviePage = () => {
    const { movie } = useParams();
    const { data, isLoading, isError } = useGetInfoMovieQuery(Number(movie));

    const isFetchingData = isLoading || isError;

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.img}
                style={{
                    backgroundImage: `linear-gradient(to top, var(--bg-primary) 10%, transparent 100%), url(${IMAGE_PATH_W500 + data?.backdrop_path})`,
                }}
            />
            <div className={styles.content}>
                <MovieMedia
                    poster_path={data?.poster_path}
                    id={data?.id || Number(movie)}
                    isFetchingData={isFetchingData}
                />
                <MoreInfoMovie data={data} isFetchingData={isFetchingData} />
                <MovieRating
                    movieId={data?.id}
                    vote_average={data?.vote_average}
                    isFetchingData={isFetchingData}
                    vote_count={data?.vote_count}
                />
            </div>
        </div>
    );
};
export default MoviePage;
