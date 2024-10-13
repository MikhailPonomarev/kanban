import React from 'react';
import { AddCardBtn, Task, TasksList, Title, Wrapper } from './tasksColumn.style';
import { ReactComponent as AddCardIcon } from '../../../assets/board/add-card.svg'

interface Props {
    title: 'Backlog' | 'Ready' | 'In Progress' | 'Finished';
    tasks: { id: number, name: string, description: string }[];
}

const TasksColumn: React.FC<Props> = ({title, tasks}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <TasksList>
                <Task>{tasks[0].name}</Task>
            </TasksList>
            <AddCardBtn>
                <AddCardIcon />
                <span>Add card</span>
            </AddCardBtn>
        </Wrapper>
    );
}

export default TasksColumn;