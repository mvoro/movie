import dynamic from 'next/dynamic';

const RecommendationBanner = dynamic(
    () => import('@/widgets/recommendation-banner'),
);
const Home = () => {
    return (
        <div>
            <RecommendationBanner />
        </div>
    );
};
export default Home;
