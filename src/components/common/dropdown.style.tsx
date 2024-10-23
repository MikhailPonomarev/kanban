import styled from 'styled-components';
import { colors } from '../../style/variables.style';

export const Menu = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 135px;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${colors.white};
    border-radius: 5px;
    z-index: 1000;
`;