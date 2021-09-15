import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "../projects/topSection";
import { ScrollSection } from "./scrollDown";

export function Projects(props) {

    return <PageContainer>
        <TopSection />
        <ScrollSection />
    </PageContainer>

}