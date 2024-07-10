import { css, useTheme } from '@emotion/react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    action: () => void;
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
    selected?: Boolean;
}>;

export const Button = ({ children, action, disabled, selected }: ButtonProps) => {
    const theme = useTheme();

    const buttonTheme = selected ? theme.application['button-selected'] : theme.application.button;

    const style = css`
        padding: 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        border-width: 4px;
        border-style: solid;
        cursor: pointer;
        width: 100%;
        height: 60px;

        &:disabled {
            cursor: auto;
            opacity: 0.5;
        }
    `;

    return (
        <button
            className="theme-smooth-transition"
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.application.button.backgroundColor;
                e.currentTarget.style.borderColor = theme.application.button.borderColor;
                e.currentTarget.style.color = theme.application.button.color;
            }}
            css={style}
            style={buttonTheme}
            type="button"
            disabled={disabled}
            onClick={action}
        >
            {children}
        </button>
    );
};
