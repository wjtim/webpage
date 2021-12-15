import React from "react";
import styled from "styled-components";
import ImageCarousel from "../../components/imageCarousel";
import { CarouselData } from "../../components/imageCarousel/carouselData";
import { PageContainer } from "../../components/pageContainer";

export function AboutMe(props) {

    return(
        <PageContainer>
            <ImageCarousel slides={CarouselData}/>
        </PageContainer>
    ); 

}