import { css } from '@emotion/react';

export const Snake = ({ text }: { text: string }) => {
    return text.split('').map((char, idx) => {
        const style = css`
            animation: 1s infinite snake-animation calc(0.1s * ${idx})
                ease-in-out;
            display: inline-block;

            @keyframes snake-animation {
                50% {
                    transform: translateY(-5px);
                }

                100% {
                    transform: translateY(0);
                }
            }
        `;

        return char === ' ' ? (
            <span key={idx}> </span>
        ) : (
            <span key={idx} css={style}>
                {char}
            </span>
        );
    });
};
