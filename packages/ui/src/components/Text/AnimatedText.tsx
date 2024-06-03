import { _Text, _TextProps } from './Text';
import {
    UseTypewriterOptionProps,
    useTypewriterAnimation,
} from './hooks/useTypewriterAnimation';

type AnimatedTextProps = _TextProps & {
    children: string;
    time?: UseTypewriterOptionProps['time'];
};

export const AnimatedText = ({
    children,
    scale,
    time,
    markup,
}: AnimatedTextProps) => {
    const text = useTypewriterAnimation({ text: children, time });

    return (
        <_Text scale={scale} markup={markup}>
            {text}
        </_Text>
    );
};
