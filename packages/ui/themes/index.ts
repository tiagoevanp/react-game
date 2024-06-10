export { default as light } from './light';
export { default as dark } from './dark';

export interface EvanBrotherTheme {
    name: 'light' | 'dark';
    application: {
        background: string;
    };
    text: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        p: string;
        error: string;
    };
    globalVars: Record<`--${string}`, string>;
}
