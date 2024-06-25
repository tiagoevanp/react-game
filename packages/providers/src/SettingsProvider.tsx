import { PropsWithChildren, createContext, useState } from 'react';

import { useSetting } from './hooks';

export type SettingsContextType = {
    settings: {
        theme: 'light' | 'dark';
        keyMap: {
            key: KeyboardEvent['key'];
            cb: () => void;
        }[];
    };
    setSettings: (value: SettingsContextType['settings']) => void;
};

const defaultSettingsValues = {
    settings: {
        theme: 'light' as const,
        keyMap: [
            { key: 'w', cb: () => {} },
            { key: 's', cb: () => {} },
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
