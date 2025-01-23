// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Swiper } from 'swiper/react';

// import required modules
import { Scrollbar } from 'swiper/modules';

import styles from './swiperGallery.module.css';

export const SwiperGallery = <T,>({
    items,
    renderItem,
}: {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}) => {
    return (
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className={styles.wrapper}
        >
            {items.map((item) => renderItem(item))}
        </Swiper>
    );
};
