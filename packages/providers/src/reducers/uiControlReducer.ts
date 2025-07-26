import { NavigatorProps } from '@evanbrother/ui';

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

const goUp = (column: number, row: number, columns: NavigatorProps['columns']) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    const previousIndex = row - 1;
    const hasPrevious = previousIndex >= 0;
    const lastRowIndex = getColumnLength(columns, column) - 1;

    if (hasPrevious && columns[column][previousIndex].props.disabled) {
        return goUp(column, previousIndex, columns);
    }

    if (!hasPrevious && columns[column][lastRowIndex].props.disabled) {
        return goUp(column, lastRowIndex, columns);
    }

    return {
        row: hasPrevious ? previousIndex : lastRowIndex,
        column: column,
    };
};

const goDown = (column: number, row: number, columns: NavigatorProps['columns']) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    const nextIndex = row + 1;
    const hasNext = nextIndex <= getColumnLength(columns, column) - 1;

    if (hasNext && columns[column][nextIndex].props.disabled) {
        return goDown(column, nextIndex, columns);
    }

    if (!hasNext && columns[column][0].props.disabled) {
        return goDown(column, 0, columns);
    }

    return {
        row: hasNext ? nextIndex : 0,
        column: column,
    };
};

type uiControlReducerState = {
    row: number;
    column: number;
};

export type uiControlReducerAction =
    | {
          type: 'GO_UP' | 'GO_DOWN' | 'GO_LEFT' | 'GO_RIGHT' | 'SELECT';
          columns: NavigatorProps['columns'];
      }
    | {
          type: 'CLEAR';
      };

export const uiControlReducer = (state: uiControlReducerState, action: uiControlReducerAction) => {
    switch (action.type) {
        case 'GO_UP':
            return goUp(state.column, state.row, action.columns);
        case 'GO_DOWN':
            return goDown(state.column, state.row, action.columns);
        case 'GO_LEFT':
            if (state.column === -1 && state.row === -1) {
                return { row: 0, column: 0 };
            }

            return {
                row: state.row,
                column: getPreviousColumnIndex(action.columns, state),
            };
        case 'GO_RIGHT':
            if (state.column === -1 && state.row === -1) {
                return { row: 0, column: 0 };
            }

            return {
                row: state.row,
                column: getNextColumnIndex(action.columns, state),
            };
        case 'SELECT':
            if (state.column === -1 || state.row === -1) {
                return state;
            }

            action.columns[state.column][state.row].props.action();
            return state;
        case 'CLEAR':
            return { row: -1, column: -1 };

        default:
            return state;
    }
};
