import React, { useState } from "react";
import { FiEdit, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import { image2 } from "../../variables";
import NumberFormat from "react-number-format";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HistoryCardContainer = styled.div``;

function HistoryCard(props) {
    console.log('first')
    const { VillaInfomation , activeTab } = props;
    console.log('VillaInfomation');
    console.log(VillaInfomation);

    // more box show or not
    const [openMoreBox, setOpenMoreBox] = useState(false);

    // naviaftor react router dome
    let navigate   = useNavigate();

    //  handle see villa 
    const handleSeeVilla  = (villaId) =>{
        alert(villaId);
        navigate(`/stay/${villaId}`);
    }

    return (
        <HistoryCardContainer>
            <div
                key={VillaInfomation.id}
                className="flex relative overflow-hidden rounded-3xl mb-3 hover:shadow-md transition-shadow duration-300"
            >
                <div className="flex md:flex-row flex-col justify-between w-full bg-red-400 ">
                    <div
                        className="md:w-11/12 w-full flex md:flex-row flex-col
                             justify-between bg-white rounded-2xl border-2 border-gray-100 relative"
                    >
                        <div className="absolute top-0 left-20 z-10 bg-green-100  rounded-br-2xl rounded-bl-2xl text-green-800 text-base">
                            <span className="font-semibold bg-green-200 h-full px-2 py-3  rounded-br-2xl">
                                زمان رزرو :
                            </span>
                            <span className="py-3 px-3 inline-block">
                                {VillaInfomation.reserveStartDate} - {VillaInfomation.reserveEndDate}
                            </span>
                        </div>
                        <div className="flex justify-start md:flex-row flex-col items-start">
                            <img
                                src={image2}
                                className="md:w-32 w-full md:h-24 md:m-4 rounded-xl"
                            />
                            <di className="mt-4">
                                <h3 className="text-base font-semibold">
                                    {VillaInfomation.name}
                                    45
                                </h3>
                                <div className="text-red-400 text-sm mt-2">
                                    {VillaInfomation.State} -{" "}
                                    {VillaInfomation.city}
                                </div>
                            </di>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <div className="relative">
                                <FiMoreVertical
                                    onClick={() => setOpenMoreBox(true)}
                                    size={25}
                                    className="text-gray-500 m-4"
                                />
                                {openMoreBox ? (
                                    <div className="absolute w-32 h-fit bg-white p-2 space-y-1 rounded-xl rounded-tl-none shadow-xl left-6 top-3 z-50">
                                        <div className="flex gap-x-2 items-center justify-start hover:bg-gray-50 rounded-lg px-1 py-2">
                                            <FiEdit size={20} />
                                            <span> ویرایش </span>
                                        </div>
                                        <div className="flex gap-x-2 text-red-400 items-center justify-start hover:bg-gray-50 rounded-lg px-1 py-2">
                                            <FiTrash2 size={20} />
                                            <span> حذف </span>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="price text-black text-xl font-bold m-4">
                                <span className="ml-1">
                                    <NumberFormat
                                        value={VillaInfomation.price}
                                        displayType="text"
                                        thousandSeparator={true}
                                    />
                                </span>
                                <span className="font-medium">ريال</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-400 md:w-1/12 w-full h-16 md:h-auto md:block flex justify-center relative cursor-pointer"
                    
                    onClick={()=>handleSeeVilla(VillaInfomation.id) }>
                        <div className="md:rotate-90 text-white h-full w-32  flex md:right-6 relative md:items-start items-center justify-center">
                            مشاهده ویلا
                        </div>
                    </div>
                </div>
            </div>
        </HistoryCardContainer>
    );
}

export default HistoryCard;
