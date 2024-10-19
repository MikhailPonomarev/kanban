import { FC, useEffect, useState } from 'react';
import { Title, TasksListWrapper } from './tasksColumn.style';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { addTaskInLocalStorage } from '../../../util/localStorage';
import { ITask } from '../../../model/task';
import TasksList from './list/tasksList';
import { BaseProps } from '../props/baseProps';
import SubmitBtn from './button/submitBtn';
import AddCardBtn from './button/addCardBtn';

interface Props extends BaseProps {
    tasks: ITask[];
}

const TasksColumn: FC<Props> = ({ columnTitle, tasks, updateTasks }) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>('');

    const handleAddCardBtnClick = () => setShowInput(true);

    const handleSubmitBtnClick = () => {
        if (taskTitle.trim() !== '') {
            const newTask: ITask = { 
                id: uuidv4().substring(0, 8), 
                name: taskTitle, 
                description: faker.lorem.sentences()
            };
            addTaskInLocalStorage(columnTitle, newTask);
            updateTasks(columnTitle);
            setTaskTitle('');
            setShowInput(false);
        }
    }

    useEffect(() => {
        updateTasks(columnTitle);
    }, [columnTitle, updateTasks]);

    return (
        <TasksListWrapper>
            <Title>{columnTitle}</Title>
            <TasksList tasks={tasks} columnTitle={columnTitle} showInput={showInput} updateTasks={updateTasks}/>
            {taskTitle.length > 0 ? (
                <SubmitBtn />
            ) : (
                <AddCardBtn />
            )}
        </TasksListWrapper>
    );
}

export default TasksColumn;