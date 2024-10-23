import styled from 'styled-components';
import { colors, transitions } from '../../style/variables.style';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 55px;
    background-color: ${colors.secondaryBlue};
`;

export const Title = styled.span`
    font-size: 28px;
    color: ${colors.white};
`;

export const User = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 65px;
    height: 40px;
    cursor: pointer;
`;

export const UserDropdownOption = styled.li`
    padding: 8px;
    cursor: pointer;
    transition: ${transitions.backgroundColor};

    &:hover {
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        border-radius: 5px;
    }
`;
