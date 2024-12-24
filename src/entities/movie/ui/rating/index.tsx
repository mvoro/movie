import { MovieType } from '@/entities/movie';
import styles from './rating.module.css';

export const Rating = ({
    vote_average,
    vote_count,
}: {
    vote_average: MovieType['vote_average'];
    vote_count: MovieType['vote_count'];
}) => {
    return (
        <div className={styles.wrapper}>
            <span>
                {vote_average} <b>/ 10</b>
            </span>
            <span>{vote_count.toLocaleString()} оценок</span>
            {/*icon*/}
        </div>
    );
};
