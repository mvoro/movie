import NowPlayingMovies from '@/widgets/now-playing-movies';

const Category = ({ params }: { params: { category: string } }) => {
    return <NowPlayingMovies isInsideNowPlaying={true} />;
};
export default Category;
