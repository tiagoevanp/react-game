import type { Content, VelocityVariant } from '@evanbrother/parser';
import { useTypewriter } from '@evanbrother/providers';
import { useEffect } from 'react';

import { StringToNumber } from '../../../../../../definitions/stringToNumber';
import { Markup } from '../Markup';

type VelocityProps = {
    content: Content;
    variant: VelocityVariant;
};

export const Velocity = ({ content, variant }: VelocityProps) => {
    const { setTime } = useTypewriter();

    useEffect(() => {
        setTime(Number(variant) as StringToNumber<VelocityVariant>);
    }, [setTime, variant]);

    return <Markup parsed={content} />;
};
