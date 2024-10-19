import styled from 'styled-components';
import { colors } from '../../../style/variables.style';

export const TasksListWrapper = styled.div`
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
