import React from 'react';
import styled from 'styled-components';
import TopSectionBackgroundImg from "../../images/projbg2.png";
import { InfoBox } from '../../components/infoBox';
import GISalmonImg from "../../images/basicfish.png";
import Twitch from "../../images/twitch.png";
import GitHub from "../../images/githublogo.png";
import MoBeer from "../../images/mobeer.png";
import { RightArrow } from "../../components/rightArrow";
import { Marginer } from "../../components/marginer";
import { Link } from "react-router-dom";


const ContentContainer = styled.div`
    width: 100%;
    height: 94.1vh;
    display: grid;
    grid-template-columns: auto auto;
    grid-row: auto auto;
    justify-content: space-evenly;
    align-content: center;
    padding: 10px 0;
    aspect-ratio: 900/450;
    width: 100%;
    background-repeat: no-repeat;
    background-image: url(${TopSectionBackgroundImg});
    background-position: center;
    background-size: cover;
    background-position: 0px 0px;
    position: absolute;
`;

export function LandingPage(props) {
    return(
        <ContentContainer name="projBot">
            <a href="https://gisalmon.herokuapp.com/" style={{ textDecoration: 'none' }}><InfoBox
                title="GISalmon"
                description="A GIS data visualisation project done on salmon spawning health throughout BC to gain experience with data manipulation and output"
                imgUrl={GISalmonImg} 
                isReverse/></a>
            <a href="https://mobeer.ca/" style={{ textDecoration: 'none' }}><InfoBox
                title="Mo Beer"
                description="Website created for Mo Beer while doing sales for the company. Made with wordpress, used google maps API"
                imgUrl={MoBeer} /></a>
            <a href="https://www.twitch.tv/wyattsmile" style={{ textDecoration: 'none' }}><InfoBox
                title="Am I Live?"
                description="A website currently under progress to check if I'm live on twitch.tv, made to develop skills with JSON endpoints and 3rd party API's"
                imgUrl={Twitch} 
                isReverse/></a>
            <a href="https://github.com/wjtim" style={{ textDecoration: 'none' }}><InfoBox
                title="My GitHub"
                description="For everything and anything else I might be working on!"
                imgUrl={GitHub} /></a>
            <Marginer direction="vertical" margin="4em" />
            <Link to="/social">
                <RightArrow />
            </Link>
        </ContentContainer>
    );
}