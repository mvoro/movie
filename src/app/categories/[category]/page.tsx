import NowPlayingMovies from '@/widgets/categories/now-playing-movies';
import PopularMovies from '@/widgets/categories/popular-movies';
import TopRatedMovies from '@/widgets/categories/top-rated-movies';
import DefaultCategory from '@/widgets/categories/default';

const Category = ({ params }: { params: { category: string } }) => {
    const category = params.category;

    // Custom categories
    if (category === 'now_playing')
        return <NowPlayingMovies isInsidePage={true} />;
    if (category === 'popular') return <PopularMovies isInsidePage={true} />;
    if (category === 'top_rated') return <TopRatedMovies isInsidePage={true} />;

    // Search categories
    return <DefaultCategory genreId={category as string} />;
};
export default Category;
