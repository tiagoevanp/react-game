import { css, useTheme } from '@emotion/react';

export const FallbackError = ({ error }: { error: string }) => {
    const theme = useTheme();

    const style = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    `;

    return (
        <div
            css={style}
            style={{ backgroundColor: theme.application.background }}
        >
            <h1 style={{ color: theme.text.error }}>ERROR!</h1>
            <p style={{ color: theme.text.p }}>Something went wrong...</p>
            <pre style={{ color: theme.text.error }}>{error}</pre>
        </div>
    );
};
