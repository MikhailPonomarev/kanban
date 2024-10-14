import React, { useState } from 'react';
import { AddCardBtn, SubmitBtn, Task, TasksList, TaskTitleInput, Title, Wrapper } from './tasksColumn.style';
import { ReactComponent as AddCardIcon } from '../../../assets/board/add-card.svg'
import { Data, TaskData } from '../../../data/mock';

const TasksColumn: React.FC<Data> = ({ title, tasks }) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [tasksToRender, setTastsToRender] = useState<TaskData[]>(tasks);

    const handleAddCardBtnClick = () => setShowInput(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmitBtnClick = () => {
        if (taskTitle.trim() !== '') {
            const newTask: TaskData = { id: 9999, name: taskTitle, description: '' };
            tasks.push(newTask);
            setTastsToRender([...tasks]);
            setTaskTitle('');
            setShowInput(false);
        }
    }

    const tasksItems = tasksToRender.map((it) => <Task key={it.id}>{it.name}</Task>);
    return (
        <Wrapper>
            <Title>{title}</Title>
            <TasksList>
                {tasksItems}
                {showInput && <TaskTitleInput value={taskTitle} onChange={handleInputChange} placeholder='Enter task title'/>}
            </TasksList>
            {taskTitle.length > 0 ? (
                <SubmitBtn onClick={handleSubmitBtnClick}>
                    <span>Submit</span>
                </SubmitBtn>
            ) : (
                <AddCardBtn onClick={handleAddCardBtnClick}>
                    <AddCardIcon />
                    <span>Add card</span>
                </AddCardBtn>
            )}
        </Wrapper>
    );
}

export default TasksColumn;