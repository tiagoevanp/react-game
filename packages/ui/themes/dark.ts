import { EvanBrotherTheme } from '.';

const danger = '#ff5c5c';

const theme: EvanBrotherTheme = {
    name: 'dark',
    application: {
        background: '#2d2d2d',
    },
    text: {
        h1: 'white',
        h2: 'white',
        h3: 'white',
        h4: 'white',
        p: 'white',
        error: danger,
    },
    globalVars: {
        '--danger': danger,
    },
};

export default theme;
