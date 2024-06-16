import { Text, TextProps } from './Text';
import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';

export type TypewriterTextProps = TextProps & UseTypewriterOptionProps;

export const TypewriterText = ({
    children,
    scale,
    time,
    markup,
    humanize,
    onType,
}: TypewriterTextProps) => {
    const text = useTypewriterAnimation(children, { time, humanize, onType });

    return (
        <Text scale={scale} markup={markup}>
            {text}
        </Text>
    );
};
