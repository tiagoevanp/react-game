export { default as light } from './light';
export { default as dark } from './dark';

type Text = {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    p: string;
    error: string;
};

type Button = {
    borderColor: string;
    backgroundColor: string;
    color: string;
};

type ButtonSelected = {
    borderColor: string;
    backgroundColor: string;
    color: string;
};

export interface EvanBrotherTheme {
    name: 'light' | 'dark';
    application: {
        background: string;
        button: Button;
        'button-selected': ButtonSelected;
        text: Text;
    };
    globalVars: Record<`--${string}`, string>;
}
