import React, { useState, useEffect } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import BoxShadow from "./../../GlobalComponenet/BoxShadow";
import VillaCardSmall from "./componenet/VillaCardSmall";

const VillasContainer = styled.div``;

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
`;
function Villas(props) {
    const [ActiveSortingItem, setActiveSortingItem] = useState("مرتبط‌ ترین");

    const handleClickSort = (event) => {
        setActiveSortingItem(event.target.textContent);
    };

    const [typeVillafilter, setTypeVillafilter] = useState({
        villai: true,
        apartment: false,
        colbeh: false,
        jangali: true,
        Mahali: true,
        souit: true,
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
    };

    // get params url
    const [ParamsCity, setParamsCity] = useState("");
    const { city } = useParams();
    useEffect(() => {
        if (city) {
            setParamsCity(city);
        } else{
            setParamsCity('همه موارد');
        }
        return () => {
            setParamsCity(null);
        };
    }, [ParamsCity]);

    return (
        <MainSection className="container mx-auto">
            <div className="w-10/12 mx-auto">
                <div className="">
                    <BoxShadow>
                        <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-3 my-2">
                            <div>
                                <Link to="/" className="hover:text-red-400"> ویلا کده </Link>
                                <span> / </span>
                                <span className="text-xl font-medium text-gray-400 ">
                                    اجاره ویلا در {ParamsCity}
                                </span>
                            </div>
                            <div className="text-lg ">
                                <span className="text-black font-semibold mx-2">
                                    1,300
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
                                <span className="font-semibold flex items-center gap-2">
                                    <FaSortAmountDownAlt size={20} />
                                    <span> مرتب سازی : </span>
                                </span>
                                <div className="md:flex gap-4 hidden ">
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "مرتبط‌ ترین"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer `}
                                    >
                                        مرتبط‌ ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem == "پربازدید ترین"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer`}
                                    >
                                        پربازدید ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem == "محبوبترین"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer`}
                                    >
                                        محبوبترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "ارزان‌ترین"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer`}
                                    >
                                        ارزان‌ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem === "گران ترین"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer`}
                                    >
                                        گران ترین
                                    </span>
                                    <span
                                        onClick={handleClickSort}
                                        className={`${
                                            ActiveSortingItem ===
                                            "پیشنهادات خریداران"
                                                ? "text-red-400 font-semibold"
                                                : ""
                                        } cursor-pointer`}
                                    >
                                        پیشنهادات خریداران
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                                {[...Array(18)].map((item, index) => (
                                    <div className="col">
                                        <VillaCardSmall />
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
