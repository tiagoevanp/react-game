import { css, useTheme } from '@emotion/react';
import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
    selected?: Boolean;
}>;

export const Button = ({ children, onClick, disabled, selected }: ButtonProps) => {
    const theme = useTheme();

    const style = css`
        padding: 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        border-width: 4px;
        border-style: solid;
        cursor: pointer;
        width: 100%;
        height: 60px;
        color: ${selected ? 'red' : 'white'} !important

        &:disabled {
            cursor: auto;
            opacity: 0.5;
        }
    `;

    return (
        <button
            className="theme-smooth-transition"
            css={style}
            style={selected ? theme.application['button-selected'] : theme.application.button}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
