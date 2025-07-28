import { NavigatorProps } from '@evanbrother/ui';

type uiControlDirectionProps = {
    row: number;
    column: number;
    columns: NavigatorProps['columns'];
};

const hasNoItemSelected = (state: uiControlReducerState) => {
    return state.column === -1 && state.row === -1;
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
    const nextRowIndex = row + 1;
    const nextColumnIndex = column + 1;
    const nextRow = columns[firstColumnIndexOfNextRow]?.[nextRowIndex];

    if (columns[nextColumnIndex] === undefined) {
        if (firstColumnIndexOfNextRow === -1) return getNextItem({ row: 0, column: -1, columns });

        if (nextRow?.props.disabled || nextRow === null)
            return getNextItem({ row: nextRowIndex, column: firstColumnIndexOfNextRow, columns });

        return { row: nextRowIndex, column: firstColumnIndexOfNextRow };
    }

    if (columns[nextColumnIndex][row] === null) return getNextItem({ row, column: nextColumnIndex, columns });

    if (columns[nextColumnIndex][row]?.props.disabled) return getNextItem({ row, column: nextColumnIndex, columns });

    return { row, column: nextColumnIndex };
};

const getPreviousItem = ({ column, row, columns }: uiControlDirectionProps) => {
    const lastColumnIndexOfPreviousRow = getLastColumnIndexOfPreviousRow({ row, columns });
    const previousRowIndex = row - 1;
    const previousColumnIndex = column - 1;

    if (columns[previousColumnIndex] === undefined) {
        const lastMatrixIndexes = getLastMatrixIndexes(columns);

        if (lastColumnIndexOfPreviousRow === -1)
            return getPreviousItem({ row: lastMatrixIndexes.row, column: lastMatrixIndexes.column + 1, columns });

        if (
            columns[lastColumnIndexOfPreviousRow][previousRowIndex]?.props.disabled ||
            columns[lastColumnIndexOfPreviousRow][previousRowIndex] === null
        )
            return getPreviousItem({ row: previousRowIndex, column: lastColumnIndexOfPreviousRow, columns });

        return { row: previousRowIndex, column: lastColumnIndexOfPreviousRow };
    }

    if (columns[previousColumnIndex][row] === null)
        return getPreviousItem({ row, column: previousColumnIndex, columns });

    if (columns[previousColumnIndex][row]?.props.disabled)
        return getPreviousItem({ row, column: previousColumnIndex, columns });

    return { row, column: previousColumnIndex };
};

const goUp = ({ column, row, columns }: uiControlDirectionProps) => {
    if (hasNoItemSelected({ column, row })) return { row: 0, column: 0 };

    const previousColumnIndex = column - 1;
    const previousRowIndex = row - 1;
    const hasPreviousRow = previousRowIndex >= 0;
    const lastColumnIndex = columns.length - 1;
    const lastRowIndex = columns[lastColumnIndex].length - 1;

    if (hasPreviousRow) {
        if (columns[column][previousRowIndex]?.props.disabled || columns[column][previousRowIndex] === null)
            return goUp({ column, row: previousRowIndex, columns });

        return { row: previousRowIndex, column };
    }

    if (!hasPreviousRow && columns[previousColumnIndex] === undefined) {
        if (columns[lastColumnIndex][lastRowIndex]?.props.disabled)
            return goUp({ column: lastColumnIndex, row: lastRowIndex, columns });

        return { row: lastRowIndex, column: lastColumnIndex };
    }

    return goUp({ column: previousColumnIndex, row: lastRowIndex + 1, columns });
};

const goDown = ({ column, row, columns }: uiControlDirectionProps) => {
    if (hasNoItemSelected({ column, row })) return { row: 0, column: 0 };

    const nextRowIndex = row + 1;
    const hasNextRow = nextRowIndex < columns[column].length;
    const nextColumnIndex = column + 1;

    if (hasNextRow) {
        if (columns[column][nextRowIndex]?.props.disabled || columns[column][nextRowIndex] === null)
            return goDown({ column, row: nextRowIndex, columns });

        return { row: nextRowIndex, column };
    }

    if (!hasNextRow && columns[nextColumnIndex] === undefined) {
        if (columns[0][0]?.props.disabled) return goDown({ column: 0, row: 0, columns });

        return { row: 0, column: 0 };
    }

    return goDown({ column: nextColumnIndex, row: -1, columns });
};

const goLeft = ({ column, row, columns }: uiControlDirectionProps) => {
    if (hasNoItemSelected({ column, row })) return { row: 0, column: 0 };

    return getPreviousItem({ row, column, columns });
};

const goRight = ({ column, row, columns }: uiControlDirectionProps) => {
    if (hasNoItemSelected({ column, row })) return { row: 0, column: 0 };

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
            if (state.column !== -1 && state.row !== -1) action.columns[state.column][state.row]?.props.action();

            return state;
        case 'CLEAR':
            return { row: -1, column: -1 };
        default:
            return state;
    }
};
