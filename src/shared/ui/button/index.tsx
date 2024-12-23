import { ButtonProps } from './types';
import styles from './button.module.css';

const Button = (props: ButtonProps) => {
    const {
        children,
        variant = 'contained',
        color = 'primary',
        ...rest
    } = props;
    const className = `${styles.button} ${styles[variant]} ${styles[color]} ${rest.className}`;
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};
export default Button;
