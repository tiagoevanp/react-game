import { EvanBrotherTheme } from '.';

const success = '#00b806';
const warning = '#b89000';
const danger = '#b80000';
const black = '#2d2d2d';
const white = '#f2f2f2';

const theme: EvanBrotherTheme = {
    name: 'light',
    application: {
        background: white,
        text: {
            h1: black,
            h2: black,
            h3: black,
            h4: black,
            p: black,
            error: danger,
        },
        button: {
            borderColor: black,
            backgroundColor: white,
            color: black,
        },
    },
    globalVars: {
        '--success': success,
        '--warning': warning,
        '--danger': danger,
    },
};

export default theme;
