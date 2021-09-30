import React from 'react';
import styled from 'styled-components';

import { NavLogo } from "../navlogo/index";
import { theme } from "../../theme";
import { Button } from '../button';
import { Marginer } from '../marginer';

const NavBarContainer = styled.div`
    width: 100%;
    height: 55px;
    padding: 0 2em;
    display: flex;
    background-color: ${theme.primary};
    align-items: center;
    justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavButton = styled(Button)`
    background-color: transparent;
    border: none;
    font-weight: bold;
    margin-right: 45px;
    :hover {
        background-color: transparent;
        box-shadow: none;
        border: none;
        color: ${theme.secondary};
    }
`;

export function Navbar(props) {
    return <NavBarContainer>
        <BrandContainer>
        <a href="/" style={{ textDecoration: 'none' }}><NavLogo /></a>
        </BrandContainer>
        <AccessContainer>
            <a href="/projects" style={{ textDecoration: 'none' }}><NavButton>Projects</NavButton></a>
            <a href="/about" style={{ textDecoration: 'none' }}><NavButton >About Me</NavButton></a>
            <a href="/social" style={{ textDecoration: 'none' }}><NavButton>Social</NavButton></a>   
            <a href="/contact" style={{ textDecoration: 'none' }}><NavButton>Contact</NavButton></a> 
        </AccessContainer>
    </NavBarContainer>
}