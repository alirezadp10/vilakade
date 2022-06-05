import React from "react";

function DropDownComponent() {
    return (
        <div>
            <button
                className="flex justify-between w-full items-center gap-2 border-2 border-gray-200 px-5 py-2 rounded-lg relative"
                onClick={() => setActiveDropDown(!activeDropDown)}
                ref={refDropDown}
            >
                <BiUserCircle size={30} className="text-gray-400" />
                <span> {userInfo.fullname} </span>
                <BiChevronDown />
                {activeDropDown && (
                    <DropDownContainer className=" absolute mt-0 top-full z-20 h-fit text-right bg-white shadow-lg left-0 right-0 rounded-lg rounded-tr-none rounded-tl-none border-2 border-t-0 py-2">
                        <ul className="px-2 py-1 space-y-2">
                            <li> آقا </li>
                            <li> خانم </li>
                        </ul>
                    </DropDownContainer>
                )}
            </button>
        </div>
    );
}

export default DropDownComponent;
