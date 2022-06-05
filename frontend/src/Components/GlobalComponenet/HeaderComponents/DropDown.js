import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { CgProfile } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useUserState } from "../../../Providers/UserProvider";

import InfoModal from './../../GlobalComponenet/Modals/InfoModal';

const DropDownContainer = styled.div`
    left: -2px;
    right: -2px;
    bottom: -8px !important;
    top: 92%;
`;

function DropDown() {
    const [activeDropDown, setActiveDropDown] = useState(false);
    const userInfo = useUserState();

    //  use ref
    const refDropDown = useRef();

    // console.log("refDropDown");
    // console.log(refDropDown.current);

    useEffect(() => {
        const checkIfClickOutside = (event) => {
            if (
                activeDropDown &&
                refDropDown.current &&
                !refDropDown.current.contains(event.target)
            ) {
                setActiveDropDown(false);
            }
        };

        document.addEventListener("click", checkIfClickOutside);
        return () => {
            document.addEventListener("click", checkIfClickOutside);
        };
    }, [activeDropDown]);


    const [showModalError, setShowModalError] = useState(false);
    const onCloseUserFromProfile = () =>{
        // setShowModalError(true);
        if( window.confirm('از حساب خود خارج می شوید ؟') ){
            // if yes
            console.log('yes sure');
        }else{
            //  cancle
            console.log('no im stay');
        }
    }

    return (
        <div>
            <button
                className="flex justify-between items-center gap-2 border-2 border-gray-200 px-5 py-2 rounded-lg relative"
                onClick={() => setActiveDropDown(!activeDropDown)}
                ref={refDropDown}
            >
                <BiUserCircle size={30} className="text-gray-400" />
                <span> {userInfo.fullname} </span>
                <BiChevronDown />
                {activeDropDown && (
                    <DropDownContainer className=" absolute mt-0 top-full z-20 h-fit text-right bg-white shadow-lg left-0 right-0 rounded-lg rounded-tr-none rounded-tl-none border-2 border-t-0 py-2">
                        <ul className="px-2 py-1 space-y-2">
                            <NavLink
                                to="/profile/account"
                                className="flex justify-start items-center p-2 py-3 text-base text-gray-800 hover:bg-gray-100 rounded-xl"
                            >
                                <CgProfile size={20} className="ml-2" />
                                <span> مشاهده پروفایل </span>
                            </NavLink>
                            <NavLink
                                to="/"
                                className="flex justify-start items-center p-2 text-base text-gray-800 hover:bg-gray-100 rounded-xl"
                            >
                                <MdOutlineSpaceDashboard
                                    size={20}
                                    className="ml-2"
                                />
                                <span> داشبورد </span>
                            </NavLink>
                            <NavLink
                                to="/"
                                className="flex justify-start items-center p-2 text-base text-gray-800 hover:bg-gray-100 rounded-xl"
                            >
                                <AiOutlineHeart size={20} className="ml-2" />
                                <span> علاقه مندی ها </span>
                            </NavLink>
                            <NavLink
                                to="/support"
                                className="flex justify-start items-center p-2 text-base text-gray-800 hover:bg-gray-100 rounded-xl"
                            >
                                <RiCustomerService2Line
                                    size={20}
                                    className="ml-2"
                                />
                                <span>پشتیبانی </span>
                            </NavLink>
                            <div
                            onClick={onCloseUserFromProfile}
                                className="flex justify-start items-center p-2 text-base text-gray-800 hover:bg-gray-100 rounded-xl"
                            >
                                <FiLogOut size={20} className="ml-2" />
                                <span>خروج از حساب </span>
                            </div>
                        </ul>
                    </DropDownContainer>
                )}
            </button>
            {/* <InfoModal open={showModalError} /> */}
        </div>
    );
}

export default DropDown;
