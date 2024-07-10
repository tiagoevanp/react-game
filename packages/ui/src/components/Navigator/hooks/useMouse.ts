import { useTheme } from '@emotion/react';
import { useEffect } from 'react';

export const useMouse = (clear: () => void) => {
    const theme = useTheme();

    useEffect(() => {
        const callback = (e: MouseEvent) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            }

            e.target.style.backgroundColor = theme.application['button-selected'].backgroundColor;
            e.target.style.borderColor = theme.application['button-selected'].borderColor;
            e.target.style.color = theme.application['button-selected'].color;

            clear();
        };

        window.addEventListener('mouseover', callback);

        return () => {
            window.removeEventListener('mouseover', callback);
        };
    }, []);
};
