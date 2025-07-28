import { NavigatorProps } from '@evanbrother/ui';

type uiControlDirectionProps = {
    row: number;
    column: number;
    columns: NavigatorProps['columns'];
};

const getLastMatrixIndexes = (columns: NavigatorProps['columns']) => {
    return { column: columns.length - 1, row: columns[0].length - 1 };
};

const getFirstColumnIndexOfNextRow = ({ row, columns }: Omit<uiControlDirectionProps, 'column'>) => {
    return columns.findIndex((column) => column[row + 1] !== undefined);
};

const getLastColumnIndexOfPreviousRow = ({ row, columns }: Omit<uiControlDirectionProps, 'column'>) => {
    return columns.findLastIndex((column) => column[row - 1] !== undefined);
};

const getNextItem = ({ column, row, columns }: uiControlDirectionProps) => {
    const firstColumnIndexOfNextRow = getFirstColumnIndexOfNextRow({ row, columns });

    if (columns[column + 1] === undefined) {
        if (firstColumnIndexOfNextRow === -1) {
            return getNextItem({ row: 0, column: -1, columns });
        }

        if (
            columns[firstColumnIndexOfNextRow][row + 1]?.props.disabled ||
            columns[firstColumnIndexOfNextRow][row + 1] === null
        ) {
            return getNextItem({ row: row + 1, column: firstColumnIndexOfNextRow, columns });
        }

        return { row: row + 1, column: firstColumnIndexOfNextRow };
    }

    if (columns[column + 1][row] === null) {
        return getNextItem({ row, column: column + 1, columns });
    }

    if (columns[column + 1][row]?.props.disabled) {
        return getNextItem({ row, column: column + 1, columns });
    }

    return { row, column: column + 1 };
};

const getPreviousItem = ({ column, row, columns }: uiControlDirectionProps) => {
    const lastColumnIndexOfPreviousRow = getLastColumnIndexOfPreviousRow({ row, columns });

    if (columns[column - 1] === undefined) {
        const lastMatrixIndexes = getLastMatrixIndexes(columns);

        if (lastColumnIndexOfPreviousRow === -1) {
            return getPreviousItem({ row: lastMatrixIndexes.row, column: lastMatrixIndexes.column + 1, columns });
        }

        if (
            columns[lastColumnIndexOfPreviousRow][row - 1]?.props.disabled ||
            columns[lastColumnIndexOfPreviousRow][row - 1] === null
        ) {
            return getPreviousItem({ row: row - 1, column: lastColumnIndexOfPreviousRow, columns });
        }

        return { row: row - 1, column: lastColumnIndexOfPreviousRow };
    }

    if (columns[column - 1][row] === null) {
        return getPreviousItem({ row, column: column - 1, columns });
    }

    if (columns[column - 1][row]?.props.disabled) {
        return getPreviousItem({ row, column: column - 1, columns });
    }

    return { row, column: column - 1 };
};

const goUp = ({ column, row, columns }: uiControlDirectionProps) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    const previousRowIndex = row - 1;
    const hasPreviousRow = previousRowIndex >= 0;
    const lastColumnIndex = columns.length - 1;
    const lastRowIndex = columns[lastColumnIndex].length - 1;

    if (hasPreviousRow) {
        if (columns[column][previousRowIndex]?.props.disabled || columns[column][previousRowIndex] === null) {
            return goUp({ column, row: previousRowIndex, columns });
        }

        return { row: previousRowIndex, column };
    }

    if (!hasPreviousRow && columns[column - 1] === undefined) {
        if (columns[lastColumnIndex][lastRowIndex]?.props.disabled) {
            return goUp({ column: lastColumnIndex, row: lastRowIndex, columns });
        }

        return { row: lastRowIndex, column: lastColumnIndex };
    }

    return goUp({ column: column - 1, row: lastRowIndex + 1, columns });
};

const goDown = ({ column, row, columns }: uiControlDirectionProps) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    const nextRowIndex = row + 1;
    const hasNextRow = nextRowIndex < columns[column].length;

    if (hasNextRow) {
        if (columns[column][nextRowIndex]?.props.disabled || columns[column][nextRowIndex] === null) {
            return goDown({ column, row: nextRowIndex, columns });
        }

        return { row: nextRowIndex, column };
    }

    if (!hasNextRow && columns[column + 1] === undefined) {
        if (columns[0][0]?.props.disabled) {
            return goDown({ column: 0, row: 0, columns });
        }

        return { row: 0, column: 0 };
    }

    return goDown({ column: column + 1, row: -1, columns });
};

const goLeft = ({ column, row, columns }: uiControlDirectionProps) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    return getPreviousItem({ row, column, columns });
};

const goRight = ({ column, row, columns }: uiControlDirectionProps) => {
    if (column === -1 && row === -1) {
        return { row: 0, column: 0 };
    }

    return getNextItem({ row, column, columns });
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
            return goUp({ ...state, columns: action.columns });
        case 'GO_DOWN':
            return goDown({ ...state, columns: action.columns });
        case 'GO_LEFT':
            return goLeft({ ...state, columns: action.columns });
        case 'GO_RIGHT':
            return goRight({ ...state, columns: action.columns });
        case 'SELECT':
            if (state.column !== -1 && state.row !== -1) {
                action.columns[state.column][state.row]?.props.action();
            }

            return state;
        case 'CLEAR':
            return { row: -1, column: -1 };
        default:
            return state;
    }
};
