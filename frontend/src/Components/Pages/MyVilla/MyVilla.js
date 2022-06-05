import React, { useState, useEffect } from "react";
import {
    FaMinus,
    FaPlus,
    FaSwimmingPool,
    FaUmbrellaBeach,
} from "react-icons/fa";
import { AiOutlineCar, AiOutlineFire } from "react-icons/ai";
import { GiFireplace } from "react-icons/gi";
import { SiGumtree } from "react-icons/si";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import {
    IoBedOutline,
    IoBonfireOutline,
    IoClose,
    IoGameControllerOutline,
    IoRestaurantOutline,
} from "react-icons/io5";
import {
    MdOutlineChair,
    MdOutlineWaterDrop,
    MdOutlineElectricalServices,
    MdOutlineShower,
    MdOutlineElevator,
    MdKitchen,
    MdOutlineLocalPolice,
    MdPets,
} from "react-icons/md";
import styled from "styled-components";
import GroupByBig from "./Component/GroupByBig";
import { BiArea, BiBuildings, BiBus, BiHome } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import RateComponent from "./Component/RateComponent";
import GroupByComponent from "../../Dashboard/Component_dashboard/GroupByComponent";
import SliderVillaContainer from "./Component/SliderVilla";
import { useParams } from "react-router-dom";

import { ComputePrice } from "./../../../GeneralFunction/Functions";
import NumberFormat from "react-number-format";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/red.css";
//gregorian calendar & locale
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { useUserState } from "../../../Providers/UserProvider";

const MainSection = styled.div``;

