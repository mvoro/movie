'use client';
import { useParams } from 'next/navigation';
import { useGetInfoMovieQuery } from '@/entities/movie/model/api';
import { AboutMovie } from './ui/about-movie';
import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';
import styles from './page.module.css';
import { Media } from './ui/media';

const MoviePage = () => {
    const { movie, category } = useParams();
    const { data, isLoading, isError } = useGetInfoMovieQuery(Number(movie));

    console.log(data);

    if (!data) return null;

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.img}
                style={{
                    backgroundImage: `linear-gradient(to top, var(--bg-primary) 25%, transparent 100%), url(${IMAGE_PATH_W500 + data.backdrop_path})`,
                }}
            />
            <div className={styles.content}>
                <Media {...data} />
                <AboutMovie {...data} />
            </div>
        </div>
    );
};
export default MoviePage;
