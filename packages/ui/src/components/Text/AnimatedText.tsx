import { _Text, _TextProps } from './Text';
import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';

type AnimatedTextProps = _TextProps & UseTypewriterOptionProps;

export const AnimatedText = ({
    children,
    scale,
    time,
    markup,
    humanize,
    onType,
}: AnimatedTextProps) => {
    const text = useTypewriterAnimation(children, { time, humanize, onType });

    return (
        <_Text scale={scale} markup={markup}>
            {text}
        </_Text>
    );
};
