import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";

const UserNoticeContainer = styled.div``;

function UserNoticPanelComponent() {
    const [notSeenMessage, setnotSeenMessage] = useState(3);
    const [activeTab, setActiveTab] = useState("one");

    return (
        <UserNoticeContainer>
            <div className="flex justify-between items-center ">
                <h2 className="mainHeader">اطلاعیه های شما </h2>
                <div className="tab flex justify-evenly gap-3 items-center">
                    <div
                        className={`  ${
                            activeTab === "one" ? "activeTab" : "tabBase"
                        }`}
                        name="one"
                        onClick={() => setActiveTab("one")}
                    >
                        <span> همه</span>
                    </div>
                    <div
                        className={`  ${
                            activeTab === "two" ? "activeTab" : "tabBase"
                        }`}
                        name="two"
                        onClick={() => setActiveTab("two")}
                    >
                        <span> خوانده نشده ها </span>
                        <span className=""> ( {notSeenMessage} ) </span>
                    </div>
                </div>
            </div>
            <div className="messageList">
                <ul>
                    <li className="border-2 border-gray-100 mt-5 rounded-2xl hover:shadow-md duration-300 transition-shadow">
                        <div className="flex items-center justify-between m-4">
                            <h3 className="text-lg"> ویلای شما تایید شد </h3>
                            <span className="text-sm text-gray-500">
                                {" "}
                                1400/03/10{" "}
                            </span>
                        </div>
                        <p className="mx-4 text-gray-600 pb-4">
                            {" "}
                            جایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه ستان خود{" "}
                        </p>
                        <div className="flex justify-end">
                            <button className="bg-red-400 px-8 py-3 text-white font-medium rounded-bl-2xl rounded-tr-3xl flex items-center justify-center">
                                <span> مشاهده ویلا و جزییات سفارش شما </span>
                                <BsArrowLeftShort size={30} />
                            </button>
                        </div>
                    </li>
                    <li className="border-2 border-gray-100 mt-5 rounded-2xl hover:shadow-md duration-300 transition-shadow opacity-60">
                        <div className="flex items-center justify-between m-4">
                            <h3 className="text-lg"> ویلای شما تایید شد </h3>
                            <span className="text-sm text-gray-500">
                                1400/03/10
                            </span>
                        </div>
                        <p className="mx-4 text-gray-600 pb-4">
                            جایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه ستان خود
                        </p>
                        <div className="flex justify-end">
                            <button className="text-red-500 px-8 py-3 font-medium rounded-bl-2xl rounded-tr-3xl flex items-center justify-center">
                                <span> مشاهده ویلا و جزییات سفارش شما </span>
                                <BsArrowLeftShort size={30} />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </UserNoticeContainer>
    );
}

export default UserNoticPanelComponent;