function MyVilla() {
    const { slug } = useParams();

    const [incOrDescError, setIncOrDescError] = useState("");

    const [mystay, setMystay] = useState({
        id: 125,
        name: "سوییت نقلی «دینا» در رشت",
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
        imgs: {},
        reserveStatus: 1,
        discount: 20,
        maxGuist: 5,
    });

    let useerInfo = useUserState();

    //  handle increase or descrease
    const HanldeIncGiust = () => {
        if (orderVillaInformation.guests < mystay.maxGuist) {
            setIncOrDescError("");
            let newGuests = orderVillaInformation.guests + 1;
            // setOrderVillaInformation((prevstate) => ({
            //     ...prevstate,
            //     guests,
            // }));
            setOrderVillaInformation((prevstat) => {
                return {
                    ...prevstat,
                    guests: newGuests,
                };
            });
        } else {
            setIncOrDescError(`ظرفیت ویلا ${mystay.maxGuist} می باشد`);
        }
    };
    const HanldeDecGiust = () => {
        if (orderVillaInformation.guests > 1) {
            setIncOrDescError("");
            // let guests = orderVillaInformation.guests - 1;
            // setOrderVillaInformation((prevstate) => ({
            //     ...prevstate,
            //     guests,
            // }));
            let newGuests = orderVillaInformation.guests - 1;
            // setOrderVillaInformation((prevstate) => ({
            //     ...prevstate,
            //     guests,
            // }));
            setOrderVillaInformation((prevstat) => {
                return {
                    ...prevstat,
                    guests: newGuests,
                };
            });
        } else {
            setIncOrDescError(`حداقل یک نفر باید بعنوان مهمان انتخاب شود`);
        }
    };

    // set date order
    const [state, setState] = useState({ format: "YYYY/MM/DD" });
    const startConvert = (date, format = state.format) => {
        let object = { date, format };
        // setOrderVillaInformation(prevstate => {
        //     return{
        //         ...orderVillaInformation,
        //         startDate :new DateObject(object).format(),
        //     }
        // })
        setOrderVillaInformation({
            // gregorian: new DateObject(object)
            //     .convert(gregorian, gregorian_fa)
            //     .format(),
            ...orderVillaInformation,
            startDate: new DateObject(object).format(),
        });
    };
    const endConvert = (date, format = state.format) => {
        let object = { date, format };

        // setOrderVillaInformation(prevstate => {
        //     return{
        //         ...orderVillaInformation,
        //         startDate :new DateObject(object).format(),
        //     }
        // })
        setOrderVillaInformation({
            // gregorian: new DateObject(object)
            //     .convert(gregorian, gregorian_fa)
            //     .format(),
            ...orderVillaInformation,
            endDate: new DateObject(object).format(),
        });
    };

    const [orderVillaInformation, setOrderVillaInformation] = useState({
        Id: 100,
        villaId: mystay.id,
        userId: useerInfo.id,
        guests: 1,
        startDate: "",
        endDate: "",
        price: mystay.price,
        newDiscount: mystay.discount,
    });

    //  submit order
    const onSubmitOrder = () => {
        console.log("subbmit order");
        console.log(orderVillaInformation);
        alert("order is submit" + useerInfo.fullname);
    };

    return (
        <MainSection className="container mx-auto">
            <div className="w-10/12 mx-auto">
                <div className="main-content mt-8">
                    <div className="grid md:grid-cols-6 grid-cols-1 md:gap-5 gap-y-5">
                        <div className="col-span-4">
                            <div>
                                <SliderVillaContainer />
                            </div>

                            <div className="Feature-list flex flex-col md:gap-5 gap-y-3 mt-4">
                                <div className="">
                                    <div className="text-lg">
                                        {/* { match.params.slug } */}
                                    </div>

                                    <GroupByBig name="درباره اقامتگاه">
                                        <p className="text-base leading-7">
                                            این ویلا 400 متری در روستای اسکنده
                                            محمودآباد، در محیطی دنج و آرام با
                                            فاصله ی کمتر از 30 دقیقه تا دریا
                                            واقع شده است. ویلا دارای 2 اتاق خواب
                                            مستر و مجهز به سیستم سرمایش و گرمایش
                                            مطلوب، 2 تخت دو نفره و یک تخت خواب
                                            تکنفره است. استخر این اقامتگاه داخل
                                            ساختمان، سرپوشیده و مجهز به آبگرم و
                                            سیستم تصفیه آب است، همچنین در قسمت
                                            استخر: جکوزی، حمام و سرویس بهداشتی
                                            فرنگی موجود است. حیاط به صورت دربست
                                            در اختیار مهمان قرار می گیرد و دارای
                                            باغچه، درخت میوه، باربیکیو و آلاچیق
                                            است. ورودی ویلا فقط یک پله کوتاه
                                            دارد که با توجه به این مورد و وجود
                                            سرویس بهداشتی فرنگی، اقامت برای
                                            سالمندان و مهمانان دارای معلولیت
                                            جسمی به راحتی امکان پذیر است.
                                            پارکینگ این ویلا به صورت روباز و
                                            برای 4 عدد ماشین جای پارک دارد. با
                                            توجه به موقعیت این ویلا از سوپر
                                            مارکت و نانوایی کمتر از 10 دقیقه
                                            بصورت پیاده فاصله دارد. از جاذبه های
                                            این منطقه: آب بندان بزرگ بیشه کلا
                                            (7.3 کیلومتر)، امام زاده زیدبن علی
                                            (8 کیلومتر)، پارک جنگلی تشبندان (19
                                            کیلومتر) و جنگل روستای اهلم (34
                                            کیلومتر) می باشد. درصورت رزرو برای
                                            اقامت بیشتر از یک شب، در بازه ی شنبه
                                            تا سه شنبه، دارای تخفیف است.
                                        </p>

                                        <div className="summary-About-villa mt-5 flex flex-col gap-y-5 ">
                                            <GroupByComponent name="مشخصات کلی ویلا">
                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3">
                                                    <div className="col flex items-start justify-start gap-1 text-lg">
                                                        <BiArea size={25} />
                                                        <span>
                                                            متراز زمین :
                                                        </span>
                                                        <span>
                                                            2,500,000 متر
                                                        </span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-2 text-lg">
                                                        <HiOutlineOfficeBuilding
                                                            size={25}
                                                        />
                                                        <span>متراز بنا :</span>
                                                        <span>250,000 متر</span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-2 text-lg">
                                                        <BiHome size={25} />
                                                        <span>نوع ویلا :</span>
                                                        <span> ویلایی </span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-2 text-lg">
                                                        <BiBuildings
                                                            size={25}
                                                        />
                                                        <span> طبقه : </span>
                                                        <span>
                                                            اول از چهار طبقه
                                                        </span>
                                                    </div>
                                                </div>
                                            </GroupByComponent>
                                            <GroupByComponent name="قوانین کلی ویلا">
                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3">
                                                    <div className="col flex items-start justify-start gap-1 text-lg">
                                                        <GrGroup size={25} />
                                                        <span>
                                                            ظرفیت استاندارد :
                                                        </span>
                                                        <span> 8 نفر </span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-1 text-lg">
                                                        <MdPets size={25} />
                                                        <span>
                                                            ورود حیوانات :
                                                        </span>
                                                        <span> ممنوع </span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-1 text-lg">
                                                        <BiHome size={25} />
                                                        <span>
                                                            اجازه مهمان اضافه :
                                                        </span>
                                                        <span> ممنوع </span>
                                                    </div>
                                                    <div className="col flex items-start justify-start gap-1 text-lg">
                                                        <BiBuildings
                                                            size={25}
                                                        />
                                                        <span> طبقه : </span>
                                                        <span>
                                                            اول از چهار طبقه
                                                        </span>
                                                    </div>
                                                </div>
                                            </GroupByComponent>
                                        </div>
                                    </GroupByBig>
                                </div>
                                <div className="features">
                                    <GroupByBig name="امکانات">
                                        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-5">
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineChair size={25} />
                                                <span className="text-lg">
                                                    {" "}
                                                    مبلمان{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineWaterDrop size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    آب{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineElectricalServices
                                                    size={22}
                                                />
                                                <span className="text-lg">
                                                    {" "}
                                                    برق{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <AiOutlineFire size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    برق{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <GiFireplace size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    شومینه{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineShower size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    شومینه{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <IoGameControllerOutline
                                                    size={22}
                                                />
                                                <span className="text-lg">
                                                    {" "}
                                                    کنسول بازی{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <SiGumtree size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    فضای سبز{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start line-through opacity-30">
                                                <IoRestaurantOutline
                                                    size={22}
                                                />
                                                <span className="text-lg">
                                                    {" "}
                                                    ظروف آشپزی{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineElevator size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    اسانسور{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <AiOutlineCar size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    پارکینگ{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <FaSwimmingPool size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    استخر{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdKitchen size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    یخچال{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <FiMonitor size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    تلویزیون{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <BiBus size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    نزدیک به ایستگاه اتوبوس{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <MdOutlineLocalPolice
                                                    size={22}
                                                />
                                                <span className="text-lg">
                                                    {" "}
                                                    نزدیک به اداره آگاهی{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <BsShop size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    نزدیک به فروشگاه{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <IoBonfireOutline size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    نزدیک به کمپ{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <FaUmbrellaBeach size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    نزدیک به ساحل{" "}
                                                </span>
                                            </div>
                                            <div className="col flex gap-3 items-center justify-start">
                                                <IoBedOutline size={22} />
                                                <span className="text-lg">
                                                    {" "}
                                                    شومینه{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </GroupByBig>
                                </div>

                                <div className="features">
                                    <GroupByBig name="درباره  اتاق ها">
                                        <ul>
                                            <li>
                                                <h5> سرویس بهداشتی </h5>
                                                <p> </p>
                                            </li>
                                        </ul>
                                    </GroupByBig>
                                </div>

                                <div className="laws">
                                    <GroupByBig name="قوانین استفاده از ویلا">
                                        <div className="grid md:grid-cols-2 grid-cols-1 space-y-6 md:space-y-0 ">
                                            <div className="col">
                                                <h5 className="text-lg font-semibold mb-2">
                                                    {" "}
                                                    قوانین استرداد{" "}
                                                </h5>
                                                <div>
                                                    از لحظه رزرو تا ۱ روز قبل از
                                                    تاریخ ورود کل مبلغ رزرو
                                                    بازگشت داده می‌شود.
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h5 className="text-lg font-semibold mb-2">
                                                    {" "}
                                                    مقررات اقامتگاه{" "}
                                                </h5>
                                                <ul className="space-y-2">
                                                    <li className="flex justify-start items-center gap-3">
                                                        <IoClose
                                                            size={25}
                                                            color="red"
                                                        />
                                                        <span>
                                                            {" "}
                                                            استعمال دخانیات مجاز
                                                            نمی‌باشد{" "}
                                                        </span>
                                                    </li>
                                                    <li className="flex justify-start items-center gap-3">
                                                        <IoClose
                                                            size={25}
                                                            color="red"
                                                        />
                                                        <span>
                                                            برگزاری مراسم مجاز
                                                            نمی باشد
                                                        </span>
                                                    </li>
                                                    <li className="flex justify-start items-center gap-3">
                                                        <IoClose
                                                            size={25}
                                                            color="red"
                                                        />
                                                        <span>
                                                            امکان پذیرش گروه‌های
                                                            مجردی فراهم نمی‌باشد
                                                        </span>
                                                    </li>
                                                    <li className="flex justify-start items-center gap-3">
                                                        <IoClose
                                                            size={25}
                                                            color="red"
                                                        />
                                                        <span>
                                                            {" "}
                                                            ورود حیوانات خانگی
                                                            مجاز نمی باشد
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </GroupByBig>
                                </div>

                                <div className="laws">
                                    <GroupByBig name="قوانین سایت ویلا کده">
                                        <ul className="space-y-4">
                                            <li>
                                                <h4 className="font-semibold text-lg mb-1 ">
                                                    {" "}
                                                    قوانین ورود{" "}
                                                </h4>
                                                <p>
                                                    {" "}
                                                    این اقامتگاه فقط به خانوائه
                                                    داده میشود و ساعت تحویل راس
                                                    14:00و تحویل راس 12:00 می
                                                    باشد .ارایه کارت شناسایی
                                                    لزامیس و امکان بر گزاری
                                                    مراسم در این اقامتگاه میسر
                                                    نیست{" "}
                                                </p>
                                            </li>
                                            <li>
                                                <h4 className="font-semibold text-lg mb-1">
                                                    {" "}
                                                    قوانین لغو رزرو{" "}
                                                </h4>
                                                <ul className="list-disc mr-4 space-y-2">
                                                    <li>
                                                        {" "}
                                                        در صورت لغو رزرو مبلغی
                                                        به شما بر گردانده نمیشئد{" "}
                                                    </li>
                                                    <li>
                                                        این اقامتگاه فقط به
                                                        خانوائه داده میشود و
                                                        ساعت تحویل راس 14:00و
                                                        تحویل راس 12:00 می باشد
                                                        .ارایه کارت شناسایی
                                                        لزامیس و امکان بر گزاری
                                                        مراسم در این اقامتگاه
                                                        میسر نیست
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        در صورت لغو رزرو مبلغی
                                                        به شما بر گردانده نمیشئد{" "}
                                                    </li>
                                                    <li>
                                                        این اقامتگاه فقط به
                                                        خانوائه داده میشود و
                                                        ساعت تحویل راس 14:00و
                                                        تحویل راس 12:00 می باشد
                                                        .ارایه کارت شناسایی
                                                        لزامیس و امکان بر گزاری
                                                        مراسم در این اقامتگاه
                                                        میسر نیست
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </GroupByBig>
                                </div>

                                <div className="laws">
                                    <GroupByBig name="نظرات">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-2xl">
                                                {" "}
                                                امتیاز کلی :{" "}
                                            </h4>
                                            <div className="flex items-start gap-x-3 justify-end">
                                                <span className="text-2xl">
                                                    {" "}
                                                    3 از 5{" "}
                                                </span>
                                                <RateComponent rate={3} />
                                            </div>
                                        </div>
                                        <div className="grid-cols-2"></div>
                                    </GroupByBig>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 h-screen sticky top-10">
                            <div className="py-4 px-5 bg-gray-100 rounded-2xl border-2 border-gray-200 flex flex-col gap-4">
                                <div className="datePicker bg-gray-100">
                                    <span className="text-md">
                                        تاریخ رزرو خود را تعیین کنید :
                                    </span>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div>
                                            {/* <input
                                                placeholder="از تاریخ ..."
                                                type="text"
                                                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-4 px-3 focus-within:outline-none"
                                                value={
                                                    orderVillaInformation.startDate
                                                }
                                            /> */}
                                            <DatePicker
                                                animations={[
                                                    opacity(),
                                                    transition({
                                                        from: 35,
                                                        duration: 300,
                                                    }),
                                                ]}
                                                render={
                                                    <InputIcon
                                                        placeholder="از تاریخ ..."
                                                        id="birthDate"
                                                        className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                                                    />
                                                }
                                                onChange={startConvert}
                                                numberOfMonths={2}
                                                disableMonthPicker
                                                disableYearPicker
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                value={
                                                    orderVillaInformation.startDate
                                                }
                                                style={{ width: "100%" }}
                                                containerStyle={{
                                                    width: "100%",
                                                }}
                                                className="red"
                                            />
                                        </div>
                                        <div>
                                            {/* <input
                                                placeholder="تا تاریخ ..."
                                                type="text"
                                                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-4 px-3 focus-within:outline-none"
                                                value={
                                                    orderVillaInformation.endDate
                                                }
                                            /> */}
                                            <DatePicker
                                                animations={[
                                                    opacity(),
                                                    transition({
                                                        from: 35,
                                                        duration: 300,
                                                    }),
                                                ]}
                                                render={
                                                    <InputIcon
                                                        placeholder="تا تاریخ ..."
                                                        id="birthDate"
                                                        className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                                                    />
                                                }
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                onChange={endConvert}
                                                style={{ width: "100%" }}
                                                containerStyle={{
                                                    width: "100%",
                                                }}
                                                value={
                                                    orderVillaInformation.endDate
                                                }
                                                className="red"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="counter">
                                    <div className="border-2 border-gray-200 px-3 py-4 pb-2 rounded-xl bg-gray-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg">
                                                تعداد افراد :
                                            </span>
                                            <div className="flex items-center">
                                                <button
                                                    className="bg-gray-200 rounded-md p-2 hover:shadow-lg"
                                                    onClick={() =>
                                                        HanldeIncGiust()
                                                    }
                                                >
                                                    <FaPlus
                                                        size={20}
                                                        color="FF666F"
                                                    />
                                                </button>
                                                <span className="text-xl w-16 flex justify-center">
                                                    {
                                                        orderVillaInformation.guests
                                                    }
                                                </span>
                                                <button
                                                    className="bg-gray-200 rounded-md p-2 hover:shadow-lg"
                                                    onClick={() =>
                                                        HanldeDecGiust()
                                                    }
                                                >
                                                    <FaMinus
                                                        size={20}
                                                        color="FF666F"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-3 text-justify">
                                            ظرفیت اقاماتگاه 5 نفره و به ازای هر
                                            نفر اضافه مبلغ50000 تومان به قیمت
                                            اضافه میشه
                                        </p>
                                        {incOrDescError.length > 0 ? (
                                            <p className="border-2 border-red-200 bg-red-100 text-red-400 text-sm px-3 py-2 mt-3 rounded-md">
                                                {incOrDescError}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="price-villa border-2 px-3 py-3 rounded-xl bg-gray-200">
                                    <div className="flex flex-row justify-between items-end ">
                                        <div className="text-xl  font-semibold">
                                            قیمت هر شب :
                                        </div>
                                        <div className="flex flex-col items-end justify-end">
                                            <div className="flex justify-end items-center gap-2">
                                                <span className="line-through text-gray-400 ">
                                                    <NumberFormat
                                                        value={ComputePrice(
                                                            mystay.price,
                                                            0
                                                        )}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                    />
                                                </span>
                                                <span className="bg-red-400 text-white px-2 py-1 rounded-3xl text-sm">
                                                    {mystay.discount}%
                                                </span>
                                            </div>
                                            <div className=" text-black font-semibold text-xl mt-2">
                                                {/* {orderVillaInformation.price >
                                                0 ? (
                                                    orderVillaInformation.price
                                                ) : (
                                                    <NumberFormat
                                                        value={ComputePrice(
                                                            mystay.price,
                                                            mystay.discount
                                                        )}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                    />
                                                )} */}
                                                <NumberFormat
                                                    value={ComputePrice(
                                                        mystay.price,
                                                        mystay.discount
                                                    )}
                                                    displayType="text"
                                                    thousandSeparator={true}
                                                />
                                                <span className="text-base">
                                                    ريال
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <button
                                        onClick={onSubmitOrder}
                                        className="w-full bg-red-400 text-white py-4 rounded-2xl text-2xl"
                                    >
                                        رزرو
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* similar villa list */}
                    <div className=""></div>

                    {/* villa feature list */}
                    <div className="grid grid-cols-7 gap-5">
                        <div className="col-span-5">45</div>
                        <div className="col-span-21">596</div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default MyVilla;
