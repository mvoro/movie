import { Section } from '@/shared/ui/section';
import styles from './moreInfoMovie.module.css';
import { Skeleton } from '@/shared/ui/skeleton';

export const MoreInfoSkeleton = () => {
    return (
        <Section className={styles.wrapper}>
            <header className={styles.header}>
                <Skeleton style={{ height: '42px' }} />
                <Skeleton style={{ height: '92px' }} />
            </header>
            <div className={styles.actions}>
                <Skeleton style={{ height: '48px', width: '220px' }} />
                <Skeleton style={{ height: '48px', width: '64px' }} />
            </div>
            <div className={styles.featureContainer}>
                <Skeleton style={{ width: '116px', height: '32px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
                <Skeleton style={{ width: '500px', height: '24px' }} />
            </div>
        </Section>
    );
};
