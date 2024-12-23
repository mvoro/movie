export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    variant?: 'outlined' | 'contained';
    color?: 'primary' | 'dark' | 'light';
}
