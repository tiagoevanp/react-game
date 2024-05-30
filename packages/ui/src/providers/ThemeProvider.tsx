import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
    PropsWithChildren,
    useContext,
    useLayoutEffect,
    useState,
} from 'react';

import { SettingsContext } from './SettingsProvider';
import { light, dark } from '../themes';
import type { EvanBrotherTheme } from '../themes';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const { theme: settingTheme } = useContext(SettingsContext);
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
