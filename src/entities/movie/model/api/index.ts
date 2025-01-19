import { movieApi } from './list/movieApi';

export const {
    useGetNowPlayingMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRatedMovieQuery,
    useGetInfoMovieQuery,
    useGetImagesMovieQuery,
} = movieApi;
