import { useContext } from 'react';
import { NavigatorContext } from '../NavigatorProvider';

export const useNavigatorSelection = () => {
    return useContext(NavigatorContext);
};
