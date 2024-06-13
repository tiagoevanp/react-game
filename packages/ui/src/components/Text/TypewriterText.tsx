import { Text, TextProps } from './Text';
import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';

type AnimatedTextProps = TextProps & UseTypewriterOptionProps;

export const TypewriterText = ({
    children,
    scale,
    time,
    markup,
    humanize,
    onType,
}: AnimatedTextProps) => {
    const text = useTypewriterAnimation(children, { time, humanize, onType });

    return (
        <Text scale={scale} markup={markup}>
            {text}
        </Text>
    );
};
