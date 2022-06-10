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
import "react-multi-date-picker/styles/colors/red.css";

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

    const [userInformation, setuserInformation] = useState({
        address: {
            country: "iran",
            state: "",
            city: "",
            address: "",
            plaque: "",
        },
        Pinfo: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            phone: "",
            Emtelephone: "",
            gender: "",
            birthDate: "",
            birthDay: "",
            birthMonth: "",
            birthYear: "",
            bio: "",
        },
    });

    //  inpout on change
    const handleInputAddressChnage = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setuserInformation((prevstate) => ({
            address: {
                ...prevstate.address,
                [name]: value,
            },
            Pinfo: {
                ...prevstate.Pinfo,
            },
        }));
    };
    const handleInputProfileChnage = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setuserInformation((prevstate) => ({
            address: {
                ...prevstate.address,
            },
            Pinfo: {
                ...prevstate.Pinfo,
                [name]: value,
            },
        }));
    };

    //  submit profile 
    const hanleSubmitProfileInform = (event) =>{
        event.preventDefault();
        console.log(userInformation);
    }

    return (
        <PanleContainer>
            <form onSubmit={hanleSubmitProfileInform}>
                <div className="space-y-8">
                    <div className="Profile-Container">
                        <GroupByComponent name="اطلاعات شخصی شما">
                            <div className="grid gap-3 gap-x-5 grid-cols-2">
                                <div className="col">
                                    <label className="block"> نام شما : </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="text"
                                        name="firstName"
                                        placeholder="نام خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        {" "}
                                        نام خانوادگی شما :{" "}
                                    </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="text"
                                        name="lastName"
                                        placeholder="نام خانوادگی خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        {" "}
                                        ایمیل شما :{" "}
                                    </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="email"
                                        name="email"
                                        placeholder="ایمیل خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        {" "}
                                        شماره همراه شما :{" "}
                                    </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="phone"
                                        name="phoneNumber"
                                        placeholder="شماره همراه خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        {" "}
                                        شماره تلفن ثابت شما :{" "}
                                    </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="phone"
                                        name="phone"
                                        placeholder=" شماره تلفن ثابت خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        شماره اضطراری :{" "}
                                    </label>
                                    <input
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="phone"
                                        name="Emtelephone"
                                        placeholder=" شماره اضطراری خود را انتخاب کنید ..."
                                        onChange={handleInputProfileChnage}
                                    />
                                </div>
                                <div className="col">
                                    <label className="block mb-">
                                        جنسیت شما :
                                    </label>
                                    <select
                                        onChange={handleInputProfileChnage}
                                        name="gender"
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                    >
                                        <option
                                            name="male"
                                            value="مرد"
                                            label="مرد"
                                        />
                                        <option
                                            name="female"
                                            value="خانم"
                                            label="خانم"
                                        />
                                    </select>
                                </div>
                                <div className="col">
                                    <label className="block mb-">
                                        تاریخ تولد شما :
                                    </label>
                                    <div className="grid gap-3 grid-cols-4">
                                        <div className="col">
                                            <select
                                                onChange={handleInputProfileChnage}
                                                name="birthDay"
                                                className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                            >
                                                <option label="01" value="01" />
                                                <option
                                                    name="date"
                                                    label="01"
                                                    value="01"
                                                />
                                                <option
                                                    name="date"
                                                    label="02"
                                                    value="02"
                                                />
                                                <option
                                                    name="date"
                                                    label="03"
                                                    value="03"
                                                />
                                                <option
                                                    name="date"
                                                    label="04"
                                                    value="04"
                                                />
                                                <option
                                                    name="date"
                                                    label="05"
                                                    value="05"
                                                />
                                                <option
                                                    name="date"
                                                    label="06"
                                                    value="06"
                                                />
                                                <option
                                                    name="date"
                                                    label="07"
                                                    value="07"
                                                />
                                                <option
                                                    name="date"
                                                    label="08"
                                                    value="08"
                                                />
                                                <option
                                                    name="date"
                                                    label="09"
                                                    value="09"
                                                />
                                                <option
                                                    name="date"
                                                    label="10"
                                                    value="10"
                                                />
                                                <option
                                                    name="date"
                                                    label="11"
                                                    value="11"
                                                />
                                                <option
                                                    name="date"
                                                    label="12"
                                                    value="12"
                                                />
                                                <option
                                                    name="date"
                                                    label="13"
                                                    value="13"
                                                />
                                                <option
                                                    name="date"
                                                    label="14"
                                                    value="14"
                                                />
                                                <option
                                                    name="date"
                                                    label="15"
                                                    value="15"
                                                />
                                                <option
                                                    name="date"
                                                    label="16"
                                                    value="16"
                                                />
                                                <option
                                                    name="date"
                                                    label="17"
                                                    value="17"
                                                />
                                                <option
                                                    name="date"
                                                    label="18"
                                                    value="18"
                                                />
                                                <option
                                                    name="date"
                                                    label="19"
                                                    value="19"
                                                />
                                                <option
                                                    name="date"
                                                    label="20"
                                                    value="20"
                                                />
                                                <option
                                                    name="date"
                                                    label="21"
                                                    value="21"
                                                />
                                                <option
                                                    name="date"
                                                    label="22"
                                                    value="22"
                                                />
                                                <option
                                                    name="date"
                                                    label="23"
                                                    value="23"
                                                />
                                                <option
                                                    name="date"
                                                    label="24"
                                                    value="24"
                                                />
                                                <option
                                                    name="date"
                                                    label="25"
                                                    value="25"
                                                />
                                                <option
                                                    name="date"
                                                    label="26"
                                                    value="26"
                                                />
                                                <option
                                                    name="date"
                                                    label="27"
                                                    value="27"
                                                />
                                                <option
                                                    name="date"
                                                    label="28"
                                                    value="28"
                                                />
                                                <option
                                                    name="date"
                                                    label="29"
                                                    value="29"
                                                />
                                                <option
                                                    name="date"
                                                    label="30"
                                                    value="30"
                                                />
                                                <option
                                                    name="date"
                                                    label="31"
                                                    value="31"
                                                />
                                            </select>
                                        </div>
                                        <div className="col">
                                            <select
                                                onChange={handleInputProfileChnage}
                                                name="birthMonth"
                                                className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                            >
                                                <option
                                                    name="month"
                                                    label="01"
                                                    value="01"
                                                />
                                                <option
                                                    name="month"
                                                    label="02"
                                                    value="02"
                                                />
                                                <option
                                                    name="month"
                                                    label="03"
                                                    value="03"
                                                />
                                                <option
                                                    name="month"
                                                    label="04"
                                                    value="04"
                                                />
                                                <option
                                                    name="month"
                                                    label="05"
                                                    value="05"
                                                />
                                                <option
                                                    name="month"
                                                    label="06"
                                                    value="06"
                                                />
                                                <option
                                                    name="month"
                                                    label="07"
                                                    value="07"
                                                />
                                                <option
                                                    name="month"
                                                    label="08"
                                                    value="08"
                                                />
                                                <option
                                                    name="month"
                                                    label="09"
                                                    value="09"
                                                />
                                                <option
                                                    name="month"
                                                    label="10"
                                                    value="10"
                                                />
                                                <option
                                                    name="month"
                                                    label="11"
                                                    value="11"
                                                />
                                                <option
                                                    name="month"
                                                    label="12"
                                                    value="12"
                                                />
                                            </select>
                                        </div>
                                        <div className="col col-span-2">
                                            <select
                                                onChange={handleInputProfileChnage}
                                                name="birthYear"
                                                className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                            >
                                                <option
                                                    name="years"
                                                    label="1360"
                                                    value="1360"
                                                />
                                                <option
                                                    name="years"
                                                    label="1361"
                                                    value="1361"
                                                />
                                                <option
                                                    name="years"
                                                    label="1362"
                                                    value="1362"
                                                />
                                                <option
                                                    name="years"
                                                    label="1363"
                                                    value="1363"
                                                />
                                                <option
                                                    name="years"
                                                    label="1364"
                                                    value="1364"
                                                />
                                                <option
                                                    name="years"
                                                    label="1365"
                                                    value="1365"
                                                />
                                                <option
                                                    name="years"
                                                    label="1366"
                                                    value="1366"
                                                />
                                                <option
                                                    name="years"
                                                    label="1367"
                                                    value="1367"
                                                />
                                                <option
                                                    name="years"
                                                    label="1368"
                                                    value="1368"
                                                />
                                                <option
                                                    name="years"
                                                    label="1369"
                                                    value="1369"
                                                />
                                                <option
                                                    name="years"
                                                    label="1370"
                                                    value="1370"
                                                />
                                                <option
                                                    name="years"
                                                    label="1371"
                                                    value="1371"
                                                />
                                                <option
                                                    name="years"
                                                    label="1372"
                                                    value="1372"
                                                />
                                                <option
                                                    name="years"
                                                    label="1373"
                                                    value="1373"
                                                />
                                                <option
                                                    name="years"
                                                    label="1374"
                                                    value="1374"
                                                />
                                                <option
                                                    name="years"
                                                    label="1375"
                                                    value="1375"
                                                />
                                                <option
                                                    name="years"
                                                    label="1376"
                                                    value="1376"
                                                />
                                                <option
                                                    name="years"
                                                    label="1377"
                                                    value="1377"
                                                />
                                                <option
                                                    name="years"
                                                    label="1378"
                                                    value="1378"
                                                />
                                                <option
                                                    name="years"
                                                    label="1379"
                                                    value="1379"
                                                />
                                                <option
                                                    name="years"
                                                    label="1380"
                                                    value="1380"
                                                />
                                                <option
                                                    name="years"
                                                    label="1381"
                                                    value="1381"
                                                />
                                                <option
                                                    name="years"
                                                    label="1382"
                                                    value="1382"
                                                />
                                                <option
                                                    name="years"
                                                    label="1383"
                                                    value="1383"
                                                />
                                                <option
                                                    name="years"
                                                    label="1384"
                                                    value="1384"
                                                />
                                                <option
                                                    name="years"
                                                    label="1385"
                                                    value="1385"
                                                />
                                                <option
                                                    name="years"
                                                    label="1386"
                                                    value="1386"
                                                />
                                                <option
                                                    name="years"
                                                    label="1387"
                                                    value="1387"
                                                />
                                                <option
                                                    name="years"
                                                    label="1388"
                                                    value="1388"
                                                />
                                                <option
                                                    name="years"
                                                    label="1389"
                                                    value="1389"
                                                />
                                                <option
                                                    name="years"
                                                    label="1390"
                                                    value="1390"
                                                />
                                                <option
                                                    name="years"
                                                    label="1391"
                                                    value="1391"
                                                />
                                                <option
                                                    name="years"
                                                    label="1392"
                                                    value="1392"
                                                />
                                                <option
                                                    name="years"
                                                    label="1393"
                                                    value="1393"
                                                />
                                                <option
                                                    name="years"
                                                    label="1394"
                                                    value="1394"
                                                />
                                                <option
                                                    name="years"
                                                    label="1395"
                                                    value="1395"
                                                />
                                                <option
                                                    name="years"
                                                    label="1396"
                                                    value="1396"
                                                />
                                                <option
                                                    name="years"
                                                    label="1397"
                                                    value="1397"
                                                />
                                                <option
                                                    name="years"
                                                    label="1398"
                                                    value="1398"
                                                />
                                                <option
                                                    name="years"
                                                    label="1399"
                                                    value="1399"
                                                />
                                                <option
                                                    name="years"
                                                    label="1400"
                                                    value="1400"
                                                />
                                                <option
                                                    name="years"
                                                    label="1401"
                                                    value="1401"
                                                />
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-">
                                        درباره من :
                                    </label>
                                    <textarea
                                        onChange={handleInputProfileChnage}
                                        name="bio"
                                        rows={5}
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                    ></textarea>
                                </div>
                            </div>
                        </GroupByComponent>
                    </div>

                    <div className="mt-10">
                        <GroupByComponent name=" ادرس سکونت فعلی شما ">
                            <div className="grid gap-3 gap-x-5 grid-cols-2">
                                <div className="col">
                                    <label className="block mb-1">
                                        استان محل زندگی شما :
                                    </label>
                                    <select
                                        onChange={handleInputAddressChnage}
                                        name="state"
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                    >
                                        <option value="استان خود را انتخاب کنید" />
                                        <option
                                            name="male"
                                            label="تهران"
                                            value="تهران"
                                        />
                                        <option
                                            name="male"
                                            label="البرز"
                                            value="البرز"
                                        />
                                        <option
                                            name="male"
                                            label="گیلان"
                                            value="گیلان"
                                        />
                                        <option
                                            name="male"
                                            label="مازندران"
                                            value="مازندران"
                                        />
                                        <option
                                            name="male"
                                            label="گرگان"
                                            value="گرگان"
                                        />
                                    </select>
                                </div>
                                <div className="col">
                                    <label className="block mb-1">
                                        شهر محل زندگی شما :
                                    </label>
                                    <select
                                        onChange={handleInputAddressChnage}
                                        name="city"
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                    >
                                        <option value="شهر خود را انتخاب کنید" />
                                        <option
                                            name="male"
                                            label="تهران"
                                            value="تهران"
                                        />
                                        <option
                                            name="male"
                                            label="تهران"
                                            value="تهران"
                                        />
                                        <option
                                            name="male"
                                            label="تهران"
                                            value="تهران"
                                        />
                                        <option
                                            name="male"
                                            label="تهران"
                                            value="تهران"
                                        />
                                        <option
                                            name="female"
                                            label="شهریار"
                                            value="شهریار"
                                        />
                                        <option
                                            name="female"
                                            label="شهر قدس"
                                            value="شهر قدس"
                                        />
                                        <option
                                            name="female"
                                            label="اندیشه"
                                            value="اندیشه"
                                        />
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-1">
                                        ادرس محل زندگی شما :
                                    </label>
                                    <input
                                        onChange={handleInputAddressChnage}
                                        className="border-2 w-full border-gray-100 rounded-lg px-2 py-3"
                                        type="text"
                                        name="address"
                                        placeholder="ادرس خود را انتخاب کنید ..."
                                    />
                                </div>
                            </div>
                        </GroupByComponent>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-4/12 text-white text-xl py-4 rounded-2xl bg-red-400 hover:bg-red-500">
                            ذخیره
                        </button>
                    </div>
                </div>
            </form>
        </PanleContainer>
    );
}

