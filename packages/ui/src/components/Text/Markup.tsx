import type { Content } from '@evanbrother/parser';
import { Italic } from './markup-elements/Italic';
import { Strikethrough } from './markup-elements/Strikethrough';
import { Underline } from './markup-elements/Underline';
import { Colored } from './markup-elements/Colored';
import { Variant } from '@evanbrother/parser/src/parser';
import { Snake } from './markup-elements/Snake';
import { Shake } from './markup-elements/Shake';

export const Markup = ({ parsed }: { parsed: Content }) => {
    return parsed.map((el, idx) => {
        if (typeof el === 'string') {
            return el;
        }

        // Forcing '~' to be the last tag before a string content
        if (
            el.tag.name === '~' &&
            el.content[0] &&
            typeof el.content[0] !== 'string'
        ) {
            console.log(el.content[0]);
            throw new Error(
                `[${el.tag.name}] inside content cannot be different from a string`
            );
        }

        return {
            i: <Italic key={idx} content={el.content} />,
            s: <Strikethrough key={idx} content={el.content} />,
            u: <Underline key={idx} content={el.content} />,
            c: (
                <Colored
                    key={idx}
                    content={el.content}
                    // Force typing because there is no chance of a 'c'
                    // tag has zero variants on it by grammar.pegjs definition
                    variant={el.tag.variant as Variant}
                />
            ),
            // Forcing '~' to be the last tag before a string content
            '~': <Snake key={idx} text={(el.content[0] as string) || ''} />,
            '^': <Shake key={idx} text={(el.content[0] as string) || ''} />,
        }[el.tag.name];
    });
};
