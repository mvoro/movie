import styles from './moreInfoMovie.module.css';
import { MovieMoreInfoType } from '@/entities/movie';

export const Feature = ({ data }: { data: MovieMoreInfoType | undefined }) => {
    return (
        <div className={styles.featureContainer}>
            <h3>О фильме</h3>
            <ul className={styles.feature}>
                <li>
                    <h4>Страна</h4>
                    <span>{data?.production_countries[0].name}</span>
                </li>
                <li>
                    <h4>Дата выхода</h4>
                    <span>
                        {data?.release_date.split('-').reverse().join('.')}
                    </span>
                </li>
                <li>
                    <h4>Бюджет</h4>
                    <span>{data?.budget.toLocaleString()} $</span>
                </li>
                <li>
                    <h4>Доход</h4>
                    <span>{data?.revenue.toLocaleString()} $</span>
                </li>
                <li>
                    <h4>Жанры</h4>
                    <div>
                        {data?.genres
                            .slice(0, 2)
                            .map((genre, idx) => (
                                <span key={idx}>
                                    {genre.name[0].toUpperCase() +
                                        genre.name.slice(1)}
                                </span>
                            ))}
                    </div>
                </li>
                <li>
                    <h4>Аудиодорожки</h4>
                    <div>
                        {data?.spoken_languages
                            .slice(0, 2)
                            .map((lang, idx) => (
                                <span key={idx}>{lang.name}</span>
                            ))}
                    </div>
                </li>
            </ul>
        </div>
    );
};
