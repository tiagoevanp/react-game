import { useTheme } from '@emotion/react';
import { useParser } from '@evanbrother/parser';

export type _TextProps = {
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    children: string;
};

export const _Text = ({ children, scale }: _TextProps) => {
    const theme = useTheme();
    const parsedText = useParser(children);

    const Component = scale ?? 'p';

    return (
        <Component
            className="theme-smooth-transition"
            style={{ color: theme.text.h1 }}
        >
            {parsedText}
        </Component>
    );
};
