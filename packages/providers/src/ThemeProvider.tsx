import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { PropsWithChildren, useContext, useMemo } from 'react';

import { SettingsContext } from './SettingsProvider';
import { light, dark } from '@evanbrother/ui/themes';

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

    return (
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
};
