import type { Content } from './parser';

const generateJSX = (parsedText: Content) => {
    return parsedText.map((el, key) => {
        return (
            <span
                className={`markup-${typeof el === 'string' ? 'plain-text' : el.name}`}
                key={key}
            >
                {typeof el === 'string' ? el : generateJSX(el.content)}
            </span>
        );
    });
};

export const markup = (parsedText: Content) => {
    return generateJSX(parsedText);
};
