import { _Text, _TextProps } from './Text';
import { useTypewriterAnimation } from './hooks/useTypewriterAnimation';

type AnimatedTextProps = _TextProps & { children: string };

export const AnimatedText = ({ children, scale }: AnimatedTextProps) => {
    const text = useTypewriterAnimation({ text: children });

    return <_Text scale={scale}>{text}</_Text>;
};
