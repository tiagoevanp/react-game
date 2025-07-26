import { createContext, PropsWithChildren, ReactElement, useReducer } from 'react';
import { useKeyboard, useMouse } from './hooks';
import { uiControlReducer, uiControlReducerAction } from './reducers/uiControlReducer';

type NavigatorContextType = {
    row: number;
    column: number;
    dispatch: React.Dispatch<uiControlReducerAction>;
};

const defaultSettingsValues: NavigatorContextType = {
    row: -1,
    column: -1,
    dispatch: () => {},
};

export const NavigatorContext = createContext<NavigatorContextType>(defaultSettingsValues);

export const NavigatorProvider = ({ children, columns }: PropsWithChildren<{ columns: ReactElement[][] }>) => {
    const [state, dispatch] = useReducer(uiControlReducer, { row: -1, column: -1 });

    useKeyboard(columns, dispatch);
    useMouse(dispatch);

    return <NavigatorContext.Provider value={{ ...state, dispatch }}>{children}</NavigatorContext.Provider>;
};
