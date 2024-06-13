import { useSetting } from '@evanbrother/providers';
import { Application, Button, Text } from '@evanbrother/ui';

const App = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <Application>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <Text markup scale="h1">
                Este é um [s][u]teste[/u][/s] [i]da[/i] animação [c
                danger][~]snake snake snake[/~][/c]!
            </Text>
        </Application>
    );
};

export default App;
