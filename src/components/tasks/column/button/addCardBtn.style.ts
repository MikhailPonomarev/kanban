import styled from 'styled-components';
import { colors, transitions } from '../../../../style/variables.style';

export const AddButton = styled.button<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    width: 110px;
    font-size: 18px;
    color: ${colors.darkGrey};
    background-color: ${colors.lightGrey};
    border: none;
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: ${transitions.backgroundColor};

    &:hover {
        background-color: ${({ disabled }) => (disabled ? colors.lightGrey : colors.white)};
    }

    svg {
        margin-right: 5px;
    }
`;
