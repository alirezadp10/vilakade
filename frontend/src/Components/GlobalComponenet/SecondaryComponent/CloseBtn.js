import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const CloseBtnContainer = styled.button`
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: lightgray;
    @media only screen and (max-width: 600px) {
        top: 1rem;
        left: 1rem;
        color: white;
    }
`;

function CloseBtn() {
    return (
        <CloseBtnContainer>
            <NavLink to={{ pathname: "/" }}>
                <IoIosClose size={50} />
            </NavLink>
        </CloseBtnContainer>
    );
}

export default CloseBtn;
