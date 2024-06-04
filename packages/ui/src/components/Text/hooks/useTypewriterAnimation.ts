import { useEffect, useMemo, useState } from 'react';

export type UseTypewriterOptionProps = {
    time?: 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256;
    onType?: (text?: string) => void;
};

export const useTypewriterAnimation = (
    originalText: string,
    { time = 32, onType }: UseTypewriterOptionProps
) => {
    const [text, setText] = useState('');
    const [cursor, setCursor] = useState(0);
    const [tags, setTags] = useState<string[]>([]);
    const max = useMemo(() => time + time * 0.5, [time]);
    const min = useMemo(() => time - time * 0.5, [time]);
    const springedTime = Math.random() * (max - min) + min;

    useEffect(() => {
        const id = setTimeout(() => {
            // Exit at the end of the text
            if (cursor >= originalText.length) {
                return;
            }

            // Check for markup tags
            if (originalText[cursor] === '[') {
                if (originalText[cursor + 1] !== '/') {
                    setTags([
                        ...tags,
                        originalText.substring(cursor, cursor + 3),
                    ]);
                } else {
                    setTags(tags.slice(0, -1));
                }
                setCursor(
                    cursor + originalText.substring(cursor).indexOf(']') + 1
                );
                return;
            }

            setText(
                text +
                    tags.join('') +
                    originalText.substring(cursor, cursor + 1) +
                    tags
                        .map((t) => t.slice(0, 1) + '/' + t.slice(1))
                        .slice()
                        .reverse()
                        .join('')
            );

            setCursor(cursor + 1);
        }, springedTime);

        if (text) {
            onType?.(text);
        }

        return () => clearTimeout(id);
    }, [cursor, onType, originalText, springedTime, tags, text]);

    return text;
};
