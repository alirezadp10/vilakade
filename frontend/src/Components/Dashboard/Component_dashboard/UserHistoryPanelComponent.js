import React, { useState, useEffect } from "react";

import styled from "styled-components";

import HistoryCard from "./HistoryCard";
import HistoryMainCardVertically from "./HistoryMainCardVertically";


// import image
import {
    birthday,
    marry,
    luxery,
    relax,
    flat,
    mostaghel,
    modern,
    dublex,
    Towni,
} from "../../../assets/imgs/Images";

const UserHistoryContainer = styled.div``;

function UserHistoryPanelComponent() {
    const [reservedNum, setReserved] = useState(8);
    const [cancledReservedNum, setCancledReservedNum] = useState(3);
    const [allReservedNum, setAllReservedNum] = useState(28);
    const [activeTab, setActiveTab] = useState("one");

    const [VillaInfo, setVillaInfo] = useState([
        {
            id: 125,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
        },
        {
            id: 126,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
        },
        {
            id: 127,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
        },
        {
            id: 128,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 2,
        },
    ]);

    // if(activeTab === 'one'){
    //     renderListCardHistory =  VillaInfo.filter( item => item.reserveStatus === 1);
    //     <HistoryCard VillaInfomation={item} />
    //     {VillaInfo.map((item) => {
    //         return <HistoryCard VillaInfomation={item} />;
    //     })}
    // }else if(activeTab ==='tow'){
    //     renderListCardHistory =  <HistoryCard VillaInfomation={item} />
    // }else{
    //     renderListCardHistory = <HistoryCard VillaInfomation={item} />
    // }

    // let villas = [] ;
    // useEffect(() => {
    // //   console.log('active changes')
    // //   console.log(activeTab);
    // func(activeTab);

    // }, [activeTab]);

    // const filterVillas = (tab) =>{
    //     let ff = tab === 'two' ?  2: 1;
    //     villas = VillaInfo.filter( item =>  item.reserveStatus==ff  );
    //     console.log('villas');
    //     console.log(villas);
    // }

    // const [ResultFilterArray, setResultFilterArray] = useState([]);
    // const func = () => {
    //     let resarray ;
    //     if (activeTab === "one") {
    //         resarray = VillaInfo;
    //         // VillaInfo.map((item) => {
    //         //     <HistoryCard VillaInfomation={item} />;
    //         // });
    //     } else if (activeTab === "two") {
    //         resarray = VillaInfo.filter(
    //             (item) => item.reserveStatus === 1
    //         );
    //         // cancledVilla.map((item) => {
    //         //     <HistoryCard VillaInfomation={item} />;
    //         // });
    //     } else if (activeTab === "three") {
    //         resarray = VillaInfo.filter(
    //             (item) => item.reserveStatus === 2
    //         );

    //         // reservedVilla.map((item) => {
    //         //     console.log(item);
    //         //     <HistoryCard VillaInfomation={item} />;
    //         // });
    //     }
    //     setResultFilterArray(resarray);
    // };

    return (
        <UserHistoryContainer>
            <div className="flex mb-4">
                <div
                    className={` ${
                        activeTab === "one" ? "activeTab" : "tabBase"
                    }`}
                    name="one"
                    onClick={() => setActiveTab("one")}
                >
                    <span className="radioActive animate-ping"></span>
                    <span>رزروهای فعلی ( {VillaInfo.length} )</span>
                </div>
                <div
                    className={`  ${
                        activeTab === "two" ? "activeTab" : "tabBase"
                    }`}
                    name="two"
                    onClick={() => setActiveTab("two")}
                >
                    <span> رزروهای لغو شده </span>
                    <span className="text-red-400">
                        (  {VillaInfo.filter(item=>item.reserveStatus == 2 ).length} )
                    </span>
                </div>
                <div
                    className={`  ${
                        activeTab === "three" ? "activeTab" : "tabBase"
                    }`}
                    name="three"
                    onClick={() => setActiveTab("three")}
                >
                    <span> رزروهای فعلی </span>
                    <span className="text-gray-400">(  {VillaInfo.filter(item=>item.reserveStatus ==1).length} )</span>
                </div>
            </div>
            <div className="space-y-5">
                {
                    activeTab === 'one' ? (
                        VillaInfo.map(item=>(
                            // <HistoryCard VillaInfomation={item} />
                            <HistoryMainCardVertically villaInfo={item} />
                        ))
                    ) : null
                }

                {
                     activeTab === 'two' ? (
                        VillaInfo.filter(item => item.reserveStatus == 2 ).map(item=>(
                            <HistoryCard VillaInfomation={item} />
                        ))
                    ) : null
                }

{
                     activeTab === 'three' ? (
                        VillaInfo.filter(item => item.reserveStatus == 1 ).map(item=>(
                            <HistoryCard VillaInfomation={item} />
                        ))
                    ) : null
                }

                {/* { villas.map((item) => {
                })} */}
                {/* {(() => {
                    

                    return null;
                })()} */}
            </div>
        </UserHistoryContainer>
    );
}

export default UserHistoryPanelComponent;
