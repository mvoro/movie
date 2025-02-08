import { MovieType } from '@/entities/movie';

export type GenreType = {
    id: number;
    name: string;
};
export type ReturnGenreType = {
    genres: GenreType[];
};
export interface ReturnGenreMovies {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}
