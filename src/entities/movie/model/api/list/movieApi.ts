import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/api/helpers/fetchBaseQuery';
import { ResponseMovieApi } from '@/entities/movie/model/types/movieApiTypes';
import { MovieMoreInfoType } from '@/entities/movie';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: baseQuery(),
    endpoints: (build) => ({
        getNowPlayingMovie: build.query<ResponseMovieApi, number>({
            query: (page) => ({
                params: {
                    page,
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                url: '/movie/now_playing',
            }),
        }),
        getPopularMovie: build.query<ResponseMovieApi, number>({
            query: (page) => ({
                params: {
                    page,
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                url: '/movie/popular',
            }),
        }),
        getTopRatedMovie: build.query<ResponseMovieApi, number>({
            query: (page) => ({
                params: {
                    page,
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                url: '/movie/top_rated',
            }),
        }),
        getInfoMovie: build.query<MovieMoreInfoType, number>({
            query: (movieId) => ({
                params: {
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                url: `/movie/${movieId}`,
            }),
        }),
    }),
});
