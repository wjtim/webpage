import React from 'react';
import styled from 'styled-components';
import { InfoBox } from '../../components/infoBox';
import GISalmonImg from "../../images/basicfish.png";
import Twitch from "../../images/twitch.png";
import GitHub from "../../images/githublogo.png";
import Waves from "../../images/newwidewavesbot.svg";


const ContentContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background:url(${Waves});
    aspect-ratio: 900/450;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export function ScrollSection(props) {


    return(
        <ContentContainer name="projBot">
            <a href="https://gisalmon.herokuapp.com/" style={{ textDecoration: 'none' }}><InfoBox
                title="GISalmon"
                description="A GIS data visualisation project done on salmon spawning health throughout BC to gain experience with data manipulation and output"
                imgUrl={GISalmonImg} /></a>
            <a href="https://www.twitch.tv/wyattsmile" style={{ textDecoration: 'none' }}><InfoBox
                title="Am I Live?"
                description="A website currently under progress to check if I'm live on twitch.tv, made to develop skills with JSON endpoints and 3rd party API's"
                imgUrl={Twitch} 
                isReverse/></a>
            <a href="https://github.com/wjtim" style={{ textDecoration: 'none' }}><InfoBox
                title="My GitHub"
                description="For everything and anything else I might be working on!"
                imgUrl={GitHub} /></a>
        </ContentContainer>
    );
}