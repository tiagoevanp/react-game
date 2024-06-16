import { TypewriterProvider } from '@evanbrother/providers';

import { TypewriterText, type TypewriterTextProps } from './TypewriterText';

type TypewriterProps = TypewriterTextProps;

export const Typewriter = (props: TypewriterProps) => {
    return (
        <TypewriterProvider>
            <TypewriterText {...props} />
        </TypewriterProvider>
    );
};
