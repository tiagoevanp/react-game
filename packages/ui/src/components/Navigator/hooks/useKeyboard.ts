import { useSetting } from '@evanbrother/providers';
import { useEffect } from 'react';

export const useKeyboard = () => {
    const [keyMap] = useSetting('keyMap');

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            keyMap.forEach(({ key, cb }) => {
                if (e.key === key) {
                    cb();
                }
            });
        };

        window.addEventListener('keydown', keyDown);

        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    }, [keyMap]);
};
