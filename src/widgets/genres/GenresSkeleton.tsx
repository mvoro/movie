import { Section } from '@/shared/ui/section';
import { Skeleton } from '@/shared/ui/skeleton';
import styles from './genres.module.css';

export const GenresSkeleton = () => {
    return (
        <Section>
            <Skeleton style={{ width: '150px', height: '32px' }} />
            <div className={styles.wrapper}>
                {[...Array(5)].map((_, i) => (
                    <div className={styles.genre}>
                        <Skeleton
                            style={{
                                width: '20px',
                                marginRight: '3rem',
                                height: '32px',
                            }}
                        />
                        <div className={styles.items}>
                            {[...Array(3)].map((_, i) => (
                                <Skeleton
                                    style={{
                                        width: '150px',
                                        height: '24px',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
