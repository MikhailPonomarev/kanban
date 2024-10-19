import styled from 'styled-components';
import { colors, transitions } from '../../../../style/variables.style';

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 0;
`;

export const Task = styled.li`
    padding: 8px;
    font-size: 18px;
    color: ${colors.black};
    background-color: ${colors.white};
    border-radius: 5px;
    cursor: pointer;
    transition: ${transitions.backgroundColor};

    &:hover {
        background-color: ${colors.darkGrey};
        color: ${colors.white};
    }
`;

export const NewTaskInput = styled.input`
    height: 35px;
    padding: 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
`;