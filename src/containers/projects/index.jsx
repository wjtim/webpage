import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "../projects/topSection";
import { ScrollSection } from "./scrollDown";
import { SocialBar } from "../../components/socialbar";

export function Projects(props) {

    return(
     <PageContainer>
        <TopSection />
        <ScrollSection />
        <SocialBar />
    </PageContainer>
    );
}