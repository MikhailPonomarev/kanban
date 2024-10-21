import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { useGlobal } from '../../../context/globalContext';
import { TaskProvider } from '../../../context/taskContext';

const TasksBoard = () => {
    const { backlogTasks, readyTasks, inProgressTasks, finishedTasks } = useGlobal();

    return (
        <StyledTasksBoard>
            <TaskProvider>
                <TasksColumn columnTitle={ColumnTitle.BACKLOG} tasks={backlogTasks} />
            </TaskProvider>
            <TaskProvider>
                <TasksColumn columnTitle={ColumnTitle.READY} tasks={readyTasks} />
            </TaskProvider>
            <TaskProvider>
                <TasksColumn columnTitle={ColumnTitle.IN_PROGRESS} tasks={inProgressTasks} />
            </TaskProvider>
            <TaskProvider>
                <TasksColumn columnTitle={ColumnTitle.FINISHED} tasks={finishedTasks} />
            </TaskProvider>
        </StyledTasksBoard>
    );
}

export default TasksBoard;