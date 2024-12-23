import styles from './container.module.css';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <section className={`${styles.container} ${className}`}>
            {children}
        </section>
    );
};
export default Container;
