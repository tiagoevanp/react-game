import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren;

export const Text = ({ children }: TextProps) => {
    return <p>{children}</p>;
};
