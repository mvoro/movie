import styles from './recommendationBanner.module.css';
import Button from '@/shared/ui/button';

const RecommendationBanner = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <h2>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает
                </h2>
                <div className={styles.actions}>
                    <Button color={'primary'}>Подробнее</Button>
                    <Button color={'light'} variant={'outlined'}>
                        Перейти в категорию
                    </Button>
                </div>
            </div>
            {/*actions*/}
        </section>
    );
};
export default RecommendationBanner;
