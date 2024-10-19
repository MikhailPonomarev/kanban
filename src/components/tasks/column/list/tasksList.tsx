import { FC, useState } from 'react';
import { ITask } from '../../../../model/task';
import { List, Task, NewTaskInput } from './tasksList.style';
import SelectTask from '../dropdown/selectTask';
import { BaseProps } from '../../props/baseProps';

interface Props extends BaseProps {
    tasks: ITask[];
    showInput: boolean;
}

const TasksList: FC<Props> = ({ tasks, columnTitle, showInput, updateTasks }) => {
    const [taskTitle, setTaskTitle] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    return (
        <>
            <List>
                {tasks.map((it) => <Task key={it.id}>{it.name}</Task>)}
                {showInput && (
                    <NewTaskInput 
                        value={taskTitle} 
                        onChange={handleInputChange} 
                        placeholder='Enter task title'/>
                    )
                }
            </List>
            <SelectTask columnTitle={columnTitle} updateTasks={updateTasks} />
        </>
    );
}

export default TasksList;