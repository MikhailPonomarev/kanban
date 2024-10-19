import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { getMultipleTasksFromLocalStorage, initLocalStorage } from '../../../util/localStorage';
import { useCallback, useEffect, useState } from 'react';
import { ITask } from '../../../model/task';

const TasksBoard = () => {
    initLocalStorage();

    const [backlogTasks, setBacklogTasks] = useState<ITask[]>([]);
    const [readyTasks, setReadyTasks] = useState<ITask[]>([]);
    const [inProgressTasks, setInProgressTasks] = useState<ITask[]>([]);
    const [finishedTasks, setFinishedTasks] = useState<ITask[]>([]);

    useEffect(() => {
        setBacklogTasks(getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG));
        setReadyTasks(getMultipleTasksFromLocalStorage(ColumnTitle.READY));
        setInProgressTasks(getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS));
        setFinishedTasks(getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED));
    }, []);

    const updateTasks = useCallback((columnTitle: ColumnTitle) => {
    switch (columnTitle) {
        case ColumnTitle.BACKLOG:
            setBacklogTasks(getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG));
            break;
        case ColumnTitle.READY:
            setReadyTasks(getMultipleTasksFromLocalStorage(ColumnTitle.READY));
            break;
        case ColumnTitle.IN_PROGRESS:
            setInProgressTasks(getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS));
            break;
        case ColumnTitle.FINISHED:
            setFinishedTasks(getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED));
            break;
        default:
            break;
    }
}, []);

    return (
        <StyledTasksBoard>
            <TasksColumn columnTitle={ColumnTitle.BACKLOG} tasks={backlogTasks} updateTasks={updateTasks} />
            <TasksColumn columnTitle={ColumnTitle.READY} tasks={readyTasks} updateTasks={updateTasks} />
            <TasksColumn columnTitle={ColumnTitle.IN_PROGRESS} tasks={inProgressTasks} updateTasks={updateTasks} />
            <TasksColumn columnTitle={ColumnTitle.FINISHED} tasks={finishedTasks} updateTasks={updateTasks} />
        </StyledTasksBoard>
    );
}

export default TasksBoard;