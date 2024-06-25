import type { UseTypewriterOptionProps } from './hooks/useTypewriterAnimation';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';
import { Text, TextProps } from './Text';

export type TypewriterTextProps = TextProps & UseTypewriterOptionProps;

export const TypewriterText = ({
    children,
    time,
    humanize,
    onType,
    ...props
}: TypewriterTextProps) => {
    const text = useTypewriterAnimation(children, { time, humanize, onType });

    return <Text {...props}>{text}</Text>;
};
