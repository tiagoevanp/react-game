import { useSetting } from '@evanbrother/providers';
import { Application, Button, TypewriterText } from '@evanbrother/ui';

const App = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <Application>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <TypewriterText markup scale="h1">
                Este é um [s][u]teste[/u][/s] [i]da[/i] animação [c
                danger][^]Shaking text[/^][/c]!
            </TypewriterText>
        </Application>
    );
};

export default App;
