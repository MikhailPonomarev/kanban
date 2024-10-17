import styled from 'styled-components';
import { colors, transitions } from '../../../style/variables.style';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: fit-content;
    padding: 12px;
    background-color: ${colors.lightGrey};
    border-radius: 10px;
`;

export const Title = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
    color: ${colors.black};
`;

export const TasksList = styled.ul`
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

export const TaskTitleInput = styled.input`
    height: 35px;
    padding: 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
`;

export const AddCardBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    width: 110px;
    font-size: 18px;
    color: ${colors.darkGrey};
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

export const SubmitBtn = styled(AddCardBtn)`
    color: ${colors.white};
    background-color: ${colors.primaryBlue};

    &:hover {
        background-color: ${colors.darkGrey};
    }
`;

export const Dropdown = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 35px;
    margin-top: 15px;
    background-color: ${colors.white};
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export const List = styled.ul``;
