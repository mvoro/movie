import styles from './recommendationBanner.module.css';
import Button from '@/shared/ui/button';

const RecommendationBanner = () => {
    return (
        <section className={styles.wrapper}>
            <h2>
                Давно выяснено, что при оценке дизайна и композиции читаемый
                текст мешает
            </h2>
            <footer>
                <div className={styles.actions}>
                    <Button color={'primary'}>Подробнее</Button>
                    <Button color={'dark'} variant={'outlined'}>
                        Перейти в категорию
                    </Button>
                </div>
                {/*actions*/}
            </footer>
        </section>
    );
};
export default RecommendationBanner;
