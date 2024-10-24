import styled from 'styled-components';
import { colors, transitions } from '../../../style/variables.style';

export const Overlay = styled.div`
    position: absolute;
    display: flex;
    width: 1212px;
    height: 600px;
    background-color: ${colors.white};
    border-radius: 5px;

    @media (max-width: 375px) {
        top: 0;
        width: 375px;
        height: 100%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-top: 20px;
    padding-left: 30px;
`;

export const Title = styled.span`
    font-size: 24px;
`;

export const DesciptionTextArea = styled.textarea`
    width: 620px;
    padding: 5px;
    font-family: 'Roboto', serif;
    font-size: 18px;
    resize: none;
    border-radius: 5px;

    @media (max-width: 375px) {
        width: 300px;
    }
`;

export const SaveBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`;

export const SaveBtn = styled.button`
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: ${colors.white};
    background-color: ${colors.primaryBlue};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: ${transitions.backgroundColor};

    &:hover {
        background-color: ${colors.darkGrey};
    }
`;

export const SavedText = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.green};
`;

export const CloseBtn = styled.button`
    align-self: flex-start;
    margin-left: auto;
    margin-top: 20px;
    margin-right: 30px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;
