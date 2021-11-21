import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import TopSectionBackgroundImg from "../../images/projbg2.png";
import { DownArrow } from "../../components/downArrow";

const TopSectionContainer = styled.div`

    width: 100%;
    height: 94.1vh;
    background:url(${TopSectionBackgroundImg});
    background-position: 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    position: center;
`;

const BackgroundFilter = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgb(38, 70, 83);
    display: flex;
    flex-direction: column;
    opacity: 0.8;

`;

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const scrollToNext = () => {
    scroller.scrollTo("projBot", {smooth: true, duration: 1500});
};

export function TopSection(props){

    return(
            <TopSectionContainer>
                <ArrowContainer onClick={scrollToNext}>
                   <DownArrow />
                </ArrowContainer>
            </TopSectionContainer>
    );
}