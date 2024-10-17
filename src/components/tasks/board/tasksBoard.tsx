import TasksColumn from '../column/tasksColumn';
import { StyledTasksBoard } from './tasksBoard.style'

const TasksBoard = () => {
    return (
        <StyledTasksBoard>
            <TasksColumn title='Backlog' tasks={[]} />
            <TasksColumn title='Ready' tasks={[]} />
            <TasksColumn title='In Progress' tasks={[]} />
            <TasksColumn title='Finished' tasks={[]} />
        </StyledTasksBoard>
    )
}

export default TasksBoard;