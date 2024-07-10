import { useState } from 'react';
import { NavigatorProps } from '..';

const getColumnLength = (columns: NavigatorProps['columns'], selectedColumnIdx: number) => {
    return (
        columns.find((_column, colIdx) => {
            return colIdx === selectedColumnIdx;
        })?.length || 0
    );
};

const getFirstColumnIndexOfRow = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    return columns.findIndex((column) => column[selected.row] !== undefined);
};

const getLastColumnIndexOfRow = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    return columns.findLastIndex((column) => column[selected.row] !== undefined);
};

const getNextColumnIndex = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    if (columns[selected.column + 1] === undefined) {
        return getFirstColumnIndexOfRow(columns, selected);
    }

    if (columns[selected.column + 1][selected.row] !== undefined) {
        return selected.column + 1;
    }

    return getFirstColumnIndexOfRow(columns, selected);
};

const getPreviousColumnIndex = (columns: NavigatorProps['columns'], selected: { row: number; column: number }) => {
    if (columns[selected.column - 1] === undefined) {
        return getLastColumnIndexOfRow(columns, selected);
    }

    if (columns[selected.column - 1][selected.row] !== undefined) {
        return selected.column - 1;
    }

    return getLastColumnIndexOfRow(columns, selected);
};

export const useUiControl = (columns: NavigatorProps['columns']) => {
    const [selected, setSelected] = useState({
        row: 0,
        column: 0,
    });

    const actions = {
        goUp: () => {
            setSelected((selected) => {
                if (selected.column === -1 && selected.row === -1) {
                    return { row: 0, column: 0 };
                }

                const previousIndex = selected.row - 1;
                const hasPrevious = previousIndex >= 0;
                return {
                    row: hasPrevious ? previousIndex : getColumnLength(columns, selected.column) - 1,
                    column: selected.column,
                };
            });
        },

        goDown: () => {
            setSelected((selected) => {
                if (selected.column === -1 && selected.row === -1) {
                    return { row: 0, column: 0 };
                }

                const nextIndex = selected.row + 1;
                const hasNext = nextIndex <= getColumnLength(columns, selected.column) - 1;
                return {
                    row: hasNext ? nextIndex : 0,
                    column: selected.column,
                };
            });
        },

        goLeft: () => {
            setSelected((selected) => {
                if (selected.column === -1 && selected.row === -1) {
                    return { row: 0, column: 0 };
                }

                return {
                    row: selected.row,
                    column: getPreviousColumnIndex(columns, selected),
                };
            });
        },

        goRight: () => {
            setSelected((selected) => {
                if (selected.column === -1 && selected.row === -1) {
                    return { row: 0, column: 0 };
                }

                return {
                    row: selected.row,
                    column: getNextColumnIndex(columns, selected),
                };
            });
        },

        select: () => {
            setSelected((selected) => {
                if (selected.column === -1 && selected.row === -1) {
                    return { row: 0, column: 0 };
                }

                columns[selected.column][selected.row].props.action();
                return selected;
            });
        },

        clear: () => {
            setSelected({ row: -1, column: -1 });
        },
    };

    return { actions, selected };
};
