import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    width: auto;
    height: auto;
    padding: 10px 10px;
    display: block;
    margin-left:auto;
    margin-right: auto;
    background-color: ${theme.primary};
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    :hover {
        box-shadow: 0px 2px 20px ${theme.secondary}; 
        color: ${theme.secondary};  
    }
    :active {
        transform: translateY(4px);
    }
    :focus {
        outline: none;
    }
`;

export function Button(props) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}