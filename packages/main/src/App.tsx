import { useSetting } from '@evanbrother/providers';
import { Application, Button, Typewriter } from '@evanbrother/ui';

const App = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <Application>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <Typewriter markup scale="h1">
                Você... [c danger][v 256][^]AAAAAAAAAAH![/^][/v][/c] corra o
                mais rápido que puder!
            </Typewriter>
        </Application>
    );
};

export default App;
