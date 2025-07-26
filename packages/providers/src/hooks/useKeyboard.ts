import { ReactElement, useEffect } from 'react';
import { useSetting } from './useSetting';
import { uiControlReducerAction } from '../reducers/uiControlReducer';

export const useKeyboard = (columns: ReactElement[][], dispatch: React.Dispatch<uiControlReducerAction>) => {
    const [keyMap] = useSetting('keyMap');

    useEffect(() => {
        const callback = (e: KeyboardEvent) => {
            const action = keyMap.find(({ key }) => {
                return e.key === key;
            })?.action;

            if (!action) {
                return;
            }

            if (action) {
                e.preventDefault();
            }

            switch (action) {
                case 'up':
                    return dispatch({ type: 'GO_UP', columns });
                case 'down':
                    return dispatch({ type: 'GO_DOWN', columns });
                case 'left':
                    return dispatch({ type: 'GO_LEFT', columns });
                case 'right':
                    return dispatch({ type: 'GO_RIGHT', columns });
                case 'select':
                    return dispatch({ type: 'SELECT', columns });
            }
        };

        window.addEventListener('keydown', callback);

        return () => {
            window.removeEventListener('keydown', callback);
        };
    }, [keyMap]);
};
