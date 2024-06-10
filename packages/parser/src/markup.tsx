import type { Content } from './parser';

type TagName = 'i' | 'u' | 's' | 'danger';

const getElStyle = (tag: TagName) => {
    return {
        i: { fontStyle: 'italic' },
        u: { textDecoration: 'underline' },
        s: { textDecoration: 'line-through' },
        danger: { color: 'var(--danger)' },
    }[tag];
};

export const markup = (parsedText: Content): JSX.Element[] => {
    return parsedText.map((el, key) => {
        return typeof el === 'string' ? (
            <span key={key}>{el}</span>
        ) : (
            <span style={getElStyle(el.name)} key={key}>
                {markup(el.content)}
            </span>
        );
    });
};
