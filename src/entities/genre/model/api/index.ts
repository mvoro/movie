import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/api/helpers/fetchBaseQuery';
import { ReturnGenreMovies, ReturnGenreType } from '../types';

export const genreApi = createApi({
    reducerPath: 'genreApi',
    baseQuery: baseQuery,
    endpoints: (build) => ({
        getGenres: build.query<ReturnGenreType, void>({
            query: () => ({
                url: '/genre/movie/list',
                method: 'GET',
                params: {
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
            }),
        }),
        getMoviesWithGenre: build.query<
            ReturnGenreMovies,
            { genreId: string | number; page: number }
        >({
            query: ({ genreId, page }) => ({
                url: '/discover/movie',
                method: 'GET',
                params: {
                    page,
                    with_genres: genreId,
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
            }),
        }),
    }),
});
