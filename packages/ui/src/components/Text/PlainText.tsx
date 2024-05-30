import { PropsWithChildren } from 'react';

import { _Text, _TextProps } from './Text';

type PlainTextProps = PropsWithChildren<_TextProps>;

export const PlainText = ({ children, scale }: PlainTextProps) => {
    return <_Text scale={scale}>{children}</_Text>;
};
