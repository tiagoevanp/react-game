import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
    PropsWithChildren,
    useContext,
    useLayoutEffect,
    useState,
} from 'react';

import { SettingsContext } from './SettingsProvider';
import { light, dark } from '@evanbrother/ui/themes';
import type { EvanBrotherTheme } from '@evanbrother/ui/themes';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const {
        settings: { theme: settingTheme },
    } = useContext(SettingsContext);
    const [theme, setTheme] = useState<EvanBrotherTheme>(light);

    useLayoutEffect(() => {
        switch (settingTheme) {
            case 'dark':
                setTheme(dark);
                break;
            case 'light':
            default:
                setTheme(light);
        }
    }, [settingTheme]);

    return (
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
};
