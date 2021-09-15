import React from 'react';
import styled from 'styled-components';
import { InfoBox } from '../../components/infoBox';
import { Marginer } from '../../components/marginer';
import GISalmonImg from "../../images/basicfish.png"
import Logo from "../../images/wtnobg.png";
import {theme} from "../../theme";

const ContentContainer = styled.div`
    width: 100%;
    height: 94.1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-size: cover;
    background: ${theme.tertiary};
`;

export function ScrollSection(props) {
    return(
        <ContentContainer>
           <InfoBox 
            title="Projects List"
            description=" "
            imgUrl={Logo}/>
            <a href="https://gisalmon.herokuapp.com/" style={{ textDecoration: 'none' }}><InfoBox
                title="GISalmon"
                description="A GIS data visualisation project done on salmon spawning health throughout BC"
                imgUrl={GISalmonImg} /></a>
            
        </ContentContainer>
    );
}