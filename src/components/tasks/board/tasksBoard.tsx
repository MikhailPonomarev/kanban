import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { getMultipleTasksFromLocalStorage, initLocalStorage2 } from '../../../util/localStorage';
import { useEffect, useState } from 'react';
import { ITask } from '../../../model/task';

const TasksBoard = () => {
    initLocalStorage2();

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

    return (
        <StyledTasksBoard>
            <TasksColumn columnTitle={ColumnTitle.BACKLOG} tasks={backlogTasks} />
            <TasksColumn columnTitle={ColumnTitle.READY} tasks={readyTasks} />
            <TasksColumn columnTitle={ColumnTitle.IN_PROGRESS} tasks={inProgressTasks} />
            <TasksColumn columnTitle={ColumnTitle.FINISHED} tasks={finishedTasks} />
        </StyledTasksBoard>
    )
}

export default TasksBoard;