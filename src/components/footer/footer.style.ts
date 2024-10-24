import styled from 'styled-components';
import { colors } from '../../style/variables.style';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 55px;
    background-color: ${colors.secondaryBlue};

    @media (max-width: 375px) {
        display: none;
    }
`;

export const TasksCounter = styled.div`
    display: flex;
    gap: 35px;
`;

export const FooterText = styled.span`
    font-size: 18px;
    color: ${colors.white};
`;