export default PanelComponenet;

// <form>
//                         <div className="grid md:gap-x-8 gap-y-4 md:grid-cols-2 grid-cols-1">
//                             <div className="col">
//                                 <InputComponent
//                                     // {...register("fullname")}
//                                     type="text"
//                                     title=" نام کامل"
//                                     value={userInfo.fullname}
//                                     placeholder="نام کامل خود را وارد کنید ..."
//                                     name="fullname"
//                                     // HandleonChange={handleChnageInputText}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <InputComponent
//                                     type="email"
//                                     title="ایمیل"
//                                     value={userInfo.email}
//                                     placeholder="  ادرس ایمیل خود را وارد کنید ..."
//                                     name="email"
//                                     // HandleonChange={setEmail}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <label
//                                     htmlFor="gender"
//                                     className="mr-3 text-base text-gray-700 "
//                                 >
//                                     جنسیت
//                                 </label>
//                                 <select
//                                     id="gender"
//                                     className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
//                                 >
//                                     <option className="hover:bg-gray-200 indent-50px">
//                                         {" "}
//                                         آقا
//                                     </option>
//                                     <option className="hover:bg-gray-200 indent-50px">
//                                         خانم
//                                     </option>
//                                 </select>
//                             </div>
//                             {/* <div className="col">
//                                 <InputComponent
//                                     type="text"
//                                     title="جنسیت"
//                                     value={userInfo.gender}
//                                     placeholder=" شماره تماس خود را وارد کنید ..."
//                                     name="gender"
//                                 />
//                             </div> */}
//                             <div className="col">
//                                 {/* <InputComponent
//                                     type="text"
//                                     title="تاریخ تولد "
//                                     value={userInfo.birthdayDate}
//                                     placeholder="  تاریخ تولد خود را وارد کنید ..."
//                                     name="birthdayDate"
//                                 /> */}
//                                 <label
//                                     htmlFor="birthDate"
//                                     className="mr-3 text-base text-gray-700 "
//                                 >
//                                     تاریخ تولد
//                                 </label>
//                                 <div>
//                                     <DatePicker
//                                         animations={[
//                                             opacity(),
//                                             transition({
//                                                 from: 35,
//                                                 duration: 300,
//                                             }),
//                                         ]}
//                                         render={
//                                             <InputIcon id="birthDate" className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none" />
//                                         }
//                                         calendar={persian}
//                                         locale={persian_fa}
//                                         calendarPosition="bottom-right"
//                                         value={userInfo.birthdayDate}
//                                         onChange={() => console.log("date")}
//                                         style={{width : '100%'}}
//                                         containerStyle={{
//                                             width:'100%'
//                                         }}
//                                         className="red"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col">
//                                 <InputComponent
//                                     type="text"
//                                     title=" تلفن ثابت  "
//                                     value={`${userInfo.telephone}`}
//                                     placeholder="   تلفن ثابت خود را وارد کنید ..."
//                                     name="telephone"
//                                 />
//                             </div>
//                             <div className="col">
//                                 <InputComponent
//                                     type="text"
//                                     title=" شماره همراه"
//                                     value={`${userInfo.cellPhoneNumber}`}
//                                     placeholder="    شماره همراه خود را وارد کنید ..."
//                                     name="cellPhoneNumber"
//                                 />
//                             </div>
//                             <div className="md:col-span-2 col-span-1">
//                                 <TextAreaComponent
//                                     type="number"
//                                     title="  درباره من   "
//                                     value={userInfo.bio}
//                                     placeholder="درباره خود برای ما بنویسید ..."
//                                     name="bio"
//                                 />
//                             </div>
//                         </div>
//                     </form>
