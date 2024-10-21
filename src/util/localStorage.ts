import { ColumnTitle } from '../model/columnTitle';
import { ITask } from '../model/task';

export const initLocalStorage = () => {
    Object.values(ColumnTitle).forEach((it) => {
        localStorage.getItem(it) ?? localStorage.setItem(it, '');
    });
};

export const addTaskInLocalStorage = (columnTitle: ColumnTitle, newTask: ITask) => {
    const currentValue = localStorage.getItem(columnTitle)!.replace('[', '').replace(']', '');

    let updValue: string;
    if (currentValue === '') {
        updValue = `[${JSON.stringify(newTask)}]`;
    } else {
        updValue = `[${currentValue},${JSON.stringify(newTask)}]`;
    }

    localStorage.setItem(columnTitle, updValue.toString());
};

export const getTasksByColumnTitle = (columnTitle: ColumnTitle): ITask[] => {
    return JSON.parse(localStorage.getItem(columnTitle)!) as ITask[];
};

export const removeTaskFromLocalStorage = (columnTitle: ColumnTitle, taskId: string) => {
    const tasksByColumnTitle = getTasksByColumnTitle(columnTitle);
    localStorage.setItem(columnTitle, JSON.stringify(tasksByColumnTitle.filter((it) => it.id !== taskId)));
};

export const getTaskFromLocalStorage = (columnTitle: ColumnTitle, taskId: string): ITask => {
    const tasksByColumnTitle = getTasksByColumnTitle(columnTitle);
    const maybeTask = tasksByColumnTitle.find((it) => it.id === taskId);

    if (!maybeTask) {
        throw new Error(`Task with id->${taskId} not found`);
    }

    return maybeTask;
};

export const getMultipleTasksFromLocalStorage = (columnTitle: ColumnTitle): ITask[] => {
    const tasksByColumnTitle = localStorage.getItem(columnTitle)!;
    if (tasksByColumnTitle === '') {
        return [] as ITask[];
    }
    return JSON.parse(tasksByColumnTitle) as ITask[];
};
