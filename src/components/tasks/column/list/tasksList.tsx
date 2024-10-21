import { FC } from 'react';
import { ITask } from '../../../../model/task';
import { List, Task, NewTaskInput } from './tasksList.style';
import SelectTask from '../dropdown/selectTask';
import { TasksProps } from '../../tasksProps';
import { ColumnTitle } from '../../../../model/columnTitle';
import { useTask } from '../../../../context/taskContext';

interface Props extends TasksProps {
    tasks: ITask[];
}

const TasksList: FC<Props> = ({ columnTitle, tasks }) => {
    const { 
        showInput, 
        showSelectTask,
        newTaskTitle, 
        setNewTaskTitle, 
        setShowSubmitBtn 
    } = useTask();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value);
        setShowSubmitBtn(true);
    }

    return (
        <>
            <List>
                {tasks.map((it) => <Task key={it.id}>{it.name}</Task>)}
                {(showInput && columnTitle === ColumnTitle.BACKLOG) && (
                    <NewTaskInput 
                        value={newTaskTitle} 
                        onChange={handleInputChange} 
                        placeholder='Enter task title'
                    />
                )}
            </List>
            {showSelectTask && (
                <SelectTask 
                    columnTitle={columnTitle} 
                />
            )}
        </>
    );
}

export default TasksList;