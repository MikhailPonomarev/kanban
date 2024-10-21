import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { useGlobal } from '../../../context/globalContext';
import { TaskProvider } from '../../../context/taskContext';

const TasksBoard = () => {
    const { backlogTasks, readyTasks, inProgressTasks, finishedTasks } = useGlobal();

    return (
        <TaskProvider>
            <StyledTasksBoard>
                <TasksColumn columnTitle={ColumnTitle.BACKLOG} tasks={backlogTasks} />
                <TasksColumn columnTitle={ColumnTitle.READY} tasks={readyTasks} />
                <TasksColumn columnTitle={ColumnTitle.IN_PROGRESS} tasks={inProgressTasks} />
                <TasksColumn columnTitle={ColumnTitle.FINISHED} tasks={finishedTasks} />
            </StyledTasksBoard>
        </TaskProvider>
    );
}

export default TasksBoard;