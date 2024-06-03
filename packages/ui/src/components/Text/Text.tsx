import { Global, css, useTheme } from '@emotion/react';
import { parse, markup as markupFn } from '@evanbrother/parser';

export type _TextProps = {
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    children: string;
    markup?: boolean;
};

export const _Text = ({ children, scale, markup }: _TextProps) => {
    const theme = useTheme();

    const Component = scale ?? 'p';

    const styles = css`
        .markup-i {
            font-style: italic;
        }

        .markup-u {
            text-decoration: underline;
        }

        .markup-s {
            text-decoration: line-through;
        }
    `;

    return (
        <>
            <Global styles={styles} />
            <Component
                className="theme-smooth-transition"
                style={{ color: theme.text.h1 }}
            >
                {markup ? markupFn(parse(children)) : children}
            </Component>
        </>
    );
};
