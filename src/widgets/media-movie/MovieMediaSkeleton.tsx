import { Section } from '@/shared/ui/section';
import { Skeleton } from '@/shared/ui/skeleton';

export const MovieMediaSkeleton = () => {
    return (
        <Section>
            <Skeleton style={{ minHeight: '748px' }} />
            <Skeleton style={{ height: '248px' }} />
        </Section>
    );
};
