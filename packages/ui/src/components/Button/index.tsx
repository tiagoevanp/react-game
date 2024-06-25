import { css, useTheme } from '@emotion/react';
import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export const Button = ({ children, onClick }: ButtonProps) => {
    const theme = useTheme();

    const style = css`
        padding: 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        border-width: 4px;
        border-style: solid;
        cursor: pointer;
    `;

    return (
        <button
            className="theme-smooth-transition"
            css={style}
            style={theme.application.button}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
