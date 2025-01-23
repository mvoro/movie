import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import styles from './movieGallery.module.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
import { MovieType } from '@/entities/movie';
import { useGetImagesMovieQuery } from '@/entities/movie/model/api';
import { Skeleton } from '@/shared/ui/skeleton';
import Image from 'next/image';
import { IMAGE_PATH_W500 } from '@/shared/constants/tmdb/imagesLinks';

type Props = {
    id: MovieType['id'];
};

const MovieGallery = ({ id }: Props) => {
    const { data: imagesData, isLoading } = useGetImagesMovieQuery(id);

    if (isLoading) return <Skeleton style={{ height: '248px' }} />;

    if (!imagesData?.posters.length) return null;

    return (
        <div className={styles.container}>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                modules={[EffectCreative]}
                className={styles.swiper}
            >
                {[...imagesData?.posters].reverse().map((poster, idx) => (
                    <SwiperSlide key={idx} className={styles.slide}>
                        <Image
                            width={448}
                            height={248}
                            src={IMAGE_PATH_W500 + poster.file_path}
                            alt={'Poster movie'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default MovieGallery;
