import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { uiControlReducerAction } from '../reducers/uiControlReducer';

export const useMouse = (dispatch: React.Dispatch<uiControlReducerAction>) => {
    const theme = useTheme();

    useEffect(() => {
        const onMouseOver = (e: MouseEvent) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            }

            if (e.target.disabled) {
                return;
            }

            e.target.style.backgroundColor = theme.application['button-selected'].backgroundColor;
            e.target.style.borderColor = theme.application['button-selected'].borderColor;
            e.target.style.color = theme.application['button-selected'].color;

            dispatch({ type: 'CLEAR' });
        };

        const onMouseOut = (e: MouseEvent) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            }

            if (e.target.disabled) {
                return;
            }

            e.target.style.backgroundColor = theme.application.button.backgroundColor;
            e.target.style.borderColor = theme.application.button.borderColor;
            e.target.style.color = theme.application.button.color;
        };

        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mouseout', onMouseOut);

        return () => {
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseout', onMouseOut);
        };
    }, [theme]);
};
