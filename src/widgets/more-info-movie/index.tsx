import { Section } from '@/shared/ui/section';
import AddToFavouriteMovie from '@/features/add-to-favourite-movie';
import MoreActionsMovie from '@/features/more-actions-movie';
import { MovieMoreInfoType } from '@/entities/movie';
import { Feature } from '@/widgets/more-info-movie/Feature';
import styles from './moreInfoMovie.module.css';
import { MoreInfoSkeleton } from './MoreInfoSkeleton';

export type MoreInfoMovieProps = { data: MovieMoreInfoType | undefined } & {
    isFetchingData?: boolean;
};

const MoreInfoMovie = (props: MoreInfoMovieProps) => {
    const { isFetchingData, data } = props;

    if (isFetchingData) return <MoreInfoSkeleton />;

    return (
        <Section zIndex className={styles.wrapper}>
            <header className={styles.header}>
                <h1>{data?.title}</h1>
                <p>{data?.overview}</p>
            </header>
            <div className={styles.actions}>
                <AddToFavouriteMovie
                    isLoading={isFetchingData}
                    movieId={data?.id}
                    isInside
                />
                <MoreActionsMovie />
            </div>
            <Feature data={data} />
        </Section>
    );
};
export default MoreInfoMovie;
export { MoreInfoSkeleton } from './MoreInfoSkeleton';
