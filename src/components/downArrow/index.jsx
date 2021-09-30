import React from "react";
import styled from "styled-components";
import { faAngleRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #242526;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    :hover {
        border: 2px solid ${theme.secondary};
    }
`;

const ArrowIcon = styled.div`
    color: #ffffff;
    font-size: 30px;
    margin-top: 3px;
`;

export function DownArrow() {
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faChevronDown} />
        </ArrowIcon>
    </ArrowContainer>
}