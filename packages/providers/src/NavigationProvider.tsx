import { PropsWithChildren, createContext, useState } from 'react';

type NavigationContextType = {
    selected: number;
    setSelected: (value: NavigationContextType['selected']) => void;
};

export const NavigationContext = createContext<NavigationContextType>({
    selected: 0,
    setSelected: () => {},
});

export const NavigationProvider = ({ children }: PropsWithChildren) => {
    const [selected, setSelected] = useState(0);

    return (
        <NavigationContext.Provider value={{ selected, setSelected }}>
            {children}
        </NavigationContext.Provider>
    );
};
