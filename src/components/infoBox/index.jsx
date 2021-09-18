import React from 'react'
import styled from 'styled-components';
import { theme } from "../../theme";

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    background: clear;
    margin-top 55px;
    padding-left: 30px;
    padding-right: 30px;
    transition: 1s;
    :hover { 
        background: #CDCDCD;
        transform: translateX(30px);
    }
    :active {
        transform: translateY(4px);
        transform: translateX(30px);
    }
    :focus {
        outline: none;
    }
`;

const InfoImg = styled.img`
    width: 14em;
    height: 7em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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
    const {imgUrl, title, description} = props;
    return ( 
    <InfoContainer>
        <DescriptionContainer>
            <Title>{title}</Title>
            <Details>{description}</Details>
        </DescriptionContainer>
        <InfoImg src={imgUrl} />
    </InfoContainer>
    );
}