import { PropsWithChildren, createContext, useState } from 'react';

import { useSetting } from './hooks';

export type KeyMap = {
    key: KeyboardEvent['key'];
    action: 'up' | 'down' | 'left' | 'right' | 'select';
}[];

export type SettingsContextType = {
    settings: {
        theme: 'light' | 'dark';
        keyMap: KeyMap;
    };
    setSettings: (value: SettingsContextType['settings']) => void;
};

const defaultSettingsValues = {
    settings: {
        theme: 'light' as const,
        keyMap: [
            {
                key: 'w' as const,
                action: 'up' as const,
            },
            {
                key: 's' as const,
                action: 'down' as const,
            },
            {
                key: 'a' as const,
                action: 'left' as const,
            },
            {
                key: 'd' as const,
                action: 'right' as const,
            },
            {
                key: 'Enter',
                action: 'select' as const,
            },
        ],
    },
    setSettings: () => null,
};

export const SettingsContext = createContext<SettingsContextType>(defaultSettingsValues);

export const SettingsProvider = ({ children }: PropsWithChildren) => {
    const [theme] = useSetting('theme');
    const [keyMap] = useSetting('keyMap');

    const [settings, setSettings] = useState<SettingsContextType['settings']>({
        theme,
        keyMap,
    });

    return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>;
};
