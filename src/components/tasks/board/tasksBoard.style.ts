import styled from 'styled-components';
import { colors } from '../../../style/variables.style';

export const Board = styled.main`
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    padding-bottom: 30px;
    height: 590px;
    background-color: ${colors.primaryBlue};

    @media (max-width: 375px) {
        flex-direction: column;
        gap: 50px;
        align-items: center;
        height: auto;
    }
`;
