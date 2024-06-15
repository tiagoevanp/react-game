import { css } from '@emotion/react';

const calculatePosition = (idx: number) => {
    const correctionFactor = 2;
    const direction = Math.round(Math.random()) ? 1 : -1;
    const radius = 3;

    return {
        x: [
            Math.cos(idx * correctionFactor + (120 * Math.PI) / 180) *
                direction *
                radius,
            Math.cos(idx * correctionFactor + (240 * Math.PI) / 180) *
                direction *
                radius,
            Math.cos(idx * correctionFactor + (0 * Math.PI) / 180) *
                direction *
                radius,
        ],
        y: [
            Math.sin(idx * correctionFactor + (120 * Math.PI) / 180) *
                direction *
                radius,
            Math.sin(idx * correctionFactor + (240 * Math.PI) / 180) *
                direction *
                radius,
            Math.sin(idx * correctionFactor + (0 * Math.PI) / 180) *
                direction *
                radius,
        ],
    };
};

export const Shake = ({ text }: { text: string }) => {
    return text.split('').map((char, idx) => {
        const { x, y } = calculatePosition(idx);

        const style = css`
            animation: 200ms infinite shake-animation-${idx};
            display: inline-block;

            @keyframes shake-animation-${idx} {
                25% {
                    transform: translate(${x[0]}px, ${y[0]}px);
                }

                50% {
                    transform: translate(${x[1]}px, ${y[1]}px);
                }

                75% {
                    transform: translate(${x[2]}px, ${y[2]}px);
                }

                100% {
                    transform: translate(0, 0);
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
