import { ColumnTitle } from '../../../model/columnTitle';

export interface BaseProps {
    columnTitle: ColumnTitle;
    updateTasks: (columnTitle: ColumnTitle) => void;
}
