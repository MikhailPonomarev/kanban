import { ReactComponent as AddCardIcon } from '../../../../assets/board/add-card.svg';
import { AddButton } from './addCardBtn.style';

const AddCardBtn = () => {
    return (
        // <AddCardBtn onClick={handleAddCardBtnClick}>
        <AddButton>
            <AddCardIcon />
            Add card
        </AddButton>
    );
}

export default AddCardBtn;