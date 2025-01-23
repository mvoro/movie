import { movieApi } from '@/entities/movie/model/api/list/movieApi';
import { MovieType } from '@/entities/movie';

type ResultSearchMovieType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

const searchMovieEndpoints = movieApi.injectEndpoints({
    endpoints: (build) => ({
        searchMovie: build.query<
            ResultSearchMovieType,
            { queryParam: string; page: number }
        >({
            query: ({ queryParam, page }) => ({
                url: '/search/movie',
                params: {
                    page,
                    query: queryParam,
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
            }),
        }),
    }),
});
export const { useSearchMovieQuery, useLazySearchMovieQuery } =
    searchMovieEndpoints;
