import { css } from '@emotion/react';
import { cloneElement, useMemo } from 'react';
import { NavigatorProps } from '.';
import { useNavigatorSelection } from '@evanbrother/providers';

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

    const { row: selectedRow, column: selectedColumn } = useNavigatorSelection();

    return (
        <div css={navigatorStyle}>
            {columns.map((column, columnIdx) => (
                <div key={columnIdx} css={columnStyle}>
                    {column.map((Component, rowIdx) =>
                        cloneElement(Component, {
                            key: rowIdx,
                            selected: rowIdx === selectedRow && columnIdx === selectedColumn,
                        })
                    )}
                </div>
            ))}
        </div>
    );
};
