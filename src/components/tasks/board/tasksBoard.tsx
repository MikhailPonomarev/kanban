import TasksColumn from "../column/tasksColumn";
import { StyledTasksBoard } from "./tasksBoard.style"

const TasksBoard = () => {
    return (
        <StyledTasksBoard>
            <TasksColumn title='Backlog' tasks={[{id: 1, name: 'Login page – performance issues', description: ''}]} />
            <TasksColumn title='Ready' tasks={[{id: 2, name: 'Shop page – performance issues', description: ''}]} />
            <TasksColumn title='In Progress' tasks={[{id: 3, name: 'User page – performance issues', description: ''}]} />
            <TasksColumn title='Finished' tasks={[{id: 4, name: 'Main page – performance issues', description: ''}]} />
        </StyledTasksBoard>
    )
}

export default TasksBoard;