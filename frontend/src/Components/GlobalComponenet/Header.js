import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../Theme/AllSvg";

import DropDown from "./HeaderComponents/DropDown";

const HeaderContainer = styled.div``;

const supportIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

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
            <Link
              to="/support"
              className="px-5 py-2 rounded-lg text-base font-normal text-gray-800"
            >
              پشتیبانی
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-end gap-6 items-center">
            {/* <NavLink
                            to="/login"
                            className=" rounded-lg px-2 py-3 hidden"
                        >
                            میزبان باشید
                        </NavLink>
                        <DropDown /> */}
            <a href="tel:09030949095" className="flex gap-2 text-base">
              <span className="flex items-center gap-2"> 
              {/* {supportIcon} */}
               تماس با ما : </span>
              <span className="text-red-400"> 09030949095 </span>
            </a>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
