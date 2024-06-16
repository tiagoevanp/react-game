import { VelocityVariant } from '@evanbrother/parser';
import { PropsWithChildren, createContext, useState } from 'react';
import { StringToNumber } from '../../../definitions/stringToNumber';

export type TypewriterContextType = {
    time: StringToNumber<VelocityVariant>;
    setTime: (value: TypewriterContextType['time']) => void;
};

export const TypewriterContext = createContext<TypewriterContextType>({
    time: 32,
    setTime: () => null,
});

export const TypewriterProvider = ({ children }: PropsWithChildren) => {
    const [time, setTime] = useState<TypewriterContextType['time']>(32);

    return (
        <TypewriterContext.Provider value={{ time, setTime }}>
            {children}
        </TypewriterContext.Provider>
    );
};
