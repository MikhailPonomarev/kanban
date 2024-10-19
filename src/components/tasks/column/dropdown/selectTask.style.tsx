import styled from "styled-components";
import { colors, transitions } from "../../../../style/variables.style";

export const DropdownBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 35px;
    margin-top: 15px;
    padding-right: 8px;
    background-color: ${colors.white};
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export const DropdownMenu = styled.ul`
    list-style: none;
    margin-top: 3px;
    padding: 0px;
    background-color: ${colors.white};
    border-radius: 5px;
`;

export const DropdownItem = styled.li`
    padding: 8px;
    font-size: 18px;
    transition: ${transitions.backgroundColor};
    cursor: pointer;

    &:hover {
        background-color: ${colors.lightGrey};
    }
`;