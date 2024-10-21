import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { getMultipleTasksFromLocalStorage, initLocalStorage } from '../../../util/localStorage';
import { useCallback, useState } from 'react';
import { ITask } from '../../../model/task';
import { useTasks } from '../../../context';

const TasksBoard = () => {
    initLocalStorage();

    // const [backlogTasks, setBacklogTasks] = useState<ITask[]>(
    //     getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG)
    // );
    // const [readyTasks, setReadyTasks] = useState<ITask[]>(
    //     getMultipleTasksFromLocalStorage(ColumnTitle.READY)
    // );
    // const [inProgressTasks, setInProgressTasks] = useState<ITask[]>(
    //     getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS)
    // );
    // const [finishedTasks, setFinishedTasks] = useState<ITask[]>(
    //     getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED)
    // );

    // const updateTasks = useCallback(() => {
    //     setBacklogTasks(getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG));
    //     setReadyTasks(getMultipleTasksFromLocalStorage(ColumnTitle.READY));
    //     setInProgressTasks(getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS));
    //     setFinishedTasks(getMultipleTasksFromLocalStorage(ColumnTitle.FINISHED));
    // }, []);

    const {
        backlogTasks,
        readyTasks,
        inProgressTasks,
        finishedTasks,
        updateTasks
    } = useTasks();

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