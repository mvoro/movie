import styles from './mediaMovie.module.css';
import Image from 'next/image';
import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';
import { Section } from '@/shared/ui/section';
import { MovieMediaSkeleton } from './MovieMediaSkeleton';
import { MovieType } from '@/entities/movie';
import MovieGallery from '@/features/movie-gallery';

type Props = {
    poster_path: MovieType['poster_path'] | undefined;
    isFetchingData?: boolean;
    id: MovieType['id'];
};

const MediaMovie = ({ poster_path, isFetchingData, id }: Props) => {
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
            <MovieGallery id={id} />
        </Section>
    );
};
export default MediaMovie;
export { MovieMediaSkeleton } from './MovieMediaSkeleton';
