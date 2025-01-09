import styles from './section.module.css';
import Link from 'next/link';
import Button from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/arrow.svg';

type Props = {
    title?: string;
    children: React.ReactNode;
    isInsidePage?: boolean;
    showMorePath?: string;
    pagination?: React.ReactNode;
    className?: string;
};

export const Section = ({
    title,
    children,
    showMorePath,
    isInsidePage,
    pagination,
    className,
}: Props) => {
    return (
        <section className={`${styles.wrapper} ${className ? className : ''}`}>
            {title && <h2>title</h2>}
            {children}
            {pagination && isInsidePage ? (
                pagination
            ) : showMorePath ? (
                <Link className={styles.linkShowMore} href={showMorePath}>
                    <Button variant={'text'} color={'light'}>
                        Смотреть все <ArrowIcon />
                    </Button>
                </Link>
            ) : null}
        </section>
    );
};
