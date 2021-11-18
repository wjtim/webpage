import React from "react";
import { Navbar } from "../../components/navbar";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "../projects/topSection";
import { ScrollSection } from "./scrollDown";

export function Projects(props) {

    return(
        <PageContainer>
            <TopSection />
            <ScrollSection />
        </PageContainer>
    );
}