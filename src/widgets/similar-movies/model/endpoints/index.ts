import { movieApi } from '@/entities/movie/model/api/list/movieApi';
import { MovieType } from '@/entities/movie';

type ResultSimilarMoviesType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

const similarMoviesEndpoints = movieApi.injectEndpoints({
    endpoints: (build) => ({
        getSimilarMovies: build.query<ResultSimilarMoviesType, number>({
            query: (movieId) => ({
                url: `/movie/${movieId}/similar`,
                params: {
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetSimilarMoviesQuery } = similarMoviesEndpoints;
