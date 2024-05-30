import { useCallback, useContext } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { SettingsContext, SettingsContextType } from '../SettingsProvider';

export const useSetting = <T extends keyof SettingsContextType['settings']>(
    settingName: T
): [
    SettingsContextType['settings'][T],
    (value: SettingsContextType['settings'][T]) => void,
] => {
    const [localSetting, setLocalSetting] = useLocalStorage(settingName);
    const { settings: stateSettings, setSettings: setStateSettings } =
        useContext(SettingsContext);

    const setSetting = useCallback(
        (value: SettingsContextType['settings'][T]) => {
            const _settings = {
                ...stateSettings,
            };

            _settings[settingName] = value;

            setLocalSetting(value);
            setStateSettings(_settings);
        },
        [setLocalSetting, setStateSettings, settingName, stateSettings]
    );

    return [localSetting as SettingsContextType['settings'][T], setSetting];
};
