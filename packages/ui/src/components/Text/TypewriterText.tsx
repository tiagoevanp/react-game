import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';
import { Text, TextProps } from './Text';

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
