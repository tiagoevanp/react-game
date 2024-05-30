import { PropsWithChildren } from 'react';

import { _Text, _TextProps } from './Text';

type AnimatedTextProps = PropsWithChildren<_TextProps>;

export const AnimatedText = ({ children, scale }: AnimatedTextProps) => {
    return <_Text scale={scale}>{children}</_Text>;
};
