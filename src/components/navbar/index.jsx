import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Link to="/" style={{ textDecoration: 'none' }}><NavLogo /></Link>
        </BrandContainer>
        <AccessContainer>
            <Link to="/about" style={{ textDecoration: 'none' }}><NavButton >About Me</NavButton></Link>
            <Link to="/projects" style={{ textDecoration: 'none' }}><NavButton>Projects</NavButton></Link>
            <Link to="/social" style={{ textDecoration: 'none' }}><NavButton>Social</NavButton></Link>   
            <Link to="/contact" style={{ textDecoration: 'none' }}><NavButton>Contact</NavButton></Link> 
        </AccessContainer>
    </NavBarContainer>
}