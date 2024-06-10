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
                Este é um teste simples de [danger]markdown[/danger] +
                animações!
            </AnimatedText>
        </Application>
    );
};

export default App;
