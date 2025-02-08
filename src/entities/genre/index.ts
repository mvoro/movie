import { genreApi } from './model/api';

// exports
export { genreApi } from './model/api';
export type { GenreType } from './model/types';
export const {
    useGetGenresQuery,
    useGetMoviesWithGenreQuery,
    useLazyGetMoviesWithGenreQuery,
    useLazyGetGenresQuery,
} = genreApi;
