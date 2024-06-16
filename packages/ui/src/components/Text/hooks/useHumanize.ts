import { useMemo } from 'react';

import { UseTypewriterOptionProps } from './useTypewriterAnimation';

export const useHumanize = (
    time: Exclude<UseTypewriterOptionProps['time'], undefined>
) => {
    const max = useMemo(() => time + time * 0.7, [time]);
    const min = useMemo(() => time - time * 0.7, [time]);

    return Math.random() * (max - min) + min;
};
