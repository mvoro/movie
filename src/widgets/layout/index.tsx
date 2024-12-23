import styles from './layout.module.css';
import Sidebar from '@/widgets/sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>{children}</main>
        </section>
    );
};
export default Layout;
