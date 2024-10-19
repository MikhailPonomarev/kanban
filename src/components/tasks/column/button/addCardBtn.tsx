import { FC } from 'react';
import { ReactComponent as AddCardIcon } from '../../../../assets/board/add-card.svg';
import { AddButton } from './addCardBtn.style';
import { ButtonProps } from './buttonProps';

const AddCardBtn: FC<ButtonProps> = ({ handleClick }) => {
    return (
        <AddButton onClick={handleClick}>
            <AddCardIcon />
            Add card
        </AddButton>
    );
}

export default AddCardBtn;