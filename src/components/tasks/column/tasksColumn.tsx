import { FC, useEffect, useState } from 'react';
import { Title, TasksListWrapper } from './tasksColumn.style';
import { v4 as uuidv4 } from 'uuid';
import { addTaskInLocalStorage } from '../../../util/localStorage';
import { ITask } from '../../../model/task';
import TasksList from './list/tasksList';
import { TasksProps } from '../tasksProps';
import SubmitBtn from './button/submitBtn';
import AddCardBtn from './button/addCardBtn';
import { ColumnTitle } from '../../../model/columnTitle';
import { useGlobal } from '../../../context/globalContext';
import { useTask } from '../../../context/taskContext';
import { Route, Routes } from 'react-router-dom';
import TaskModal from '../modal/taskModal';

interface Props extends TasksProps {
    tasks: ITask[];
}

const TasksColumn: FC<Props> = ({ columnTitle, tasks }) => {
    const { updateTasks, backlogTasks, readyTasks, inProgressTasks } = useGlobal();
    const {
        setShowInput, 
        setShowSelectTask,
        newTaskTitle,
        setNewTaskTitle,
        showSubmitBtn,
        setShowSubmitBtn
    } = useTask();

    const [addCardBtnDisabled, setAddCardBtnDisabled] = useState<boolean>(false);

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
                description: ''
            };
            addTaskInLocalStorage(columnTitle, newTask);
            updateTasks();
            setNewTaskTitle('');
            setShowInput(false);
            setShowSubmitBtn(false);
        }
    }

    useEffect(() => {
        switch(columnTitle) {
            case ColumnTitle.BACKLOG:
                setAddCardBtnDisabled(false);
                break;
            case ColumnTitle.READY:
                setAddCardBtnDisabled(backlogTasks.length === 0);
                break;
            case ColumnTitle.IN_PROGRESS:
                setAddCardBtnDisabled(readyTasks.length === 0);
                break;
            case ColumnTitle.FINISHED:
                setAddCardBtnDisabled(inProgressTasks.length === 0);
                break;
            default:
                setAddCardBtnDisabled(false);
                break;
        }
    }, [columnTitle, backlogTasks, inProgressTasks, readyTasks]);

    return (
        <>
            <TasksListWrapper>
                <Title>{columnTitle}</Title>
                <TasksList 
                    tasks={tasks} 
                    columnTitle={columnTitle}
                />
                {showSubmitBtn ? 
                    (<SubmitBtn handleClick={handleSubmitBtnClick}/>) 
                        : 
                    (<AddCardBtn handleClick={handleAddCardBtnClick} disabled={addCardBtnDisabled} />)}
            </TasksListWrapper>
            <Routes>
                <Route path='/tasks/:taskId' element={<TaskModal />} />
            </Routes>
        </>
    );
}

export default TasksColumn;