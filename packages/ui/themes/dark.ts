import { EvanBrotherTheme } from '.';

const success = '#5cff69';
const warning = '#fff75c';
const danger = '#ff5c5c';
const black = '#2d2d2d';
const white = '#f2f2f2';

const theme: EvanBrotherTheme = {
    name: 'dark',
    application: {
        background: black,
        text: {
            h1: white,
            h2: white,
            h3: white,
            h4: white,
            p: white,
            error: danger,
        },
        button: {
            borderColor: white,
            backgroundColor: black,
            color: white,
        },
    },
    globalVars: {
        '--success': success,
        '--warning': warning,
        '--danger': danger,
    },
};

export default theme;
