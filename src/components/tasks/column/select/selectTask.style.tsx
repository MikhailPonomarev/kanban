import styled from "styled-components";
import { colors, transitions } from "../../../../style/variables.style";

export const SelectBtn = styled.button`
    position: relative;
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

export const SelectDropdownItem = styled.li`
    padding: 8px;
    font-size: 18px;
    text-align: start;
    transition: ${transitions.backgroundColor};
    cursor: pointer;

    &:hover {
        color: ${colors.white};
        background-color: ${colors.darkGrey};
        border-radius: 5px;
    }
`;