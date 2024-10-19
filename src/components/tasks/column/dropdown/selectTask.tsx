import { FC, SetStateAction, useState } from 'react';
import { ReactComponent as ArrowDown } from '../../../../assets/common/arrow-down-black.svg';
import { ColumnTitle } from '../../../../model/columnTitle';
import { DropdownBtn, DropdownMenu, DropdownItem } from './selectTask.style';
import { ITask } from '../../../../model/task';
import { 
    addTaskInLocalStorage, 
    getMultipleTasksFromLocalStorage, 
    getTaskFromLocalStorage, 
    removeTaskFromLocalStorage 
} from '../../../../util/localStorage';
import { TasksProps } from '../../tasksProps';

interface Props extends TasksProps {
    setShowSelectTasks: (value: SetStateAction<boolean>) => void;
}

const SelectTask: FC<Props> = ({ columnTitle, updateTasks, setShowSelectTasks }) => {
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
        updateTasks(columnTitle);
        setDropdownItems(dropdownItems.filter((it) => it.id !== taskFromLS!.id));
        setShowSelectTasks(false);
    }

    return (
        <>
            {columnTitle !== ColumnTitle.BACKLOG && (
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
        </>
    );
}

export default SelectTask;