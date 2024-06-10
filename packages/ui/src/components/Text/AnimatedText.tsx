import { _Text, _TextProps } from './Text';
import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';

type AnimatedTextProps = _TextProps & {
    time?: UseTypewriterOptionProps['time'];
    humanize?: UseTypewriterOptionProps['humanize'];
};

export const AnimatedText = ({
    children,
    scale,
    time,
    markup,
    humanize,
}: AnimatedTextProps) => {
    const text = useTypewriterAnimation(children, { time, humanize });

    return (
        <_Text scale={scale} markup={markup}>
            {text}
        </_Text>
    );
};
