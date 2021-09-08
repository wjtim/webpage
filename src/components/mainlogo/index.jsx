import React from "react";
import styled from 'styled-components';

import MyLogo from "../../images/wtnobg.png"

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoImg = styled.img`

    display: block;
    margin-left:auto;
    margin-right: auto;
    width: 64em;
    height: 32em;
    user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    
`;

export function Logo(props) {
    return <LogoContainer>
        <LogoImg src={MyLogo} />
    </LogoContainer>
}