import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

interface TaskContextType {
    showInput: boolean;
    setShowInput: Dispatch<SetStateAction<boolean>>;
    showSelectTask: boolean;
    setShowSelectTask: Dispatch<SetStateAction<boolean>>;
    newTaskTitle: string;
    setNewTaskTitle: Dispatch<SetStateAction<string>>;
    showSubmitBtn: boolean;
    setShowSubmitBtn: Dispatch<SetStateAction<boolean>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTask = (): TaskContextType => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }

    return context;
}

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [showSelectTask, setShowSelectTask] = useState<boolean>(false);
    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [showSubmitBtn, setShowSubmitBtn] = useState<boolean>(false);

    return (
        <TaskContext.Provider 
            value={{
                showInput, 
                setShowInput,
                showSelectTask,
                setShowSelectTask,
                newTaskTitle,
                setNewTaskTitle,
                showSubmitBtn,
                setShowSubmitBtn
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}