import { useContext } from 'react';

import { NavigationContext } from '../NavigationProvider';

export const useNavigation = () => {
    const context = useContext(NavigationContext);

    return context;
};
