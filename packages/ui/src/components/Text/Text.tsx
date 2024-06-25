import { css, useTheme } from '@emotion/react';
import { parse } from '@evanbrother/parser';
import { CSSProperties } from 'react';

import { Markup } from './Markup';

export type TextProps = {
    scale?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    markup?: boolean;
    align?: CSSProperties['alignSelf'];
    children: string;
};

export const Text = ({ children, scale, markup, align }: TextProps) => {
    const theme = useTheme();

    const Component = scale ?? 'p';

    const style = css`
        align-self: ${align};
    `;

    return (
        <>
            <Component css={style} style={{ color: theme.application.text.h1 }}>
                {markup ? <Markup parsed={parse(children)} /> : children}
            </Component>
        </>
    );
};
