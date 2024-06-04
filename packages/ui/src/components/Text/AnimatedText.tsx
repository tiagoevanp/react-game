import { _Text, _TextProps } from './Text';
import {
    UseTypewriterOptionProps,
    useTypewriterAnimation,
} from './hooks/useTypewriterAnimation';

type AnimatedTextProps = _TextProps & {
    time?: UseTypewriterOptionProps['time'];
};

export const AnimatedText = ({
    children,
    scale,
    time,
    markup,
}: AnimatedTextProps) => {
    const text = useTypewriterAnimation(children, { time });

    return (
        <_Text scale={scale} markup={markup}>
            {text}
        </_Text>
    );
};
