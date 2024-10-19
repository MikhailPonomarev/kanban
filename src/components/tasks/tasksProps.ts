import { ColumnTitle } from '../../model/columnTitle';

export interface TasksProps {
    columnTitle: ColumnTitle;
    updateTasks: (columnTitle: ColumnTitle) => void;
}
