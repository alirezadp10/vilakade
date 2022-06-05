import React from "react";
import { AiOutlineUserDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div``;

function Menu(props) {
    const { MenuItems } = props;

    const location = useLocation();

    return (
        <MenuContainer className="">
            <ul className="list-none">
                {MenuItems.map((item, index) => {
                    // console.log(item.param )
                    // console.log(location.pathname);
                    return (
                        <Link
                            to={{
                                pathname: `/profile/${item.param}`,
                            }}
                            key={item.id}
                            className={`py-4 px-3 my-1 flex gap-2 items-center cursor-pointer ${
                                location.pathname.indexOf(item.param) >0
                                    ? "active-menu-dashboard-item"
                                    : " bg-white"
                            } `}
                        >
                            <span>
                                <AiOutlineUserDelete size={20} />
                            </span>
                            <span> {item.title} </span>
                        </Link>
                    );
                })}
            </ul>
        </MenuContainer>
    );
}

export default Menu;
