'use client';
import styles from './searchMovie.module.css';
import { MovieType } from '@/entities/movie';
import SearchIcon from '@/shared/assets/search.svg?react';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/shared/helpers/hooks/useDebounce';

type Props = {
    setSearchedMovies: (movies: MovieType[]) => void;
    setLoading?: (isLoading: boolean) => void;
    setError?: (isLoading: boolean) => void;
};

const SearchMovie = ({ setSearchedMovies, setLoading }: Props) => {
    const [value, setValue] = useState<string>('');
    const [focused, setFocused] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const debouncedValue = useDebounce(value, 300);

    useEffect(() => {
        // query
        if (debouncedValue.length) {
            setIsLoading(true);
        }
    }, [debouncedValue]);

    useEffect(() => {
        if (isLoading) {
            setSearchedMovies(['232']);
        }
    }, [isLoading, setSearchedMovies]);

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
