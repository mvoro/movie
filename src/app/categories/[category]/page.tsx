import NowPlayingMovies from '@/widgets/categories/now-playing-movies';

const Category = async ({ params }: { params: { category: string } }) => {
    console.log(params);
    return <NowPlayingMovies isInsidePage={true} />;
};
export default Category;
