import { FC, SetStateAction, useState } from 'react';
import { ITask } from '../../../../model/task';
import { List, Task, NewTaskInput } from './tasksList.style';
import SelectTask from '../dropdown/selectTask';
import { TasksProps } from '../../tasksProps';

interface Props extends TasksProps {
    tasks: ITask[];
    showInput: boolean;
    setShowSubmitBtn: (value: SetStateAction<boolean>) => void;
    setTaskTitle: (value: SetStateAction<string>) => void;
    showSelectTask: boolean;
    setShowSelectTask: (value: SetStateAction<boolean>) => void;
}

const TasksList: FC<Props> = (props: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        props.setTaskTitle(e.target.value);
        props.setShowSubmitBtn(true);
    }

    return (
        <>
            <List>
                {props.tasks.map((it) => <Task key={it.id}>{it.name}</Task>)}
                {props.showInput && (
                    <NewTaskInput 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder='Enter task title'
                    />
                )}
            </List>
            {props.showSelectTask && (
                <SelectTask 
                    columnTitle={props.columnTitle} 
                    updateTasks={props.updateTasks} 
                    setShowSelectTasks={props.setShowSelectTask} 
                />
            )}
        </>
    );
}

export default TasksList;