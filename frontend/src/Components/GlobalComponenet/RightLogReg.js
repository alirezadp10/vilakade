import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../Theme/AllSvg";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 102, 111, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
        font-size: 4rem;
        font-weight: 900;
        color: #fff;
    }
`;

function RightLogReg(props) {
    return (
        <>
            <Overlay>
                <Logo idth={200} height={200} />
                <span> ویلا کده </span>
                <div className="absolute bottom-3 flex gap-5">
                    <NavLink
                        target="_blank"
                        to={{ pathname: "https://google.com" }}
                    >
                        <FaInstagram size={30} fill="#fff" />
                    </NavLink>
                    <NavLink
                        target="_blank"
                        to={{ pathname: "https://google.com" }}
                    >
                        <FaTelegramPlane size={30} fill="#fff" />
                    </NavLink>
                    <NavLink
                        target="_blank"
                        to={{ pathname: "https://google.com" }}
                    >
                        <FaWhatsapp size={30} fill="#fff" />
                    </NavLink>
                </div>
            </Overlay>
            <img src={props.img} className="w-full h-screen " />
        </>
    );
}

export default RightLogReg;
