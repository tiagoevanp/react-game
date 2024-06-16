import { css } from '@emotion/react';
import { Content } from '@evanbrother/parser';

import { Markup } from '../Markup';

export const Underline = ({ content }: { content: Content }) => {
    const style = css`
        text-decoration: underline;
    `;

    return (
        <span css={style}>
            <Markup parsed={content} />
        </span>
    );
};
