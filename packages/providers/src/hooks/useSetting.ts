import { useCallback, useContext } from 'react';
import useLocalStorage from 'react-use-localstorage';

import { useJsonParsedValue } from './useJsonParsedValue';
import { SettingsContext, SettingsContextType } from '../SettingsProvider';

export const useSetting = <T extends keyof SettingsContextType['settings']>(
    settingName: T
): [SettingsContextType['settings'][T], (value: SettingsContextType['settings'][T]) => void] => {
    const [localSetting, setLocalSetting] = useLocalStorage(settingName);
    const setting = useJsonParsedValue(localSetting);
    const { settings: stateSettings, setSettings: setStateSettings } = useContext(SettingsContext);

    const setSetting = useCallback(
        (value: SettingsContextType['settings'][T]) => {
            const _settings = {
                ...stateSettings,
            };

            _settings[settingName] = value;

            const stringValue = typeof value !== 'string' ? JSON.stringify(value) : value;

            setLocalSetting(stringValue);
            setStateSettings(_settings);
        },
        [setLocalSetting, setStateSettings, settingName, stateSettings]
    );

    return [setting as SettingsContextType['settings'][T], setSetting];
};
