import styles from './movieMedia.module.css';
import { MovieType } from '@/entities/movie';

import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';
import { Section } from '@/shared/ui/section';
import Image from 'next/image';
import { MovieMediaSkeleton } from '@/features/movie-media/MovieMediaSkeleton';
import { Skeleton } from '@/shared/ui/skeleton';

type Props = {
    poster_path: MovieType['poster_path'] | undefined;
    video: MovieType['video'] | undefined;
    isFetchingData?: boolean;
};

const MovieMedia = ({ poster_path, video, isFetchingData }: Props) => {
    if (isFetchingData) return <MovieMediaSkeleton />;

    return (
        <Section className={styles.wrapper}>
            <Image
                width={448}
                height={748}
                src={IMAGE_PATH_W500 + poster_path}
                alt={'image'}
                quality={45}
                priority
            />
            {!video ? (
                <Skeleton style={{ width: '100%', height: '256px' }} />
            ) : (
                <div />
            )}
        </Section>
    );
};
export default MovieMedia;
export { MovieMediaSkeleton } from './MovieMediaSkeleton';
