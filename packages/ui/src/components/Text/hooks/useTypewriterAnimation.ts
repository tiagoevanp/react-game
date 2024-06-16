import { TypewriterContextType, useTypewriter } from '@evanbrother/providers';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useHumanize } from './useHumanize';

export type UseTypewriterOptionProps = {
    time?: TypewriterContextType['time'];
    onType?: (char: string) => void;
    humanize?: boolean;
};

export const useTypewriterAnimation = (
    originalText: string,
    { time = 32, onType, humanize = false }: UseTypewriterOptionProps
) => {
    const { time: typewriterTime, setTime } = useTypewriter();
    const text = useRef('');
    const tag = useRef('');
    const [cursor, setCursor] = useState(0);
    const humanizedTime = useHumanize(typewriterTime);

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
            if (originalText[cursor + 2] === 'v') {
                setTime(time);
            }

            tag.current = '';
        }

        setCursor(cursor + originalText.substring(cursor).indexOf(']') + 1);
    }, [cursor, findEndTag, originalText, setTime, time]);

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
            humanize ? humanizedTime : typewriterTime
        );

        return () => clearTimeout(id);
    }, [
        cursor,
        humanize,
        humanizedTime,
        insertTag,
        originalText,
        typewriterTime,
        updateText,
    ]);

    useEffect(() => {
        setTime(time);
    }, [setTime, time]);

    return text.current;
};
