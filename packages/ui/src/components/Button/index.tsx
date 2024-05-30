import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};
