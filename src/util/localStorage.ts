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
    localStorage.setItem(
        columnTitle,
        JSON.stringify(tasksByColumnTitle.filter((it) => it.id !== taskId)),
    );
};

export const getTaskFromLocalStorage = (columnTitle: ColumnTitle, taskId: string): ITask => {
    const tasksByColumnTitle = getTasksByColumnTitle(columnTitle);
    const maybeTask = tasksByColumnTitle.find((it) => it.id === taskId);

    if (!maybeTask) {
        throw new Error(`Task with id->${taskId} not found`);
    }

    return maybeTask;
};

export const getTaskFromLocalStorageById = (id: string): ITask | undefined => {
    const allTasks = [
        ...getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG),
        ...getMultipleTasksFromLocalStorage(ColumnTitle.READY),
        ...getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS),
        ...getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED),
    ];

    return allTasks.find((task) => task.id === id) || undefined;
};

export const getColumnTitleContainingTask = (task: ITask): ColumnTitle => {
    const backlogTasks = getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG);
    const readyTasks = getMultipleTasksFromLocalStorage(ColumnTitle.READY);
    const inProgressTasks = getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS);

    if (backlogTasks.filter((it) => it.id !== task.id).length === 1) {
        return ColumnTitle.BACKLOG;
    }

    if (readyTasks.filter((it) => it.id !== task.id).length === 1) {
        return ColumnTitle.READY;
    }

    if (inProgressTasks.filter((it) => it.id !== task.id).length === 1) {
        return ColumnTitle.IN_PROGRESS;
    }

    return ColumnTitle.FINISHED;
};

export const getMultipleTasksFromLocalStorage = (columnTitle: ColumnTitle): ITask[] => {
    const tasksByColumnTitle = localStorage.getItem(columnTitle)!;
    if (tasksByColumnTitle === '') {
        return [] as ITask[];
    }
    return JSON.parse(tasksByColumnTitle) as ITask[];
};
