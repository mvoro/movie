import { movieApi } from './list/movieApi';

export const {
    useGetNowPlayingMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
} = movieApi;
