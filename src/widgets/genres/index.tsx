'use client';
import { Section } from '@/shared/ui/section';
import styles from './genres.module.css';
import { useGetGenresQuery } from '@/entities/genre';
import Link from 'next/link';
import { Genre } from '@/entities/movie/model/types';
import { GenresSkeleton } from '@/widgets/genres/GenresSkeleton';

const Genres = () => {
    const { data, isLoading, isError } = useGetGenresQuery();

    const firstLettersGenres = data?.genres.reduce(
        (acc: Record<string, Genre[]>, cur) => {
            const key = cur.name[0];
            if (!acc[key]) {
                acc[key] = [cur];
            } else {
                acc[key].push(cur);
            }
            return acc;
        },
        {},
    );

    // loading
    if (!firstLettersGenres || isError) return <GenresSkeleton />;

    return (
        <Section title={'Категории'}>
            <div className={styles.wrapper}>
                {Object.keys(firstLettersGenres).map((key) => (
                    <div key={key} className={styles.genre}>
                        <span>{key.toUpperCase()}</span>
                        <div className={styles.items}>
                            {firstLettersGenres[key].map((item: Genre) => (
                                <Link
                                    key={item.id}
                                    href={`/categories/${item.id}`}
                                >
                                    {item.name[0].toUpperCase() +
                                        item.name.slice(1)}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
export default Genres;
