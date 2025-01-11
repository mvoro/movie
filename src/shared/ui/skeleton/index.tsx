import styles from './skeleton.module.css';

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export const Skeleton = (props: Props) => {
    return (
        <div {...props} className={`${styles.skeleton} ${props.className}`} />
    );
};
