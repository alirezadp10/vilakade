import React from "react";
import Avatar from "../../GlobalComponenet/Avatar";
import BoxShadow from "../../GlobalComponenet/BoxShadow";
import Menu from "./Menu";

function Sidebar(props) {
    const {user ,menuItems ,setActivePanel} = props;
    return (
        <div>
            <BoxShadow align="center">
                <Avatar src={user.imgsrc} size={20} />
                <div className="mt-2 pt-2">
                    <div className="text-2xl mb-1">{user.name}</div>
                    <div className="text-base text-gray-400">{user.number}</div>
                </div>
            </BoxShadow>
            <div className="mt-4">
                <BoxShadow>
                    <Menu MenuItems={menuItems}  />
                </BoxShadow>
            </div>
        </div>
    );
}

export default Sidebar;
