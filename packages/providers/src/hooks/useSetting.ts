import { useCallback, useContext } from 'react';
import useLocalStorage from 'react-use-localstorage';

import { useJsonParsedValue } from '.';
import { SettingsContext, SettingsContextType } from '../SettingsProvider';

export const useSetting = <T extends keyof SettingsContextType['settings']>(
    settingName: T
): [SettingsContextType['settings'][T], (value: SettingsContextType['settings'][T]) => void] => {
    const [localStorageSetting, setLocalStorageSetting] = useLocalStorage(settingName);
    const setting = useJsonParsedValue(localStorageSetting);
    const { settings, setSettings } = useContext(SettingsContext);

    const setSetting = useCallback(
        (value: SettingsContextType['settings'][T]) => {
            const _settings = {
                ...settings,
            };

            _settings[settingName] = value;

            const stringValue = typeof value !== 'string' ? JSON.stringify(value) : value;

            setLocalStorageSetting(stringValue);
            setSettings(_settings);
        },
        [setLocalStorageSetting, setSettings, settingName, settings]
    );

    return [(setting as SettingsContextType['settings'][T]) || settings[settingName], setSetting];
};
