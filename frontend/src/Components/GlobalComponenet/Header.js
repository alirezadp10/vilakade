import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../Theme/AllSvg";

import DropDown from "./HeaderComponents/DropDown";

const HeaderContainer = styled.div``;

function Header() {
    return (
        <HeaderContainer className="container mx-auto py-3 gap-0 ">
            <div className="flex items-center justify-between">
                <div className="flex gap-8">
                    <Link to="/">
                        <Logo height={50} fill={"#000"} />
                    </Link>
                    <div className="md:flex hidden align-middle gap-2 justify-center items-center ">
                        <button className="px-5 py-2 rounded-lg text-base font-normal text-gray-800">
                            دسته بندی اقامتگاه ها
                        </button>
                        <button className="px-5 py-2 rounded-lg text-base font-normal text-gray-800">
                            درباره ما
                        </button>
                        <Link to='/support' className="px-5 py-2 rounded-lg text-base font-normal text-gray-800">
                            پشتیبانی
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex justify-end gap-6 items-center">
                        <NavLink
                            to="/login"
                            className=" rounded-lg px-2 py-3 hidden"
                        >
                            میزبان باشید
                        </NavLink>
                        <DropDown />
                    </div>
                </div>
            </div>

        </HeaderContainer>
    );
}

export default Header;
