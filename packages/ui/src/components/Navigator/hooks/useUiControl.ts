import { useState } from 'react';
import { NavigatorProps } from '..';

const getColumnSize = (columns: NavigatorProps['columns'], selectedColumnIdx: number) => {
    return (
        columns.find((_column, colIdx) => {
            return colIdx === selectedColumnIdx;
        })?.length || 0
    );
};

const getFirstColumnOfRow = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    return columns.findIndex((column) => column[selected.row] !== undefined);
};

const getLastColumnOfRow = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    return columns.findLastIndex((column) => column[selected.row] !== undefined);
};

const getNextColumn = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    if (columns[selected.column + 1] === undefined) {
        return getFirstColumnOfRow(columns, selected);
    }

    if (columns[selected.column + 1][selected.row] !== undefined) {
        return selected.column + 1;
    }

    return getFirstColumnOfRow(columns, selected);
};

const getPreviousColumn = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    if (columns[selected.column - 1] === undefined) {
        return getLastColumnOfRow(columns, selected);
    }

    if (columns[selected.column - 1][selected.row] !== undefined) {
        return selected.column - 1;
    }

    return getLastColumnOfRow(columns, selected);
};

export const useUiControl = (columns: NavigatorProps['columns']) => {
    const [selected, setSelected] = useState({
        row: 0,
        column: 0,
    });

    const actions = {
        goUp: () => {
            setSelected((selected) => {
                const previousIndex = selected.row - 1;
                const hasPrevious = previousIndex >= 0;
                return {
                    row: hasPrevious ? previousIndex : getColumnSize(columns, selected.column) - 1,
                    column: selected.column,
                };
            });
        },

        goDown: () => {
            setSelected((selected) => {
                const nextIndex = selected.row + 1;
                const hasNext = nextIndex <= getColumnSize(columns, selected.column) - 1;
                return {
                    row: hasNext ? nextIndex : 0,
                    column: selected.column,
                };
            });
        },

        goLeft: () => {
            setSelected((selected) => {
                return {
                    row: selected.row,
                    column: getPreviousColumn(columns, selected),
                };
            });
        },

        goRight: () => {
            setSelected((selected) => {
                return {
                    row: selected.row,
                    column: getNextColumn(columns, selected),
                };
            });
        },
    };

    return { actions, selected };
};
