import { createContext, useState, useContext, useCallback, FC, ReactNode } from 'react';
import { ITask } from '../model/task';
import { ColumnTitle } from '../model/columnTitle';
import { getMultipleTasksFromLocalStorage, initLocalStorage } from '../util/localStorage';

interface GlobalContextType {
    backlogTasks: ITask[];
    readyTasks: ITask[];
    inProgressTasks: ITask[];
    finishedTasks: ITask[];
    updateTasks: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = (): GlobalContextType => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
    }

    return context;
};

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    initLocalStorage();

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
        <GlobalContext.Provider
            value={{
                backlogTasks,
                readyTasks,
                inProgressTasks,
                finishedTasks,
                updateTasks,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};