import { css, useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';

export const Application = ({ children }: PropsWithChildren) => {
    const theme = useTheme();

    const style = css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    `;

    return (
        <div
            css={style}
            className="theme-smooth-transition"
            style={{ backgroundColor: theme.application.background }}
        >
            {children}
        </div>
    );
};
