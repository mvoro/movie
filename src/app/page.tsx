import dynamic from 'next/dynamic';
import NowPlayingMovies from '@/widgets/now-playing-movies';
import PopularMovies from '@/widgets/popular-movies';
import TopRatedMovies from '@/widgets/top-rated-movies';
import { Page } from '@/shared/ui/page';

const RecommendationBanner = dynamic(
    () => import('@/widgets/recommendation-banner'),
);

const Home = () => {
    return (
        <Page>
            <RecommendationBanner />
            <NowPlayingMovies />
            <PopularMovies />
            <RecommendationBanner />
            <TopRatedMovies />
        </Page>
    );
};
export default Home;
