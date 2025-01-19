'use client';

import styles from './page.module.css';
import SearchMovie from '@/features/search-movie';
import Movies from '@/widgets/movies';
import { useState } from 'react';
import { MovieType } from '@/entities/movie';
const Search = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(true);

    console.log(movies);

    return (
        <div className={styles.page}>
            <div className={styles.search}>
                <h1>Все фильмы в одном запросе</h1>
                <SearchMovie
                    setSearchedMovies={setMovies}
                    setLoading={setLoading}
                    setError={setError}
                />
            </div>
            <Movies
                className={`${styles.movies} ${movies.length > 0 ? styles.found : ''}`}
                movies={movies}
                isLoading={loading}
                category={''}
                isError={error}
                isInside={false}
            />
        </div>
    );
};
export default Search;
