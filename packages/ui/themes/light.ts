import { EvanBrotherTheme } from '.';

const success = '#00b806';
const warning = '#b89000';
const danger = '#b80000';

const theme: EvanBrotherTheme = {
    name: 'light',
    application: {
        background: 'white',
    },
    text: {
        h1: '#2d2d2d',
        h2: '#2d2d2d',
        h3: '#2d2d2d',
        h4: '#2d2d2d',
        p: '#2d2d2d',
        error: danger,
    },
    globalVars: {
        '--success': success,
        '--warning': warning,
        '--danger': danger,
    },
};

export default theme;
