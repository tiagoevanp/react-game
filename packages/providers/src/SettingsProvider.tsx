import { PropsWithChildren, createContext, useState } from 'react';

import { useSetting } from './hooks';

export type SettingsContextType = {
    settings: {
        theme: 'light' | 'dark';
    };
    setSettings: (value: SettingsContextType['settings']) => void;
};

export const SettingsContext = createContext<SettingsContextType>({
    settings: {
        theme: 'light',
    },
    setSettings: () => null,
});

export const SettingsProvider = ({ children }: PropsWithChildren) => {
    const [theme] = useSetting('theme');

    const [settings, setSettings] = useState<SettingsContextType['settings']>({
        theme,
    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
