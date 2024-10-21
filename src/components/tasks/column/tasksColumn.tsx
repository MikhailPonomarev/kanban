import { FC } from 'react';
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
import { useGlobal } from '../../../context/globalContext';
import { useTask } from '../../../context/taskContext';

interface Props extends TasksProps {
    tasks: ITask[];
}

const TasksColumn: FC<Props> = ({ columnTitle, tasks }) => {
    const { updateTasks } = useGlobal();
    const {
        setShowInput, 
        setShowSelectTask,
        newTaskTitle,
        setNewTaskTitle,
        showSubmitBtn,
        setShowSubmitBtn
    } = useTask();

    const handleAddCardBtnClick = () => {
        if (columnTitle !== ColumnTitle.BACKLOG) {
            setShowSelectTask(true);
        } else {
            setShowInput(true);
            setNewTaskTitle('');
        }
    }

    const handleSubmitBtnClick = () => {
        if (newTaskTitle.trim() !== '') {
            const newTask: ITask = { 
                id: uuidv4().substring(0, 8), 
                name: newTaskTitle, 
                description: faker.lorem.sentences()
            };
            addTaskInLocalStorage(columnTitle, newTask);
            updateTasks();
            setNewTaskTitle('');
            setShowInput(false);
            setShowSubmitBtn(false);
        }
    }

    return (
        <TasksListWrapper>
            <Title>{columnTitle}</Title>
            <TasksList 
                tasks={tasks} 
                columnTitle={columnTitle}
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