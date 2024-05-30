import { useEffect, useMemo, useState } from 'react';

type OptionProps = {
    text: string;
    time?: 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256;
    onType?: (text?: string) => void;
};

export const useTypewriterAnimation = ({
    text: originalText,
    time = 32,
    onType,
}: OptionProps) => {
    const [text, setText] = useState('');
    const [length, setLength] = useState(0);
    const max = useMemo(() => time + time * 0.5, [time]);
    const min = useMemo(() => time - time * 0.5, [time]);
    const springedTime = Math.random() * (max - min) + min;

    useEffect(() => {
        const id = setTimeout(() => {
            if (text.length >= originalText.length) {
                return;
            }

            setText(originalText.substring(0, length));
            setLength(length + 1);
        }, springedTime);

        if (text) {
            onType?.(text);
        }

        return () => clearTimeout(id);
    }, [length, onType, originalText, springedTime, text, text.length]);

    return text;
};
