import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren;

const style = css`
    color: red;
`;

export const Text = ({ children }: TextProps) => {
    return <p css={style}>{children}</p>;
};
