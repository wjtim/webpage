import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/mainlogo";
import { Marginer } from "../../components/marginer";
import { Link } from "react-router-dom";
import TopSectionBackgroundImg from "../../images/fogbg.jpg";
import { RightArrow } from "../../components/rightArrow";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";

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

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

export function TopSection(props){

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    console.log("Mobile: ", isMobile);

    return<TopSectionContainer>
        <BackgroundFilter>
            <Marginer direction="vertical" margin="8em" />
            <Logo />
            <Marginer direction="vertical" margin="4em" />
            <Link to="/about">
            <ArrowContainer>
                <RightArrow />
            </ArrowContainer>
            </Link>
        </BackgroundFilter>
    </TopSectionContainer>

}