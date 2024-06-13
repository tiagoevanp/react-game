import { useTheme } from '@emotion/react';
import { parse } from '@evanbrother/parser';

import { Markup } from './Markup';

export type TextProps = {
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    markup?: boolean;
    children: string;
};

export const Text = ({ children, scale, markup }: TextProps) => {
    const theme = useTheme();

    const Component = scale ?? 'p';

    return (
        <>
            <Component style={{ color: theme.text.h1 }}>
                {markup ? <Markup parsed={parse(children)} /> : children}
            </Component>
        </>
    );
};
