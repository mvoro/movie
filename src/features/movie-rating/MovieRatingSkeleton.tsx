import { Section } from '@/shared/ui/section';
import styles from './movieRating.module.css';
import { Skeleton } from '@/shared/ui/skeleton';

export const MovieRatingSkeleton = () => {
    return (
        <Section>
            <div className={styles.stats}>
                <Skeleton style={{ height: '42px', width: '100px' }} />
                <Skeleton style={{ height: '24px', width: '132px' }} />
            </div>
            <Skeleton style={{ height: '40px' }} />
        </Section>
    );
};
