import dynamic from 'next/dynamic';
import { MovieType } from '@/entities/movie';
import styles from './page.module.css';
import MovieCard from '@/widgets/movie-card';
import NowPlayingMovies from '@/widgets/now-playing-movies';

const RecommendationBanner = dynamic(
    () => import('@/widgets/recommendation-banner'),
);

const mockMovie: MovieType = {
    adult: false,
    backdrop_path: '/cjEcqdRdPQJhYre3HUAc5538Gk8.jpg',
    genre_ids: [28, 14, 35],
    id: 845781,
    original_language: 'en',
    original_title: 'Red One',
    overview:
        'Санта-Клаус под кодовым именем Красный похищен. Начальник службы безопасности Северного полюса должен объединиться с самым известным в мире охотником за головами. Вместе они начинают кругосветную миссию по спасению Рождества.',
    popularity: 6140.642,
    poster_path: '/6T36kuDbXCGRistIewSwKyTmijt.jpg',
    release_date: '2024-10-31',
    title: 'Миссия: Красный',
    video: false,
    vote_average: 7,
    vote_count: 1218,
};

const Home = () => {
    return (
        <div>
            <RecommendationBanner />
            <NowPlayingMovies />
        </div>
    );
};
export default Home;
