import React, { useState } from "react";
import styled from "styled-components";
import GroupByComponent from "./GroupByComponent";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/red.css"

import { useForm } from "react-hook-form";
import { useUserState } from "../../../Providers/UserProvider";

const PanleContainer = styled.div``;

function PanelComponenet(props) {
    const { activePanel } = props;

    const [fullname, setFullname] = useState("sepehran babaei");
    const [email, setEmail] = useState("b.sepehrangmail.com");
    const [gender, setGender] = useState("male ");
    const [birthdayDate, setBirthdayDate] = useState("1375/03/10 ");
    const [country, setCountry] = useState("iran");
    const [city, setCity] = useState("tehran ");
    const [telephoneCode, setTelephoneCode] = useState("021 ");
    const [telephone, setTelephone] = useState("1234567896 ");
    const [cellPhoneNumber, setCellPhoneNumber] = useState("9030949095 ");
    const [bio, setBio] = useState("یه سری توضیحات ردباره من  ");

    const [state, setState] = useState("tehran");
    const [address, setAddress] = useState(
        "تهران - خیابان فرشته - خیابان اریا - پلاک 5"
    );

    const handleOnchange = (event) => {
        console.log(event.target.value);
    };

    const userInfo = useUserState();

    return (
        <PanleContainer>
            <div>
                <GroupByComponent name="اطلاعات شخصی شما">
                    <form>
                        <div className="grid md:gap-x-8 gap-y-4 md:grid-cols-2 grid-cols-1">
                            <div className="col">
                                <InputComponent
                                    // {...register("fullname")}
                                    type="text"
                                    title=" نام کامل"
                                    value={userInfo.fullname}
                                    placeholder="نام کامل خود را وارد کنید ..."
                                    name="fullname"
                                    // HandleonChange={handleChnageInputText}
                                />
                            </div>
                            <div className="col">
                                <InputComponent
                                    type="email"
                                    title="ایمیل"
                                    value={userInfo.email}
                                    placeholder="  ادرس ایمیل خود را وارد کنید ..."
                                    name="email"
                                    // HandleonChange={setEmail}
                                />
                            </div>
                            <div className="col">
                                <label
                                    htmlFor="gender"
                                    className="mr-3 text-base text-gray-700 "
                                >
                                    جنسیت
                                </label>
                                <select
                                    id="gender"
                                    className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                                >
                                    <option className="hover:bg-gray-200 indent-50px">
                                        {" "}
                                        آقا
                                    </option>
                                    <option className="hover:bg-gray-200 indent-50px">
                                        خانم
                                    </option>
                                </select>
                            </div>
                            {/* <div className="col">
                                <InputComponent
                                    type="text"
                                    title="جنسیت"
                                    value={userInfo.gender}
                                    placeholder=" شماره تماس خود را وارد کنید ..."
                                    name="gender"
                                />
                            </div> */}
                            <div className="col">
                                {/* <InputComponent
                                    type="text"
                                    title="تاریخ تولد "
                                    value={userInfo.birthdayDate}
                                    placeholder="  تاریخ تولد خود را وارد کنید ..."
                                    name="birthdayDate"
                                /> */}
                                <label
                                    htmlFor="birthDate"
                                    className="mr-3 text-base text-gray-700 "
                                >
                                    تاریخ تولد
                                </label>
                                <div>
                                    <DatePicker
                                        animations={[
                                            opacity(),
                                            transition({
                                                from: 35,
                                                duration: 300,
                                            }),
                                        ]}
                                        render={
                                            <InputIcon id="birthDate" className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none" />
                                        }
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        value={userInfo.birthdayDate}
                                        onChange={() => console.log("date")}
                                        style={{width : '100%'}}
                                        containerStyle={{
                                            width:'100%'
                                        }}
                                        className="red"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <InputComponent
                                    type="text"
                                    title=" تلفن ثابت  "
                                    value={`${userInfo.telephone}`}
                                    placeholder="   تلفن ثابت خود را وارد کنید ..."
                                    name="telephone"
                                />
                            </div>
                            <div className="col">
                                <InputComponent
                                    type="text"
                                    title=" شماره همراه"
                                    value={`${userInfo.cellPhoneNumber}`}
                                    placeholder="    شماره همراه خود را وارد کنید ..."
                                    name="cellPhoneNumber"
                                />
                            </div>
                            <div className="md:col-span-2 col-span-1">
                                <TextAreaComponent
                                    type="number"
                                    title="  درباره من   "
                                    value={userInfo.bio}
                                    placeholder="درباره خود برای ما بنویسید ..."
                                    name="bio"
                                />
                            </div>
                        </div>
                    </form>
                </GroupByComponent>
            </div>

            <div className="mt-10">
                <GroupByComponent name=" ادرس سکونت فعلی شما ">
                    <form>
                        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 grid-cols-1">
                            <div className="col">
                                <InputComponent
                                    type="text"
                                    title="استان محل سکونت شما "
                                    value={userInfo.state}
                                    placeholder="استان محل سکونت خود را انتخاب کنید ..."
                                    name="state"
                                />
                            </div>
                            <div className="col">
                                <InputComponent
                                    type="text"
                                    title="شهر محل سکونت شما "
                                    value={userInfo.city}
                                    placeholder="شهر محل سکونت خود را انتخاب کنید ..."
                                    name="city"
                                />
                            </div>
                            <div className="md:col-span-2 col-span-1">
                                <InputComponent
                                    type="text"
                                    title="ادرس محل سکونت شما "
                                    value={userInfo.address}
                                    placeholder="ادرس  محل سکونت خود را انتخاب کنید ..."
                                    name="address"
                                />
                            </div>
                        </div>
                    </form>
                </GroupByComponent>
            </div>
        </PanleContainer>
    );
}

export default PanelComponenet;
