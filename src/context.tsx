import React, { createContext, useState, useContext, useCallback, FC } from 'react';
import { ITask } from './model/task';
import { ColumnTitle } from './model/columnTitle';
import { getMultipleTasksFromLocalStorage } from './util/localStorage';

interface TasksContextType {
    backlogTasks: ITask[];
    setBacklogTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    readyTasks: ITask[];
    setReadyTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    inProgressTasks: ITask[];
    setInProgressTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    finishedTasks: ITask[];
    setFinishedTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    updateTasks: () => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
};

export const TasksProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [backlogTasks, setBacklogTasks] = useState<ITask[]>(
        getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG)
    );
    const [readyTasks, setReadyTasks] = useState<ITask[]>(
        getMultipleTasksFromLocalStorage(ColumnTitle.READY)
    );
    const [inProgressTasks, setInProgressTasks] = useState<ITask[]>(
        getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS)
    );
    const [finishedTasks, setFinishedTasks] = useState<ITask[]>(
        getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED)
    );

    const updateTasks = useCallback(() => {
        setBacklogTasks(getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG));
        setReadyTasks(getMultipleTasksFromLocalStorage(ColumnTitle.READY));
        setInProgressTasks(getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS));
        setFinishedTasks(getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED));
    }, []);

    return (
        <TasksContext.Provider
            value={{
                backlogTasks,
                setBacklogTasks,
                readyTasks,
                setReadyTasks,
                inProgressTasks,
                setInProgressTasks,
                finishedTasks,
                setFinishedTasks,
                updateTasks,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};