import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: fit-content;
    padding: 12px;
    background-color: #ebecf0;
    border-radius: 10px;
`;

export const Title = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
    color: black;
`;

export const TasksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 0;
    list-style: none;
`;

export const Task = styled.li`
    padding: 8px;
    font-size: 18px;
    color: black;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #5e6c84;
        color: white;
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
    color: #5e6c84;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: white;
    }

    span {
        margin-left: 5px;
    }
`;

export const SubmitBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    width: 110px;
    font-size: 18px;
    color: white;
    background-color: #0079bf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #5e6c84;
    }

    span {
        margin-left: 5px;
    }
`;
