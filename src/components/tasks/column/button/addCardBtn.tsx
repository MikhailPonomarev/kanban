import { FC } from 'react';
import { ReactComponent as AddCardIcon } from '../../../../assets/board/add-card.svg';
import { AddButton } from './addCardBtn.style';
import { ButtonProps } from './buttonProps';

const AddCardBtn: FC<ButtonProps> = ({ handleClick, disabled }) => {
    return (
        <AddButton onClick={!disabled ? handleClick : undefined} disabled={disabled}>
            <AddCardIcon />
            Add card
        </AddButton>
    );
}

export default AddCardBtn;