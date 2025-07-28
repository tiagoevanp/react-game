import { NavigatorProvider } from '@evanbrother/providers';
import { ReactElement } from 'react';
import { Navigator } from './Navigator';

export type NavigatorProps = {
    columns: (ReactElement | null)[][];
};

const NavigatorHOC = ({ columns }: NavigatorProps) => {
    return (
        <NavigatorProvider columns={columns}>
            <Navigator columns={columns} />
        </NavigatorProvider>
    );
};

export { NavigatorHOC as Navigator };
