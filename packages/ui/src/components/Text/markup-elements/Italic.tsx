import { css } from '@emotion/react';
import { Content } from '@evanbrother/parser';

import { Markup } from '../Markup';

export const Italic = ({ content }: { content: Content }) => {
    const style = css`
        font-style: italic;
    `;

    return (
        <span css={style}>
            <Markup parsed={content} />
        </span>
    );
};
