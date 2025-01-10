import NowPlayingMovies from '@/widgets/categories/now-playing-movies';

const Category = ({ params }: { params: { category: string } }) => {
    return <NowPlayingMovies isInsidePage={true} />;
};
export default Category;
