import { css, useTheme } from '@emotion/react';

export const FallbackError = ({ error }: { error: string }) => {
    const theme = useTheme();

    const style = css`
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        padding: 100px;
    `;

    return (
        <div css={style} style={{ backgroundColor: theme.application.background }}>
            <h1 style={{ color: theme.application.text.error }}>ERROR!</h1>
            <p style={{ color: theme.application.text.p }}>Something went wrong...</p>
            <p style={{ color: theme.application.text.p }}>{error}</p>
        </div>
    );
};
