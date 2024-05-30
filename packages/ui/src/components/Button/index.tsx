import { PropsWithChildren } from 'react';
import './Button.css';

type ButtonProps = PropsWithChildren;

export const Button = ({ children }: ButtonProps) => {
    return <button type="button">{children}</button>;
};
