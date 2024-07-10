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

const getNextColumnIndex = (columns: NavigatorProps['columns'], selected: { row: number; column: number }): number => {
    const firstColumnIndexOfRow = getFirstColumnIndexOfRow(columns, selected);

    if (columns[selected.column + 1] === undefined) {
        return firstColumnIndexOfRow;
    }

    if (columns[selected.column + 1][selected.row] !== undefined) {
        if (columns[selected.column + 1][selected.row].props.disabled) {
            return getNextColumnIndex(columns, { row: selected.row, column: selected.column + 1 });
        }
        return selected.column + 1;
    }

    if (columns[selected.column + 1][selected.row] === undefined) {
        if (columns[firstColumnIndexOfRow][selected.row].props.disabled) {
            return getNextColumnIndex(columns, { row: selected.row, column: firstColumnIndexOfRow });
        }
    }

    return firstColumnIndexOfRow;
};

const getPreviousColumnIndex = (
    columns: NavigatorProps['columns'],
    selected: { row: number; column: number }
): number => {
    const lastColumnIndexOfRow = getLastColumnIndexOfRow(columns, selected);

    if (columns[selected.column - 1] === undefined) {
        return lastColumnIndexOfRow;
    }

    if (columns[selected.column - 1][selected.row] !== undefined) {
        if (columns[selected.column - 1][selected.row].props.disabled) {
            return getPreviousColumnIndex(columns, { row: selected.row, column: selected.column - 1 });
        }
        return selected.column - 1;
    }

    if (columns[selected.column - 1][selected.row] === undefined) {
        if (columns[lastColumnIndexOfRow][selected.row].props.disabled) {
            return getPreviousColumnIndex(columns, { row: selected.row, column: lastColumnIndexOfRow });
        }
    }

    return lastColumnIndexOfRow;
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
                const lastRowIndex = getColumnLength(columns, selected.column) - 1;

                if (hasPrevious && columns[selected.column][previousIndex].props.disabled) {
                    actions.goUp();
                }

                if (!hasPrevious && columns[selected.column][lastRowIndex].props.disabled) {
                    actions.goUp();
                }

                return {
                    row: hasPrevious ? previousIndex : lastRowIndex,
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

                if (hasNext && columns[selected.column][nextIndex].props.disabled) {
                    actions.goDown();
                }

                if (!hasNext && columns[selected.column][0].props.disabled) {
                    actions.goDown();
                }

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
