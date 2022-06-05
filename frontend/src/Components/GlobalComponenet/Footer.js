import React, { useState } from "react";
import styled from "styled-components";
import AccordionFaq from "./Accodtion/AccordionFaq";
import SecondaryTitle from "../SecondaryComponent/SecondaryTitle";
import { BsArrowLeftShort, BsInstagram } from "react-icons/bs";
import { etehadieImg, nemadEtemmadImg, rezaImg } from "../variables";
import { NavLink } from "react-router-dom";
import { getWindowDimensions } from "../DimentionWidthHeightScreen";

const FooterContainer = styled.div``;

const footertext = `یکی از مهم‌ترین دغدغه‌های شروع هر سفر انتخاب محل اقامت و
اجاره ویلا است. این مساله با توجه به روحیه افراد می‌تواند به
مساله دشواری تبدیل شود. انتخاب‌های متفاوتی از جمله ویلا،
اقامتگاه های بوم گردی و سوییت‌ پیش روی مسافران است. با توجه
به محدودیت‌ها،یکی از مهم‌ترین دغدغه‌های شروع هر سفر انتخاب محل اقامت و
اجاره ویلا است. این مساله با توجه به روحیه افراد می‌تواند به
مساله دشواری تبدیل شود. انتخاب‌های متفاوتی از جمله ویلا،
اقامتگاه های بوم گردی و سوییت‌ پیش روی مسافران است. با توجه
به محدودیت‌ها،یکی از مهم‌ترین دغدغه‌های شروع هر سفر انتخاب محل اقامت و
اجاره ویلا است. این مساله با توجه به روحیه افراد می‌تواند به
مساله دشواری تبدیل شود. انتخاب‌های متفاوتی از جمله ویلا،
اقامتگاه های بوم گردی و سوییت‌ پیش روی مسافران است. با توجه
به محدودیت‌ها، علاقه‌مندی‌ها و شرایطی که هر گروه ازمسافرا`;

const BottomFooterContainer = styled.div``;

const TagContainer = styled(NavLink)``;

function Footer() {
    const [ActiveMore, setActiveMore] = useState(true);

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    return (
        <FooterContainer>
            <div className="pt-8">
                <p className="text-sm leading-6">
                    {" "}
                    {ActiveMore
                        ? footertext
                        : footertext.substring(0, 200) + "..."}{" "}
                </p>
            </div>
            <div className="my-10">
                <SecondaryTitle title="سوالات متداول " />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full mx-auto">
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                    <div>
                        <AccordionFaq windowDimensions={windowDimensions} />
                    </div>
                   
                </div>
            </div>
            <div className="border-t-2 border-gray-200 py-5">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-0 space-y-2">
                    <div className="">
                        <h5 className="text-sm font-semibold mb-3">
                            نحوه رزرو اقامتگاه
                        </h5>
                        <ul className="" hidden={windowDimensions.width<600 ? true : false}>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های متداول مهمان </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های مهمان </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های متداول متداول </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> متداول مهمان </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h5 className="text-sm font-semibold mb-3">
                            نحوه رزرو اقامتگاه
                        </h5>
                        <ul className="" hidden={windowDimensions.width<600 ? true : false}>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های متداول مهمان </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های مهمان </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> پرسش‌های متداول متداول </a>
                            </li>
                            <li className="text-sm font-normal mb-2">
                                <a href="#"> متداول مهمان </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h5 className="text-sm font-semibold mb-3">
                            {" "}
                            خدمات مشتریان{" "}
                        </h5>
                        <ul className="" hidden={windowDimensions.width<600 ? true : false}>
                            <li className="text-sm font-normal mb-2">
                                {" "}
                                <a href="#"> پرسش‌های متداول مهمان </a>{" "}
                            </li>
                            <li className="text-sm font-normal mb-2">
                                {" "}
                                <a href="#"> پرسش‌های مهمان </a>{" "}
                            </li>
                            <li className="text-sm font-normal mb-2">
                                {" "}
                                <a href="#"> پرسش‌های متداول متداول </a>{" "}
                            </li>
                            <li className="text-sm font-normal mb-2">
                                {" "}
                                <a href="#"> متداول مهمان </a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h5 className="text-sm font-semibold mb-5 md:text-right text-center">
                            {" "}
                            ما را در شبکه‌های اجتماعی دنبال کنید:{" "}
                        </h5>
                        <div>
                            <form>
                                <div className="flex justify-between">
                                    <input
                                        type="email"
                                        placeholder="ایمیل خود را وارد کنید ..."
                                        className=" rounded-lg px-3 py-3 bg-white text-sm ml-2 w-full focus:outline-none "
                                    />
                                    <input
                                        type="submit"
                                        value="تایید"
                                        className="bg-red-400 text-sm text-white rounded-lg px-4 py-3 focus:outline-none"
                                    />
                                </div>
                            </form>
                            <div className="flex md:justify-start justify-center mt-4">
                                <span className="rounded-lg bg-white text-red-400 p-3 ml-2 ">
                                    <BsInstagram size={25} />
                                </span>
                                <span className="rounded-lg bg-white text-red-400 p-3 ml-2">
                                    <BsInstagram size={25} />
                                </span>
                                <span className="rounded-lg bg-white text-red-400 p-3 ml-2">
                                    <BsInstagram size={25} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomFooterContainer className="border-t-2 border-gray-200 pt-5">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-1">
                    <div className="md:col-span-2 col-span-1 order-2 md:order-1">
                        <div className="flex flex-wrap gap-2">
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                541325413254132
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                5413254 1332
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                54132
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                5413254132
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                13254132
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                            <TagContainer
                                to="/login"
                                className="border-2 border-gray-200 rounded-full py-1 px-3 hover:border-gray-300 flex justify-between items-center"
                            >
                                541325413254132
                                <BsArrowLeftShort size={20} className="mr-3" />
                            </TagContainer>
                        </div>
                        <p className="text-sm fony-normal mt-3">
                            {" "}
                            اد می‌تواند به مساله دشواری تبدیل شود. انتخاب‌های اد
                            می‌تواند به مساله دشواری تبدیل شود. انتخاب‌های اد
                            می‌تواند به مساله دشواری تبدیل شود. انتخاب‌های
                            متفاوتی از جمله ویلا، اقامتگاه های بوم گردی و سو{" "}
                        </p>
                    </div>
                    <div className="col-span-1 order-1 md:order-2 mb-4 md:mt-0">
                        <div className="flex justify-end gap-5 items-center">
                            <div className="p-2">
                                <img src={rezaImg} className="h-32" />
                            </div>
                            <div className="p-2">
                                <img src={etehadieImg} className="h-32" />
                            </div>
                            <div className="p-2">
                                <img src={nemadEtemmadImg} className="h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </BottomFooterContainer>
        </FooterContainer>
    );
}

export default Footer;
