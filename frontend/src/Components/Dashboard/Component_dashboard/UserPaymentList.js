import React from "react";
import { FiClock } from "react-icons/fi";
import styled from "styled-components";

const UserPaymentContainer = styled.div``;

function UserPaymentList() {
    return (
        <UserPaymentContainer>
            <ul className="">
                <li className="border-2 border-green-500 rounded-2xl mb-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex md:flex-row flex-col justify-between">
                        <div className="m-4 flex md:flex-row flex-col md:justify-between justify-start md:items-center space-y-3 md:space-y-0">
                            <div className="">
                                <span> شماره ردیف : </span>
                                <span> 1 </span>
                            </div>
                            <div className="md:mx-8">
                                <span> کد رهگیری : : </span>
                                <span> 123456 </span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <span>15:20</span>
                                <span className="mx-1">-</span>
                                <span>1398/05/20</span>
                                <FiClock
                                    size={17}
                                    className="mr-2 text-gray-600 "
                                />
                            </div>
                        </div>
                        <div className="text-lg text-green-700 bg-green-100 px-3 py-3 rounded-br-2xl rounded-tl-xl">
                            <span> مبلغ : 25,000,000 ریال </span>
                        </div>
                    </div>
                    <div className="m-4 text-gray-600">
                        <p>
                            جایزه دعوت از دوستان خودجایزه دعوت از دوستان جایزه
                            دعوت از دوستان خودجایزه دعوت از دوستان جایزه دعوت از
                            دوستان خودجایزه دعوت از دوستان جایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان جایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان جایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خود
                        </p>
                    </div>
                </li>
                <li className="border-2 border-red-400 rounded-2xl mb-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between">
                        <div className="m-4 flex justify-between items-center">
                            <div className="">
                                <span> شماره ردیف : </span>
                                <span> 1 </span>
                            </div>
                            <div className="mx-8">
                                <span> کد رهگیری : : </span>
                                <span> 123456 </span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <span>15:20</span>
                                <span className="mx-1">-</span>
                                <span>1398/05/20</span>
                                <FiClock
                                    size={17}
                                    className="mx-1 text-gray-600 "
                                />
                            </div>
                        </div>
                        <div className=" text-lg text-red-700 bg-red-100 px-3 py-3 rounded-br-2xl rounded-tl-xl">
                            <span> مبلغ : 25,000,000 ریال </span>
                        </div>
                    </div>
                    <div className="m-4 text-gray-600">
                        <p>
                            جایزه دعوت از دوستان خودجایزه دعوت از دوستان جایزه
                            خودجایزه دعوت از دوستان خودجایزه دعوت از دوستان
                            خودجایزه دعوت از دوستان خود
                        </p>
                    </div>
                </li>
            </ul>
        </UserPaymentContainer>
    );
}

export default UserPaymentList;
