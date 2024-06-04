import { useTheme } from '@emotion/react';
import { markup as markupFn, parse } from '@evanbrother/parser';

export type _TextProps = {
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    markup?: boolean;
    children: string;
};

export const _Text = ({ children, scale, markup }: _TextProps) => {
    const theme = useTheme();

    const Component = scale ?? 'p';

    return (
        <>
            <Component
                className="theme-smooth-transition"
                style={{ color: theme.text.h1 }}
            >
                {markup ? markupFn(parse(children)) : children}
            </Component>
        </>
    );
};
