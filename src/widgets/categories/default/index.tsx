import { Section } from '@/shared/ui/section';
import { genreApi } from '@/entities/genre';
import { makeStore } from '@/app/store';
import Movies from '@/widgets/movies';

const DefaultCategory = async ({ genreId }: { genreId: string }) => {
    const store = makeStore();
    const moviesResponse = await store.dispatch(
        genreApi.endpoints.getMoviesWithGenre.initiate({ genreId, page: 1 }),
    );
    const genresResponse = await store.dispatch(
        genreApi.endpoints.getGenres.initiate(),
    );
    const { data: moviesData, isLoading, isError } = moviesResponse;
    const { data: genresData } = genresResponse;

    // Naming category
    const genreName =
        genresData?.genres.find((genre) => genre.id === Number(genreId))
            ?.name || 'Категория';
    const genreTitle = genreName[0].toUpperCase() + genreName.slice(1);

    return (
        <Section title={genreTitle}>
            <Movies
                isInside={true}
                movies={moviesData?.results}
                isLoading={isLoading}
                category={genreId}
                isError={isError}
            />
        </Section>
    );
};
export default DefaultCategory;
