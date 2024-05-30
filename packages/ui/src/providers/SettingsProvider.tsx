import { PropsWithChildren, createContext, useEffect, useState } from 'react';

type SettingsContextType = {
    theme: 'light' | 'dark';
};

export const SettingsContext = createContext<SettingsContextType>({
    theme: 'light',
});

export const SettingsProvider = ({ children }: PropsWithChildren) => {
    const [settings, setSettings] = useState<SettingsContextType>({
        theme: 'light',
    });

    useEffect(() => {
        setSettings({ theme: 'dark' });
    }, []);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};
