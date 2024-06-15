import { css } from '@emotion/react';

export const Snake = ({ text }: { text: string }) => {
    return text.split('').map((char, idx) => {
        const style = css`
            animation: 1s infinite snake-animation calc(1ms * ${idx});
            display: inline-block;

            @keyframes snake-animation {
                25% {
                    animation-timing-function: ease-in;
                    transform: translateY(-10px);
                }

                50% {
                    animation-timing-function: linear;
                    transform: translateY(0);
                }

                75% {
                    animation-timing-function: ease-in;
                    transform: translateY(10px);
                }

                100% {
                    animation-timing-function: linear;
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
