import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren;

export const Button = ({ children }: ButtonProps) => {
    return <button type="button">{children}</button>;
};
