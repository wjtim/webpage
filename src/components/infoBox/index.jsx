import React from 'react'
import styled from 'styled-components';
import { theme } from "../../theme";

const InfoContainer = styled.div`
    display: flex;
    flex: 1 1 0px;
    align-items: center;
    background: clear;
    margin-top 55px;
    padding-left: 30px;
    padding-right: 30px;
    transition: 1s;
    width: 1371px;
    height: 150px;
    flex-direction: ${({ isReverse }) => isReverse && "row-reverse"};
    :hover { 
        background: #CDCDCD;
        transform: translateX(30px);
    }
    :focus {
        outline: none;
    }
`;

const InfoImg = styled.img`
    width: 12em;
    height: 5em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 60%;
    max-width: 60%;
`;

const Title = styled.h2`
    color: #000000;
    font-size:28px;
    font-weight: 700;
    padding-right: 30px;
`;

const Details = styled.p`
    color: #000000;
    font-size: 19px;
    text-align: center;
    max-width: 70%;
`;
export function InfoBox(props) {
    const {imgUrl, title, description, isReverse } = props;
    return ( 
    <InfoContainer isReverse = {isReverse}>
        <DescriptionContainer>
            <Title>{title}</Title>
            <Details>{description}</Details>
        </DescriptionContainer>
        <InfoImg src={imgUrl} />
    </InfoContainer>
    );
}