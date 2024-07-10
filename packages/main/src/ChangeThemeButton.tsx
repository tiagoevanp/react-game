import { useSetting } from '@evanbrother/providers';
import { Button } from '@evanbrother/ui';

export const ChangeThemeButton = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button action={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Th</Button>
        </div>
    );
};
