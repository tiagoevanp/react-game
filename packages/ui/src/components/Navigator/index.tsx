import { css } from '@emotion/react';
import { ReactElement, cloneElement, useMemo } from 'react';
import { useKeyboard } from './hooks/useKeyboard';
import { useUiControl } from './hooks/useUiControl';

export type NavigatorProps = {
    columns: ReactElement[][];
};

const getBiggerColumnSize = (columns: NavigatorProps['columns']) => {
    return columns.reduce<number>((acc, cur) => (cur.length > acc ? cur.length : acc), 0);
};

export const Navigator = ({ columns }: NavigatorProps) => {
    const navigatorStyle = css`
        display: grid;
        grid-template-columns: repeat(${columns.length}, 1fr);
        gap: 20px;
    `;

    const biggerColumnSize = useMemo(() => getBiggerColumnSize(columns), [columns]);

    const columnStyle = css`
        display: grid;
        grid-template-rows: repeat(${biggerColumnSize}, 1fr);
        gap: 20px;
    `;

    const { actions, selected } = useUiControl(columns);

    useKeyboard(actions);

    return (
        <div css={navigatorStyle}>
            {columns.map((column, columnIdx) => (
                <div key={columnIdx} css={columnStyle}>
                    {column.map((Component, rowIdx) =>
                        cloneElement(Component, {
                            key: rowIdx,
                            selected: rowIdx === selected.row && columnIdx === selected.column,
                        })
                    )}
                </div>
            ))}
        </div>
    );
};
