'use client';
import styles from './searchMovie.module.css';
import { MovieType } from '@/entities/movie';
import SearchIcon from '@/shared/assets/search.svg?react';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/shared/helpers/hooks/useDebounce';
import { useLazySearchMovieQuery } from './model/endpoints';

type Props = {
    setSearchedMovies: (movies: MovieType[]) => void;
    setLoading: (isLoading: boolean) => void;
    setError?: (isLoading: boolean) => void;
};

const SearchMovie = ({ setSearchedMovies, setLoading, setError }: Props) => {
    const [value, setValue] = useState<string>('');
    const [focused, setFocused] = useState<boolean>(false);
    const debouncedValue = useDebounce(value, 300);
    const [getMovies] = useLazySearchMovieQuery();

    useEffect(() => {
        if (!debouncedValue.trim().length) {
            setSearchedMovies([]);
        }
        // query
        if (debouncedValue.trim().length) {
            setLoading(true);
            getMovies({ page: 1, queryParam: debouncedValue })
                .unwrap()
                .then((res) => {
                    if (res.results.length) {
                        setSearchedMovies(res.results);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    if (setError) {
                        setError(true);
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [debouncedValue, getMovies, setError, setLoading, setSearchedMovies]);

    return (
        <div className={`${styles.wrapper} ${focused ? styles.focused : ''}`}>
            <SearchIcon />
            <input
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={'Начните вводить...'}
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    );
};
export default SearchMovie;
