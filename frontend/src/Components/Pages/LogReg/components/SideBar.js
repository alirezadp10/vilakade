import React from "react";
import {
    FaInstagram,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../../../Theme/AllSvg";
import { image } from "../../../variables";


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
`;


function SideBar(props) {
    const {width} = props;
    return (
        <div className="md:w-2/6 md:h-screen w-full h-40 flex-wrap bg-red-200 relative">
            <Overlay>
                <Logo
                    width={width > 700 ? 200 : 50}
                    height={width > 700 ? 200 : 50}
                />
                <span className="text-4xl md:text-6xl md:mt-8 mt-3  font-extrabold text-white ">
                    {" "}
                    ویلا کده{" "}
                </span>
                <div className="absolute bottom-3 gap-5 hidden md:flex">
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
            <img src={image} className="w-full h-full" />
        </div>
    );
}

export default SideBar;
