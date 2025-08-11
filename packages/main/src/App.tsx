import { Application, Button, Navigator, Text, Typewriter } from '@evanbrother/ui';

import { ChangeThemeButton } from './ChangeThemeButton';

const App = () => {
    return (
        <Application>
            <ChangeThemeButton />
            <Text align="center" scale="h1">
                REACT GAME
            </Text>
            <Typewriter humanize time={32} scale="h2">
                This is a simple game to test the UI components.
            </Typewriter>
            <Navigator
                columns={[
                    [
                        <Button action={() => console.log('1.1')}>1.1</Button>,
                        <Button disabled action={() => console.log('1.2')}>
                            1.2
                        </Button>,
                        <Button action={() => console.log('1.3')}>1.3</Button>,
                        <Button disabled action={() => console.log('1.4')}>
                            1.4
                        </Button>,
                    ],
                    [
                        <Button disabled action={() => console.log('2.1')}>
                            2.1
                        </Button>,
                        <Button action={() => console.log('2.2')}>2.2</Button>,
                    ],
                    [<Button action={() => console.log('3')}>3</Button>],
                    [
                        <Button disabled action={() => console.log('2.1')}>
                            2.1
                        </Button>,
                        <Button action={() => console.log('2.2')}>2.2</Button>,
                        <Button action={() => console.log('2.3')}>2.3</Button>,
                        <Button action={() => console.log('2.4')}>2.4</Button>,
                    ],
                ]}
            />
        </Application>
    );
};

export default App;
