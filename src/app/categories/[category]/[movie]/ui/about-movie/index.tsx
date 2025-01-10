import styles from './aboutMovie.module.css';
import { MovieMoreInfoType } from '@/entities/movie';

export const AboutMovie = (props: MovieMoreInfoType) => {
    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <h1>{props.title}</h1>
                <p>{props.overview}</p>
            </header>
            <div className={styles.actions}></div>
            {/*actions*/}
            <ul className={styles.feature}>
                <li>
                    <h4>Жанры</h4>
                    <div>
                        {props.genres.map((genre, idx) => (
                            <span key={idx}>
                                {genre.name[0].toUpperCase() +
                                    genre.name.slice(1)}
                            </span>
                        ))}
                    </div>
                </li>
                <li>
                    <h4>Страна</h4>
                    <span>{props.production_countries[0].name}</span>
                </li>
                <li>
                    <h4>Аудиодорожки</h4>
                    <div>
                        {props.spoken_languages.map((lang, idx) => (
                            <span key={idx}>{lang.name}</span>
                        ))}
                    </div>
                </li>
            </ul>
        </section>
    );
};
