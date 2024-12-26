import { MovieType } from '@/entities/movie';

export interface ResponseMovieApi {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: MovieType[];
}
