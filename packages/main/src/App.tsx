import { useSetting } from '@evanbrother/providers';
import { AnimatedText, Application, Button } from '@evanbrother/ui';

const App = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <Application>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <AnimatedText markup scale="h1">
                Vai se [u][i]FODER[/i][/u] seu [s]safado[/s] lindo!
            </AnimatedText>
        </Application>
    );
};

export default App;
