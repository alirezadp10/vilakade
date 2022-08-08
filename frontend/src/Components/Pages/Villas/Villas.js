import React, { useState, useEffect } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import BoxShadow from "./../../GlobalComponenet/BoxShadow";
import VillaCardSmall from "./componenet/VillaCardSmall";

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

//
import { ComputePrice } from "../../../GeneralFunction/Functions";

const VillasContainer = styled.div``;

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
`;
function Villas(props) {
    const [ActiveSortingItem, setActiveSortingItem] = useState("related");

    const handleClickSort = (event) => {
        const nameSort = event.target.getAttribute("name");
        setActiveSortingItem(nameSort);
        switch (nameSort) {
            case "related":
                console.log("related");
                // VillasList.sort((a,b)=>a.)
                const relatedSort = VillasList.sort(function (a, b) {
                    // var nameA = a.seen.toLowerCase(), nameB = b.seen.toLowerCase();
                    var nameA = a.id,
                        nameB = b.id;
                    if (nameA < nameB)
                        //sort string ascending
                        return -1;
                    if (nameA > nameB) return 1;
                    return 0; //default return value (no sorting)
                });
                setVillasList(relatedSort);
                break;
            case "visited":
                console.log("visited");
                const vistedSort = VillasList.sort(function (a, b) {
                    // var nameA = a.seen.toLowerCase(), nameB = b.seen.toLowerCase();
                    var nameA = a.seen,
                        nameB = b.seen;
                    if (nameA < nameB)
                        //sort string ascending
                        return 1;
                    if (nameA > nameB) return -1;
                    return 0; //default return value (no sorting)
                });
                setVillasList(vistedSort);
                break;
            case "popular":
                console.log("popular");
                const popularSort = VillasList.sort(function (a, b) {
                    // var nameA = a.seen.toLowerCase(), nameB = b.seen.toLowerCase();
                    var nameA = a.seen,
                        nameB = b.seen;
                    if (nameA < nameB)
                        //sort string ascending
                        return 1;
                    if (nameA > nameB) return -1;
                    return 0; //default return value (no sorting)
                });
                setVillasList(popularSort);
                break;
            case "cheapest":
                console.log("cheapest");
                const CheapSort = VillasList.sort(function (a, b) {
                    // var nameA = a.seen.toLowerCase(), nameB = b.seen.toLowerCase();
                    var nameA = ComputePrice(a.price, a.discount),
                        nameB = ComputePrice(b.price, b.discount);
                    if (nameA < nameB)
                        //sort string ascending
                        return 1;
                    if (nameA > nameB) return -1;
                    return 0; //default return value (no sorting)
                });
                setVillasList(CheapSort);
                break;
            case "expensive":
                console.log("expensive");
                const ExpensiveSort = VillasList.sort(function (a, b) {
                    // var nameA = a.seen.toLowerCase(), nameB = b.seen.toLowerCase();
                    var nameA = a.price,
                        nameB = b.price;
                    if (nameA < nameB)
                        //sort string ascending
                        return -1;
                    if (nameA > nameB) return 1;
                    return 0; //default return value (no sorting)
                });
                setVillasList(ExpensiveSort);
                break;
            case "suggestions":
                console.log("suggestions");
                break;

            default:
                console.log("others");
                break;
        }
        // VillasList.sort((a,b) => a. )
    };

    const [typeVillafilter, setTypeVillafilter] = useState({
        villai: false,
        apartment: true,
        colbeh: false,
        jangali: false,
        Mahali: false,
        souit: false,
    });

    const [rateVillafilter, setRateVillafilter] = useState(4.5);
    const [FeatureVillafilter, setFeatureVillafilter] = useState({
        barbikio: false,
        netAccess: true,
        freeWifi: true,
        pole: false,
        biliardTable: false,
        tenis: false,
        heatingSystem: true,
        coolingSsytem: false,
        airConditionalSystem: false,
        tv: true,
        bed: true,
    });
    const [fastOrderfilter, setّfastOrderfilter] = useState(false);

    // handleChangeFilterCheckBox method
    const handleChangeFilterCheckBox = (event) => {
        let typechecked = event.target.checked;
        let typeName = event.target.name;

        setTypeVillafilter((prevState) => ({
            ...prevState,
            [typeName]: typechecked,
        }));

        console.log( 'typeVillafilter' )
        console.log( typeVillafilter )
    };

    useEffect(() => {
        console.log(typeVillafilter);
        
        console.log("refresh");
    }, [typeVillafilter]);

    // get params url
    const [ParamsCity, setParamsCity] = useState("");
    const { city } = useParams();
    useEffect(() => {
        if (city) {
            setParamsCity(city);
        } else {
            setParamsCity("همه موارد");
        }
        return () => {
            setParamsCity(null);
        };
    }, [ParamsCity]);

    const [VillasList, setVillasList] = useState([
        {
            id: 125,
            name: "اجاره ویلا شماره یک",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "1000000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
            discount: 20,
            seen: 10,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Apartment", "local"],
        },
        {
            id: 126,
            name: "اجاره ویلا شماره دو",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "2200000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
            discount: 8,
            seen: 15,
            rate: 4.5,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["", "local"],
        },
        {
            id: 127,
            name: "اجاره ویلا شماره 44 nkdl nd d 44",
            country: "iran",
            State: "مازندران",
            city: "رامسر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "800000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 1,
            discount: 0,
            seen: 5,
            rate: 2,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Apartment", "local"],
        },
        {
            id: 128,
            name: "اجاره ویلا شماره 4",
            country: "iran",
            State: "مازندران",
            city: "چالوس",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "13000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 2,
            discount: 15,
            seen: 100,
            rate: 3.2,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Suite"],
        },
        {
            id: 129,
            name: "اجاره ویلا شماره 5",
            country: "iran",
            State: "مازندران",
            city: "بابلسر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "8900000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 2,
            discount: 80,
            seen: 480,
            rate: 4,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Cottage"],
        },
        {
            id: 130,
            name: "اجاره ویلا شماره 6",
            country: "iran",
            State: "گرگان",
            city: "ماسال",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1000000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 2,
            discount: 45,
            seen: 30,
            rate: 3.6,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Cottage", "Villa"],
        },
        {
            id: 131,
            name: "اجاره ویلا شماره 7",
            country: "iran",
            State: "گیلان",
            city: "گرگان",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "3300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: [birthday, marry, luxery, relax, flat],
            reserveStatus: 2,
            discount: 35,
            seen: 111,
            rate: 2.8,
            properties: {
                rooms: 2,
                Area: 125,
                Area: 1256,
                Furniture: true,
                heatingSystem: true,
                CoolingSystem: true,
                Parking: true,
            },
            type: ["Villa"],
        },
    ]);

    

    return (
        <MainSection className="container mx-auto">
            <div className="w-10/12 mx-auto">
                <div className="">
                    <BoxShadow>
                        <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-3 my-2">
                            <div>
                                <Link to="/" className="hover:text-red-400">
                                    {" "}
                                    ویلا کده{" "}
                                </Link>
                                <span> / </span>
                                <span className="text-xl font-medium text-gray-400 ">
                                    اجاره ویلا در {ParamsCity}
                                </span>
                            </div>
                            <div className="text-lg ">
                                <span className="text-black font-semibold mx-2">
                                    {VillasList.length}
                                </span>
                                <span className="text-gray-500">
                                    اقامتگاه برای شما
                                </span>
                            </div>
                        </div>
                    </BoxShadow>
                </div>
                <div className="md:grid md:grid-cols-4 grid-cols-1 mt-4 md:gap-4">
                    <div className="col w-full md:block hidden">
                        <form>
                            <ul className="flex flex-col gap-4">
                                <li className="w-full">
                                    <BoxShadow>
                                        <h4 className="font-semibold flex justify-between items-start">
                                            <span> نوع اقامتگاه </span>
                                            <BiHomeSmile size={20} />
                                        </h4>
                                        <ul className="flex flex-col gap-3 mt-3">
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="apartment"
                                                    size="50"
                                                    name="apartment"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.apartment
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="apartment">
                                                    اپارتمانی
                                                </label>
                                            </li>
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="jangali"
                                                    size="50"
                                                    name="jangali"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.jangali
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="jangali">
                                                    جنگلی
                                                </label>
                                            </li>
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="Mahali"
                                                    size="50"
                                                    name="Mahali"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.Mahali
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="Mahali">
                                                    محلی
                                                </label>
                                            </li>
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="villai"
                                                    size="50"
                                                    name="villai"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.villai
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="villai">
                                                    {" "}
                                                    ویلایی{" "}
                                                </label>
                                            </li>
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="colbeh"
                                                    size="50"
                                                    name="colbeh"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.colbeh
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="colbeh">
                                                    {" "}
                                                    کلبه{" "}
                                                </label>
                                            </li>
                                            <li className="flex justify-start gap-x-4 items-center">
                                                <input
                                                    id="souit"
                                                    size="50"
                                                    name="souit"
                                                    type="checkbox"
                                                    checked={
                                                        typeVillafilter.souit
                                                    }
                                                    onChange={
                                                        handleChangeFilterCheckBox
                                                    }
                                                    className="scale-150"
                                                />
                                                <label htmlFor="souit">
                                                    {" "}
                                                    سوییت{" "}
                                                </label>
                                            </li>
                                        </ul>
                                    </BoxShadow>
                                </li>
                                {/* <li>
                                    <BoxShadow>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="fori">
                                                {" "}
                                                سوییت{" "}
                                            </label>
                                            <label className="MySwitch">
                                                <input
                                                    id="fori"
                                                    type="checkbox"
                                                />
                                                <span className="MySwichSlider round"></span>
                                            </label>
                                        </div>
                                    </BoxShadow>
                                </li> */}
                            </ul>
                        </form>
                    </div>
                    <div className="col-span-3 ">
                        <div className="my-4 flex justify-between items-center">
                            <div className="flex justify-start gap-4 text-sm">
                                <span className="font-semibold flex items-center gap-2 text-gray-600">
                                    <FaSortAmountDownAlt size={20} />
                                    <span> مرتب سازی : </span>
                                </span>
                                <div className="md:flex gap-4 hidden text-gray-400 font-normal">
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "related"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer  `}
                                        name="related"
                                    >
                                        مرتبط‌ ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem == "visited"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                        name="visited"
                                    >
                                        پربازدید ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem == "popular"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                        name="popular"
                                    >
                                        محبوبترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "cheapest"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                        name="cheapest"
                                    >
                                        ارزان‌ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "expensive"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                        name="expensive"
                                    >
                                        گران ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "suggestions"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                        name="suggestions"
                                    >
                                        پیشنهادات خریداران
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                                {VillasList.map((item, index) => (
                                    <div className="col">
                                        <VillaCardSmall villa={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default Villas;
