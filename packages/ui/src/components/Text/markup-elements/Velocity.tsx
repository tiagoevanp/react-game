import type { Content, VelocityVariant } from '@evanbrother/parser';

import { Markup } from '../Markup';
import { useTypewriter } from '@evanbrother/providers';
import { StringToNumber } from '../../../../../../definitions/stringToNumber';
import { useEffect } from 'react';

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
