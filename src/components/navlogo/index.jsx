import React from "react";
import styled from 'styled-components';

import MyLogo from "../../images/wtnobg.png"

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LogoImg = styled.img`

    display: flex;
    margin-right: 80px;
    width: 120px;
    height: 55px;
`;

export function NavLogo(props) {
    return <LogoContainer>
        <LogoImg src={MyLogo} />
    </LogoContainer>
}