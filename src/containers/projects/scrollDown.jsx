import React from 'react';
import styled from 'styled-components';
import { InfoBox } from '../../components/infoBox';
import { Marginer } from '../../components/marginer';
import {theme} from "../../theme";
import GISalmonImg from "../../images/basicfish.png";
import Twitch from "../../images/twitch.png";
import Bg from "../../images/projbg.png";

const ContentContainer = styled.div`
    width: 100%;
    height: 94.1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export function ScrollSection(props) {
    return(
        <ContentContainer>
            <a href="https://gisalmon.herokuapp.com/" style={{ textDecoration: 'none' }}><InfoBox
                title="GISalmon"
                description="A GIS data visualisation project done on salmon spawning health throughout BC to gain experience with data manipulation and output"
                imgUrl={GISalmonImg} /></a>
            <a href="https://www.twitch.tv/wyattsmile" style={{ textDecoration: 'none' }}><InfoBox
                title="Am I Live?"
                description="A website currently under progress to check if I'm live on twitch.tv, made to develop skills with JSON endpoints and 3rd party API's"
                imgUrl={Twitch} /></a>
        </ContentContainer>
    );
}