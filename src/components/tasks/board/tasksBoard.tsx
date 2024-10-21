import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style';
import { ColumnTitle } from '../../../model/columnTitle';
import { useTasks } from '../../../context/tasksContext';

const TasksBoard = () => {
    const { backlogTasks, readyTasks, inProgressTasks, finishedTasks } = useTasks();

    return (
        <StyledTasksBoard>
            <TasksColumn columnTitle={ColumnTitle.BACKLOG} tasks={backlogTasks} />
            <TasksColumn columnTitle={ColumnTitle.READY} tasks={readyTasks} />
            <TasksColumn columnTitle={ColumnTitle.IN_PROGRESS} tasks={inProgressTasks} />
            <TasksColumn columnTitle={ColumnTitle.FINISHED} tasks={finishedTasks} />
        </StyledTasksBoard>
    );
}

export default TasksBoard;