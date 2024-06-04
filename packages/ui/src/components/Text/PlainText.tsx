import { _Text, _TextProps } from './Text';

type PlainTextProps = _TextProps;

export const PlainText = ({ children, scale, markup }: PlainTextProps) => {
    return (
        <_Text scale={scale} markup={markup}>
            {children}
        </_Text>
    );
};
