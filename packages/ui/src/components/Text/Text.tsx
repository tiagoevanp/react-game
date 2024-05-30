import { useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';

export type _TextProps = PropsWithChildren<{
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}>;

export const _Text = ({ children, scale }: _TextProps) => {
    const theme = useTheme();

    switch (scale) {
        case 'h1':
            return <h1 style={{ color: theme.text.h1 }}>{children}</h1>;
        case 'h2':
            return <h2 style={{ color: theme.text.h2 }}>{children}</h2>;
        case 'h3':
            return <h3 style={{ color: theme.text.h3 }}>{children}</h3>;
        case 'h4':
            return <h4 style={{ color: theme.text.h4 }}>{children}</h4>;
        case 'p':
        default:
            return <p style={{ color: theme.text.p }}>{children}</p>;
    }
};
