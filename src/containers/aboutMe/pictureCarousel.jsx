import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/fogbg.jpg";


const TopSectionContainer = styled.div`

    width: 100%;
    height: 94.1vh;
    background:url(${TopSectionBackgroundImg});
    background-position: 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;

`;

const BackgroundFilter = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgb(38, 70, 83);
    display: flex;
    flex-direction: column;
    opacity: 0.8;

`;

export function PictureCarousel(props){

    return<TopSectionContainer>
        <BackgroundFilter>
            
        </BackgroundFilter>
    </TopSectionContainer>

}