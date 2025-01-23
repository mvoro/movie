import { movieApi } from '@/entities/movie/model/api/list/movieApi';
import { MovieType } from '@/entities/movie';

type ResultRecommendationMoviesType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

const recommendationsMoviesEndpoints = movieApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendationsMovies: build.query<
            ResultRecommendationMoviesType,
            number
        >({
            query: (movieId) => ({
                url: `/movie/${movieId}/recommendations`,
                params: {
                    language: process.env.NEXT_PUBLIC_LANGUAGE_RESPONSE,
                },
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetRecommendationsMoviesQuery } =
    recommendationsMoviesEndpoints;
