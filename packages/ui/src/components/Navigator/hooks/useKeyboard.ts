import { useSetting } from '@evanbrother/providers';
import { useEffect } from 'react';
import { useUiControl } from './useUiControl';

export const useKeyboard = ({ goUp, goDown, goLeft, goRight, select }: ReturnType<typeof useUiControl>['actions']) => {
    const [keyMap] = useSetting('keyMap');

    useEffect(() => {
        const callback = (e: KeyboardEvent) => {
            const action = keyMap.find(({ key }) => {
                return e.key === key;
            })?.action;

            if (action) {
                e.preventDefault();
            }

            switch (action) {
                case 'up':
                    return goUp();
                case 'down':
                    return goDown();
                case 'left':
                    return goLeft();
                case 'right':
                    return goRight();
                case 'select':
                    return select();
            }
        };

        window.addEventListener('keydown', callback);

        return () => {
            window.removeEventListener('keydown', callback);
        };
    }, [keyMap]);
};
