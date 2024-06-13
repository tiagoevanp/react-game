import { useCallback, useEffect, useRef, useState } from 'react';
import { useHumanize } from './useHumanize';

export type UseTypewriterOptionProps = {
    time?: 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256;
    onType?: (char: string) => void;
    humanize?: boolean;
};

export const useTypewriterAnimation = (
    originalText: string,
    { time, onType, humanize = true }: UseTypewriterOptionProps
) => {
    const text = useRef('');
    const tag = useRef('');
    const [cursor, setCursor] = useState(0);
    const humanizedTime = useHumanize(time);

    const findEndTag = useCallback(() => {
        if (!tag.current) {
            return -1;
        }

        const tagIndex = text.current.lastIndexOf(
            tag.current.slice(0, 1) +
                '/' +
                tag.current.slice(1, tag.current.indexOf(' ')) +
                ']'
        );

        return tagIndex;
    }, []);

    const updateText = useCallback(() => {
        const index = findEndTag();
        const character = originalText.substring(cursor, cursor + 1);

        if (index !== -1) {
            text.current =
                text.current.slice(0, index) +
                character +
                text.current.slice(index);
        } else {
            text.current = text.current + character;
        }

        onType?.(character);

        setCursor(cursor + 1);
    }, [cursor, findEndTag, onType, originalText]);

    const insertTag = useCallback(() => {
        if (originalText[cursor + 1] !== '/') {
            const index = findEndTag();

            tag.current = originalText.substring(
                cursor,
                cursor + originalText.substring(cursor).indexOf(']') + 1
            );

            const endTag =
                tag.current.slice(0, 1) +
                '/' +
                tag.current.slice(1, tag.current.indexOf(' ')) +
                ']';

            if (index !== -1) {
                text.current =
                    text.current.slice(0, index) +
                    tag.current +
                    endTag +
                    text.current.slice(index);
            } else {
                text.current = text.current + tag.current + endTag;
            }
        } else {
            tag.current = '';
        }

        setCursor(cursor + originalText.substring(cursor).indexOf(']') + 1);
    }, [cursor, findEndTag, originalText]);

    useEffect(() => {
        const id = setTimeout(
            () => {
                // Exit at the end of the text
                if (cursor >= originalText.length) {
                    return;
                }

                if (originalText[cursor] === '[') {
                    insertTag();
                    return;
                }

                updateText();
            },
            humanize ? humanizedTime : time
        );

        return () => clearTimeout(id);
    }, [
        cursor,
        humanize,
        humanizedTime,
        insertTag,
        onType,
        originalText,
        time,
        updateText,
    ]);

    return text.current;
};
