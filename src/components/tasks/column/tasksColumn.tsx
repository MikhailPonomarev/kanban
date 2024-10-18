import React, { useEffect, useState } from 'react';
import { AddCardBtn, DropdownBtn, DropdownMenu, DropdownItem, SubmitBtn, Task, TasksList, TaskTitleInput, Title, Wrapper } from './tasksColumn.style';
import { ReactComponent as AddCardIcon } from '../../../assets/board/add-card.svg';
import { ReactComponent as ArrowDown } from '../../../assets/common/arrow-down-black.svg';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { initLocalStorage, addTaskInLocalStorage, getMultipleTasksFromLocalStorage, getTaskFromLocalStorage, removeTaskFromLocalStorage } from '../../../util/localStorage';
import { ITask } from '../../../model/task';
import { ColumnTitle } from '../../../model/columnTitle';

interface Props {
    columnTitle: ColumnTitle;
    tasks: ITask[];
}

const TasksColumn: React.FC<Props> = ({ columnTitle, tasks }) => {
    initLocalStorage(columnTitle);

    const [showInput, setShowInput] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [tasksToRender, setTasksToRender] = useState<ITask[]>(tasks);
    const [dropdownItems, setDropdownItems] = useState<ITask[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleAddCardBtnClick = () => setShowInput(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmitBtnClick = () => {
        if (taskTitle.trim() !== '') {
            const newTask: ITask = { 
                id: uuidv4().substring(0, 8), 
                name: taskTitle, 
                description: faker.lorem.sentences()
            };
            addTaskInLocalStorage(columnTitle, newTask);
            setTasksToRender([...getMultipleTasksFromLocalStorage(columnTitle)]);
            setTaskTitle('');
            setShowInput(false);
        }
    }

    const handleDropwdonBtnClick = () => {
        switch (columnTitle) {
            case ColumnTitle.READY:
                setDropdownItems(getMultipleTasksFromLocalStorage(ColumnTitle.BACKLOG));
                break;
            case ColumnTitle.IN_PROGRESS:
                setDropdownItems(getMultipleTasksFromLocalStorage(ColumnTitle.READY));
                break;
            case ColumnTitle.FINISHED:
                setDropdownItems(getMultipleTasksFromLocalStorage(ColumnTitle.IN_PROGRESS));
                break;
        }
        setShowDropdown(true);
    }
    
    const handleDropdownItemClick = (e: React.BaseSyntheticEvent) => {
        let taskFromLS: ITask | undefined;

        switch (columnTitle) {
            case ColumnTitle.READY:
                taskFromLS = getTaskFromLocalStorage(ColumnTitle.BACKLOG, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.BACKLOG, taskFromLS.id);
                break;
            case ColumnTitle.IN_PROGRESS:
                taskFromLS = getTaskFromLocalStorage(ColumnTitle.READY, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.READY, taskFromLS.id);
                break;
            case ColumnTitle.FINISHED:
                taskFromLS = getTaskFromLocalStorage(ColumnTitle.IN_PROGRESS, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.IN_PROGRESS, taskFromLS.id);
                break;
            default:
                taskFromLS = undefined;
        }

        const newTask: ITask = {
            id: taskFromLS!.id,
            name: taskFromLS!.name,
            description: taskFromLS!.description
        }
        addTaskInLocalStorage(columnTitle, newTask);

        setTasksToRender(getMultipleTasksFromLocalStorage(columnTitle));
        setDropdownItems(dropdownItems.filter((it) => it.id !== taskFromLS!.id));
    }

    useEffect(() => {
        setTasksToRender(getMultipleTasksFromLocalStorage(columnTitle));
    }, [columnTitle]);

    return (
        <Wrapper>
            <Title>{columnTitle}</Title>
            <TasksList>
                {tasksToRender.map((it) => <Task key={it.id}>{it.name}</Task>)}
                {showInput && <TaskTitleInput value={taskTitle} onChange={handleInputChange} placeholder='Enter task title'/>}
            </TasksList>
            {columnTitle !== 'Backlog' && (
                <DropdownBtn onClick={handleDropwdonBtnClick}>
                    <ArrowDown />
                </DropdownBtn>
            )}
            {showDropdown && (
                <DropdownMenu>
                    {dropdownItems.map((it) => {
                        return (
                            <DropdownItem id={it.id} key={it.id} onClick={handleDropdownItemClick}>
                                {it.name}
                            </DropdownItem>
                        );
                    })}
                </DropdownMenu>
            )}
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