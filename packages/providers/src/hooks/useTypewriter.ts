import { useContext } from 'react';
import { TypewriterContext } from '../TypewriterProvider';

export const useTypewriter = () => {
    const context = useContext(TypewriterContext);

    return context;
};
