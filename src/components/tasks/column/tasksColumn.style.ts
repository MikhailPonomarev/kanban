import styled from 'styled-components';
import { colors } from '../../../style/variables.style';

export const TasksListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: fit-content;
    max-height: 570px;
    padding: 12px;
    background-color: ${colors.lightGrey};
    border-radius: 10px;
    overflow-y: scroll;
`;

export const Title = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
    color: ${colors.black};
`;
