import { css, useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';

export const Application = ({ children }: PropsWithChildren) => {
    const theme = useTheme();

    const style = css`
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        overflow: scroll;
        width: 100vw;
        height: 100vh;
        padding: 100px;
    `;

    return (
        <div css={style} className="theme-smooth-transition" style={{ backgroundColor: theme.application.background }}>
            {children}
        </div>
    );
};
