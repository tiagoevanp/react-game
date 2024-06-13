import { css } from '@emotion/react';
import type { Content, Variant } from '@evanbrother/parser';

import { Markup } from '../Markup';

type ColoredProps = {
    content: Content;
    variant: Variant;
};

export const Colored = ({ content, variant }: ColoredProps) => {
    const style = css`
        color: var(--${variant});
    `;

    return (
        <span css={style}>
            <Markup parsed={content} />
        </span>
    );
};
