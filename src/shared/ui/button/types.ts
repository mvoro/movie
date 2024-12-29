export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    variant?: 'outlined' | 'contained' | 'text';
    color?: 'primary' | 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
}
