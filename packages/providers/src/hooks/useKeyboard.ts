import { ReactElement, useEffect } from 'react';
import { useSetting } from './useSetting';
import { uiControlReducerAction } from '../reducers/uiControlReducer';

const normalizeColumns = (columns: (ReactElement | null)[][]) => {
    return columns.map((column) => {
        for (let i = 0; i < columns.length; i++) {
            if (column[i] === undefined) {
                column[i] = null;
            }
        }

        return column;
    });
};

export const useKeyboard = (columns: (ReactElement | null)[][], dispatch: React.Dispatch<uiControlReducerAction>) => {
    const [keyMap] = useSetting('keyMap');
    const normalizedColumns = normalizeColumns(columns);

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
                    return dispatch({ type: 'GO_UP', columns: normalizedColumns });
                case 'down':
                    return dispatch({ type: 'GO_DOWN', columns: normalizedColumns });
                case 'left':
                    return dispatch({ type: 'GO_LEFT', columns: normalizedColumns });
                case 'right':
                    return dispatch({ type: 'GO_RIGHT', columns: normalizedColumns });
                case 'select':
                    return dispatch({ type: 'SELECT', columns: normalizedColumns });
            }
        };

        window.addEventListener('keydown', callback);

        return () => {
            window.removeEventListener('keydown', callback);
        };
    }, [keyMap]);
};
