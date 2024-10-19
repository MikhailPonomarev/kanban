import styled from 'styled-components';
import { colors, transitions } from '../../../../style/variables.style';

export const AddButton = styled.button`
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
    cursor: pointer;
    transition: ${transitions.backgroundColor};

    &:hover {
        background-color: ${colors.white};
    }

    svg {
        margin-right: 5px;
    }
`;
