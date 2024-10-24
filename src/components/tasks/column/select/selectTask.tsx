import { FC, useState } from 'react';
import { ReactComponent as ArrowDown } from '../../../../assets/common/arrow-down-black.svg';
import { ReactComponent as ArrowUp } from '../../../../assets/common/arrow-up-black.svg';
import { ColumnTitle } from '../../../../model/columnTitle';
import { SelectBtn, SelectDropdownItem } from './selectTask.style';
import { ITask } from '../../../../model/task';
import { 
    addTaskInLocalStorage,
    getMultipleTasksFromLocalStorage, 
    getTaskFromLocalStorage, 
    removeTaskFromLocalStorage 
} from '../../../../util/localStorage';
import { TasksProps } from '../../tasksProps';
import { useGlobal } from '../../../../context/globalContext';
import { useTask } from '../../../../context/taskContext';
import Dropdown from '../../../common/dropdown';

const SelectTask: FC<TasksProps> = ({ columnTitle }) => {
    const { updateTasks } = useGlobal();
    const { setShowSelectTask } = useTask();

    const [dropdownItems, setDropdownItems] = useState<ITask[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

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

        showDropdown ? setShowDropdown(false) : setShowDropdown(true)
    }

    const handleDropdownItemClick = (e: React.BaseSyntheticEvent) => {
        let taskFromLocalStorage: ITask | undefined;

        switch (columnTitle) {
            case ColumnTitle.READY:
                taskFromLocalStorage = getTaskFromLocalStorage(ColumnTitle.BACKLOG, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.BACKLOG, taskFromLocalStorage.id);
                break;
            case ColumnTitle.IN_PROGRESS:
                taskFromLocalStorage = getTaskFromLocalStorage(ColumnTitle.READY, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.READY, taskFromLocalStorage.id);
                break;
            case ColumnTitle.FINISHED:
                taskFromLocalStorage = getTaskFromLocalStorage(ColumnTitle.IN_PROGRESS, e.target.id);
                removeTaskFromLocalStorage(ColumnTitle.IN_PROGRESS, taskFromLocalStorage.id);
                break;
            default:
                taskFromLocalStorage = undefined;
        }

        const newTask: ITask = {
            id: taskFromLocalStorage!.id,
            name: taskFromLocalStorage!.name,
            description: taskFromLocalStorage!.description
        }
        addTaskInLocalStorage(columnTitle, newTask);
        updateTasks();
        setDropdownItems(dropdownItems.filter((it) => it.id !== taskFromLocalStorage!.id));
        setShowSelectTask(false);
    }

    return (
        <>
            {columnTitle !== ColumnTitle.BACKLOG && (
                <SelectBtn onClick={handleDropwdonBtnClick}>
                    {showDropdown ? <ArrowUp /> : <ArrowDown />}
                    {showDropdown &&
                        (<Dropdown 
                            children={
                                dropdownItems.map((it) => {
                                    return (
                                        <SelectDropdownItem id={it.id} key={it.id} onClick={handleDropdownItemClick}>
                                            {it.name}
                                        </SelectDropdownItem>
                                    );
                                })
                            } 
                        />)
                    }
                </SelectBtn>
            )}
        </>
    );
}

export default SelectTask;