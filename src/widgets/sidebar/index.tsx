'use client';
import styles from './sidebar.module.css';
import { links } from '@/widgets/sidebar/model/data/links';
import Link from 'next/link';
import { ELinks } from '@/shared/constants/links';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { layoutSliceActions } from '@/app/store/slices/layoutSlice';
import ProfileIcon from '@/shared/assets/profile.svg';
import SettingsIcon from '@/shared/assets/settings.svg';
import ArrowIcon from '@/shared/assets/arrow.svg';

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isAuth = true;
    const toggledSidebar = useAppSelector(
        (state) => state.layout.toggledSidebar,
    );

    const onToggleSidebar = () => dispatch(layoutSliceActions.toggleSidebar());

    return (
        <div
            className={`${styles.sidebar} ${toggledSidebar ? styles.toggled : ''}`}
        >
            LOGO
            <button
                onClick={onToggleSidebar}
                className={`${styles.toggleBtn} ${toggledSidebar ? styles.toggled : ''}`}
            >
                <ArrowIcon />
            </button>
            <nav>
                {links.map((link, idx) => {
                    if (link.href === ELinks.MOVIE) {
                        return (
                            <Link href={''} key={idx}>
                                {link.icon}
                                <span>{link.title}</span>
                            </Link>
                        );
                    }
                    return (
                        <Link href={link.href} key={idx}>
                            {link.icon}
                            <span>{link.title}</span>
                        </Link>
                    );
                })}
            </nav>
            <footer>
                {!isAuth && (
                    <>
                        <Link href={ELinks.SIGN_IN} className={styles.signIn}>
                            Войти
                        </Link>
                        <Link href={ELinks.SIGN_UP} className={styles.signUp}>
                            Регистрация
                        </Link>
                    </>
                )}
                {isAuth && (
                    <>
                        <Link href={ELinks.PROFILE}>
                            <ProfileIcon />
                            <span>Профиль</span>
                        </Link>
                        <Link href={ELinks.SETTINGS}>
                            <SettingsIcon />
                            <span>Настройки</span>
                        </Link>
                    </>
                )}
            </footer>
        </div>
    );
};
export default Sidebar;
