import { useSetting } from '@evanbrother/providers';
import { AnimatedText, Application, Button, PlainText } from '@evanbrother/ui';

const App = () => {
    const [theme, setTheme] = useSetting('theme');

    return (
        <Application>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <PlainText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur ullam omnis quibusdam est voluptate dicta officiis
                voluptatibus, neque, quis magni expedita cumque odit, nihil
                illum adipisci blanditiis inventore amet? Adipisci!
            </PlainText>
            <AnimatedText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur ullam omnis quibusdam est voluptate dicta officiis
                voluptatibus, neque, quis magni expedita cumque odit, nihil
                illum adipisci blanditiis inventore amet? Adipisci!
            </AnimatedText>
        </Application>
    );
};

export default App;
