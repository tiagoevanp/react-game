import { NavigationProvider } from '@evanbrother/providers';
import { ReactNode } from 'react';

import { useKeyboard } from './hooks/useKeyboard';

type NavigatorProps = {
    children: ReactNode[];
};

export const Navigator = ({ children }: NavigatorProps) => {
    useKeyboard();

    return <NavigationProvider>{children}</NavigationProvider>;
};
