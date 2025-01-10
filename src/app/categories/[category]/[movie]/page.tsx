'use client';
import { useParams } from 'next/navigation';
import { useGetInfoMovieQuery } from '@/entities/movie/model/api';

const MoviePage = () => {
    const { movie, category } = useParams();
    const { data, isLoading, isError } = useGetInfoMovieQuery(Number(movie));

    console.log(data);

    return <div>{"it's inside page"}</div>;
};
export default MoviePage;
