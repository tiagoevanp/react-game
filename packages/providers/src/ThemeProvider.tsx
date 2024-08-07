import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { light, dark } from '@evanbrother/ui/themes';
import { PropsWithChildren, useContext, useMemo } from 'react';

import { SettingsContext } from './SettingsProvider';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const {
        settings: { theme: settingTheme },
    } = useContext(SettingsContext);

    const theme = useMemo(
        () =>
            ({
                dark,
                light,
            })[settingTheme],
        [settingTheme]
    );

    Object.keys(theme.globalVars).forEach((value) => {
        document.documentElement.style.setProperty(value, theme.globalVars[value as `--${string}`]);
    });

    return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
