import { ELinks } from '@/shared/constants/links';
import RandomIcon from '@/shared/assets/random.svg';
import CategoryIcon from '@/shared/assets/category.svg';
import SearchIcon from '@/shared/assets/search.svg';
import HomeIcon from '@/shared/assets/home.svg';

type Link = {
    href: string;
    title: string;
    icon: React.ReactNode;
};
export const links: Link[] = [
    {
        href: ELinks.HOME,
        title: 'Главная',
        icon: <HomeIcon />,
    },
    {
        href: ELinks.SEARCH,
        title: 'Поиск',
        icon: <SearchIcon />,
    },
    {
        href: ELinks.CATEGORIES,
        title: 'Категории',
        icon: <CategoryIcon />,
    },
    {
        href: ELinks.MOVIE,
        title: 'Случайный фильм',
        icon: <RandomIcon />,
    },
];
