import { FC, useEffect, useState } from 'react';
import { Title, TasksListWrapper } from './tasksColumn.style';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { addTaskInLocalStorage } from '../../../util/localStorage';
import { ITask } from '../../../model/task';
import TasksList from './list/tasksList';
import { TasksProps } from '../tasksProps';
import SubmitBtn from './button/submitBtn';
import AddCardBtn from './button/addCardBtn';
import { ColumnTitle } from '../../../model/columnTitle';

interface Props extends TasksProps {
    tasks: ITask[];
}

const TasksColumn: FC<Props> = ({ columnTitle, tasks, updateTasks }) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [showSelectTask, setShowSelectTask] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [showSubmitBtn, setShowSubmitBtn] = useState<boolean>(false);

    const handleAddCardBtnClick = () => {
        if (columnTitle === ColumnTitle.BACKLOG) {
            setTaskTitle('');
            setShowInput(true);
        } else {
            setShowSelectTask(true);
        }
    }

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
            setShowSubmitBtn(false);
        }
    }

    useEffect(() => {
        updateTasks(columnTitle);
    }, [columnTitle, updateTasks]);

    return (
        <TasksListWrapper>
            <Title >{columnTitle}</Title>
            <TasksList 
                tasks={tasks} 
                columnTitle={columnTitle}
                showInput={showInput} 
                updateTasks={updateTasks}
                setShowSubmitBtn={setShowSubmitBtn}
                setTaskTitle={setTaskTitle}
                showSelectTask={showSelectTask}
                setShowSelectTask={setShowSelectTask}
            />
            {showSubmitBtn ? (
                <SubmitBtn handleClick={handleSubmitBtnClick}/>
            ) : (
                <AddCardBtn handleClick={handleAddCardBtnClick} />
            )}
        </TasksListWrapper>
    );
}

export default TasksColumn;