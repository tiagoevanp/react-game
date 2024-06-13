import { css } from '@emotion/react';
import { Content } from '@evanbrother/parser';
import { Markup } from '../Markup';

export const Strikethrough = ({ content }: { content: Content }) => {
    const style = css`
        text-decoration: line-through;
    `;

    return (
        <span css={style}>
            <Markup parsed={content} />
        </span>
    );
};
