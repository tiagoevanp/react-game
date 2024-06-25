import { Application, Button, Navigator, Text } from '@evanbrother/ui';

import { ChangeThemeButton } from './ChangeThemeButton';

const App = () => {
    return (
        <Application>
            <ChangeThemeButton />
            <Text align="center" scale="h1">
                REACT GAME
            </Text>
            <Navigator>
                <Button onClick={() => console.log(1)}>Option 1</Button>
                <Button onClick={() => console.log(2)}>Option 2</Button>
                <Button onClick={() => console.log(3)}>Option 3</Button>
            </Navigator>
        </Application>
    );
};

export default App;
