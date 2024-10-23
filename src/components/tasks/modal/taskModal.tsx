import { useNavigate, useParams } from 'react-router-dom';
import { ITask } from '../../../model/task';
import { addTaskInLocalStorage, getColumnTitleContainingTask, getTaskFromLocalStorageById, removeTaskFromLocalStorage } from '../../../util/localStorage';
import { CloseBtn, ContentWrapper, DesciptionTextArea, Overlay, SaveBtn, SaveBtnContainer, SavedText, Title } from './taskModal.style';
import { ReactComponent as Cross } from '../../../assets/modal/cross.svg';
import { useState } from 'react';

const TaskModal = () =>  {
    const navigate = useNavigate();
    const { taskId } = useParams<{ taskId: string }>();
    const task: ITask | undefined = getTaskFromLocalStorageById(taskId!);

    const [description, setDescription] = useState<string>(
        task?.description! === '' ? 'This task has no description' : task?.description!
    );
    const [showSavedText, setShowSavedText] = useState<boolean>(false);

    if (!task) {
        return null;
    }

    const handleCloseBtnClick = () => {
        navigate('/');
    }

    const handleTextAreaValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleSaveBtnClick = () => {
        const columnTitle = getColumnTitleContainingTask(task);

        removeTaskFromLocalStorage(columnTitle, task?.id!);
        
        const updTask: ITask = {
            id: task?.id!,
            name: task?.name!,
            description
        }
        addTaskInLocalStorage(columnTitle, updTask);

        setShowSavedText(true);
    }

    return (
        <Overlay>
            <ContentWrapper>
                <Title>{task.name}</Title>
                <DesciptionTextArea 
                    rows={8} 
                    value={description} 
                    onChange={handleTextAreaValueChange} 
                />
                <SaveBtnContainer>
                    <SaveBtn onClick={handleSaveBtnClick}>Save</SaveBtn>
                    {showSavedText && <SavedText>Description saved successefully</SavedText>}
                </SaveBtnContainer>
            </ContentWrapper>
            <CloseBtn onClick={handleCloseBtnClick}>
                <Cross />
            </CloseBtn>
        </Overlay>
    );
}

export default TaskModal;