import styled from 'styled-components';
import { colors } from '../../../../style/variables.style';
import { AddButton } from './addCardBtn.style';

export const SubmitButton = styled(AddButton)`
    color: ${colors.white};
    background-color: ${colors.primaryBlue};

    &:hover {
        background-color: ${colors.darkGrey};
    }
`;
