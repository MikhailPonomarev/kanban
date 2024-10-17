import React, { useEffect, useState } from 'react';
import { AddCardBtn, Dropdown, SubmitBtn, Task, TasksList, TaskTitleInput, Title, Wrapper } from './tasksColumn.style';
import { ReactComponent as AddCardIcon } from '../../../assets/board/add-card.svg';
import { ReactComponent as ArrowDown } from '../../../assets/common/arrow-down-black.svg';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

interface TaskInfo {
    id: string;
    title: string;
    description: string;
}

interface Props {
    title: 'Backlog' | 'Ready' | 'In Progress' | 'Finished';
    tasks: TaskInfo[];
}

const initLocalStorage = (title: string) => {
    localStorage.getItem(title) ?? localStorage.setItem(title, '');
}

const addTaskInLocalStorage = (title: string, newTask: TaskInfo) => {
    const currentValue = localStorage.getItem(title)!
        .replace('[', '')
        .replace(']', '');
    
    let updValue: string;
    if (currentValue === '') {
        updValue = `[${JSON.stringify(newTask)}]`;
    } else {
        updValue = `[${currentValue},${JSON.stringify(newTask)}]`;
    }
    
    localStorage.setItem(title, updValue.toString());
}

const getTasksFromLocalStorage = (title: string): TaskInfo[] => {
    const currentTasks = localStorage.getItem(title)!;
    if (currentTasks === '') {
        return [] as TaskInfo[];
    }
    return JSON.parse(currentTasks) as TaskInfo[];
}

const TasksColumn: React.FC<Props> = ({ title, tasks }) => {
    initLocalStorage(title);

    const [showInput, setShowInput] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [tasksToRender, setTasksToRender] = useState<TaskInfo[]>(tasks);

    const handleAddCardBtnClick = () => setShowInput(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmitBtnClick = () => {
        if (taskTitle.trim() !== '') {
            const newTask: TaskInfo = { 
                id: uuidv4().substring(0, 8), 
                title: taskTitle, 
                description: faker.lorem.sentences()
            };
            tasks.push(newTask);
            addTaskInLocalStorage(title, newTask);
            setTasksToRender([...getTasksFromLocalStorage(title)]);
            setTaskTitle('');
            setShowInput(false);
        }
    }

    const tasksItems = tasksToRender.map((it) => <Task key={it.id}>{it.title}</Task>);

    useEffect(() => {
        setTasksToRender(getTasksFromLocalStorage(title));
    }, [title]);

    return (
        <Wrapper>
            <Title>{title}</Title>
            <TasksList>
                {tasksItems}
                {showInput && <TaskTitleInput value={taskTitle} onChange={handleInputChange} placeholder='Enter task title'/>}
            </TasksList>
            {taskTitle.length > 0 ? (
                <SubmitBtn onClick={handleSubmitBtnClick}>
                    Submit
                </SubmitBtn>
            ) : (
                <AddCardBtn onClick={handleAddCardBtnClick}>
                    <AddCardIcon />
                    Add card
                </AddCardBtn>
            )}
        </Wrapper>
    );
}

export default TasksColumn;

/*
<Dropdown>
                <ArrowDown />
            </Dropdown>
*/