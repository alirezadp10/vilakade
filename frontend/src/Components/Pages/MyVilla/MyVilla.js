import React, { useState, useEffect } from "react";
import {
  FaMinus,
  FaPlus,
  FaSwimmingPool,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { AiOutlineCar, AiOutlineFire } from "react-icons/ai";
import { GiFireplace } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { SiGumtree } from "react-icons/si";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import { FiClock, FiUsers, FiPocket, FiChevronDown } from "react-icons/fi";
import { MdOutlinePets, MdOutlineVilla } from "react-icons/md";

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
import { Link, useParams } from "react-router-dom";

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
import { LocatopnIcon, ShareIcon } from "../../../Theme/AllSvg";
import MainTitle from "../../GlobalComponenet/Titles/MainTitle";
import SliderFull from "../../SecondaryComponent/SliderFull";
import { Notify } from "../../GlobalComponenet/Toast/Notify";

const MainSection = styled.div``;

const locationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

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
    rate: 3.4,
    imgs: [
      birthday,
      marry,
      luxery,
      relax,
      flat,
      mostaghel,
      modern,
      dublex,
      Towni,
    ],
    reserveStatus: 1,
    discount: 20,
    maxGuist: 5,
    normalGuisty: 4,
    parking: true,
    parkingType: "پارکینگ مسقف",
    rooms: 2,
    bana: 3985,
    zirBana: 143,
  });

  //    relative villas list
  const [villaInformations, setVillaInformations] = useState([
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
      discount: 0,
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
      discount: 20,
    },
    {
      id: 127,
      name: "اجاره ویلا شماره سه",
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
      discount: 20,
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
      price: "1300000",
      url: "125685",
      mainImg: "kdjklsmc",
      imgs: [birthday, marry, luxery, relax, flat],
      reserveStatus: 2,
      discount: 0,
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
      price: "1300000",
      url: "125685",
      mainImg: "kdjklsmc",
      imgs: [birthday, marry, luxery, relax, flat],
      reserveStatus: 2,
      discount: 20,
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
      price: "1300000",
      url: "125685",
      mainImg: "kdjklsmc",
      imgs: [birthday, marry, luxery, relax, flat],
      reserveStatus: 2,
      discount: 20,
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
      price: "1300000",
      url: "125685",
      mainImg: "kdjklsmc",
      imgs: [birthday, marry, luxery, relax, flat],
      reserveStatus: 2,
      discount: 20,
    },
  ]);

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
    // console.log("subbmit order");
    // console.log(orderVillaInformation);
    // alert("order is submit" + useerInfo.fullname);
  };

  // copy to clip board url
  const CopyLinkTClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
    Notify("لینک اشتراک کپی شد");
  };

  //    more feature handler

  const [activeChicken, setActiveChicken] = useState(false);
  const [activeRefahi, setActiveRefahi] = useState(false);
  const [activehabits, setActivehabits] = useState(false);

  const handleChikenMoreHandler = () => {
    setActiveChicken(!activeChicken);
  };
  const handleRefahiMoreHandler = () => {
    setActiveRefahi(!activeRefahi);
  };
  const handleHabitsMoreHandler = () => {
    setActivehabits(!activehabits);
  };

  return (
    <MainSection className="container mx-auto">
      <div className="w-10/12 mx-auto">
        <div className="main-content mt-8">
          <div className="grid md:grid-cols-6 grid-cols-1 md:gap-5 gap-y-5">
            <div className="col-span-4">
              <div className="border-2 border-gray-100 px-8 py-4 rounded-2xl mb-3">
                <div className="w-full flex justify-between items-start ">
                  <div>
                    <h2 className="text-2xl font-bold">{mystay.name}</h2>
                    <div className="flex justify-start gap-8 mt-4">
                      <div className="flex items-center gap-2 text-red-400">
                        <span>{locationIcon}</span>
                        <span>
                          <span> {mystay.State} </span> ,
                          <span className="">{mystay.city}</span>
                        </span>
                      </div>
                      <div>
                        کد ویلا :<span> {mystay.id}# </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span
                      className="hover:text-red-400 pt-2"
                      onClick={CopyLinkTClipBoard}
                    >
                      <ShareIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <SliderVillaContainer mystayImage={mystay.imgs} />
              </div>

              <div className="Feature-list flex flex-col md:gap-5 gap-y-3 mt-4">
                <div>
                  <GroupByBig name="">
                    <div id="summary-some-feature">
                      <div className=" mt-6">
                        <div className="grid gap-y-6 gap-x-4 grid-cols-2">
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <MdOutlineVilla size={35} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                درباره اقامتگاه :
                              </div>
                              <div className="font-base text-sm text-gray-500 space-3">
                                <span>
                                  {mystay.zirBana} متر زیربنا ،{mystay.bana} متر
                                </span>
                                <span>کل بنا ، {mystay.rooms} اتاق ،</span>
                                <span>
                                  {" "}
                                  {mystay.parking ? "پارکینگ دارد" : ""} ,
                                </span>
                                <span>
                                  {mystay.parkingType ? "پارکینگ  مسقف " : ""}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <ImSpoonKnife size={30} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">اشپزخانه :</div>
                              <div className="font-base text-sm text-gray-500">
                                ارائه کارت ملی هوشمند الزامی است.
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <FiUsers size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                {" "}
                                ظرفیت اقامتگاه :{" "}
                              </div>
                              <div className="font-base text-sm text-gray-500">
                                {" "}
                                ظرفیت تا {mystay.maxGuist} نفر (۴ نفر پایه + تا{" "}
                                {mystay.maxGuist - mystay.normalGuisty} نفر
                                اضافه){" "}
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <IoBedOutline size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                درباره اتاق خواب :
                              </div>
                              <div className="font-base text-sm text-gray-500">
                                ۲ تخت دو نفره , تخت یک نفره ندارد , ۴ رخت‌خواب
                                سنتی
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GroupByBig>
                </div>

                <div className="">
                  <div className="text-lg">{/* { match.params.slug } */}</div>

                  <GroupByBig name="">
                    <p className="text-base leading-7">
                      این ویلا 400 متری در روستای اسکنده محمودآباد، در محیطی دنج
                      و آرام با فاصله ی کمتر از 30 دقیقه تا دریا واقع شده است.
                      ویلا دارای 2 اتاق خواب مستر و مجهز به سیستم سرمایش و
                      گرمایش مطلوب، 2 تخت دو نفره و یک تخت خواب تکنفره است.
                      استخر این اقامتگاه داخل ساختمان، سرپوشیده و مجهز به آبگرم
                      و سیستم تصفیه آب است، همچنین در قسمت استخر: جکوزی، حمام و
                      سرویس بهداشتی فرنگی موجود است. حیاط به صورت دربست در
                      اختیار مهمان قرار می گیرد و دارای باغچه، درخت میوه،
                      باربیکیو و آلاچیق است. ورودی ویلا فقط یک پله کوتاه دارد که
                      با توجه به این مورد و وجود سرویس بهداشتی فرنگی، اقامت برای
                      سالمندان و مهمانان دارای معلولیت جسمی به راحتی امکان پذیر
                      است. پارکینگ این ویلا به صورت روباز و برای 4 عدد ماشین جای
                      پارک دارد. با توجه به موقعیت این ویلا از سوپر مارکت و
                      نانوایی کمتر از 10 دقیقه بصورت پیاده فاصله دارد. از جاذبه
                      های این منطقه: آب بندان بزرگ بیشه کلا (7.3 کیلومتر)، امام
                      زاده زیدبن علی (8 کیلومتر)، پارک جنگلی تشبندان (19
                      کیلومتر) و جنگل روستای اهلم (34 کیلومتر) می باشد. درصورت
                      رزرو برای اقامت بیشتر از یک شب، در بازه ی شنبه تا سه شنبه،
                      دارای تخفیف است.
                    </p>

                    <div className="summary-About-villa mt-5 flex flex-col gap-y-5 ">
                      <GroupByComponent name="مشخصات کلی ویلا">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3">
                          <div className="col flex items-start justify-start gap-1 text-lg">
                            <BiArea size={25} />
                            <span>متراز زمین :</span>
                            <span>2,500,000 متر</span>
                          </div>
                          <div className="col flex items-start justify-start gap-2 text-lg">
                            <HiOutlineOfficeBuilding size={25} />
                            <span>متراز بنا :</span>
                            <span>250,000 متر</span>
                          </div>
                          <div className="col flex items-start justify-start gap-2 text-lg">
                            <BiHome size={25} />
                            <span>نوع ویلا :</span>
                            <span> ویلایی </span>
                          </div>
                          <div className="col flex items-start justify-start gap-2 text-lg">
                            <BiBuildings size={25} />
                            <span> طبقه : </span>
                            <span>اول از چهار طبقه</span>
                          </div>
                        </div>
                      </GroupByComponent>
                    </div>
                  </GroupByBig>
                </div>

                <div className="laws">
                  <GroupByBig name="قوانین">
                    <div className="flex-col gap-3 space-y-8">
                      <div className="start-end-clock">
                        <div className="flex items-center gap-2 mb-2">
                          <FiClock size={20} />
                          <span className="font-semibold">
                            {" "}
                            ساعت تحویل و خروج{" "}
                          </span>
                        </div>
                        <div className="flex items-center justify-start gap-6 ">
                          <div className="border-2 border-gray-200 rounded-2xl bg-gray-100 flex flex-col gap-3 px-4 py-3 justify-center items-center hover:border-green-600 transition-all duration-300">
                            <span className="text-base text-gray-600">
                              {" "}
                              ساعت تحویل{" "}
                            </span>
                            <span className="text-lg text-green-600">
                              {" "}
                              از ۱۴:۰۰{" "}
                            </span>
                          </div>
                          <div className="border-2 border-gray-200 rounded-2xl bg-gray-100 flex flex-col gap-3 px-4 py-3 justify-center items-center hover:border-green-600 transition-all duration-300">
                            <span className="text-base text-gray-600">
                              ساعت خروج
                            </span>
                            <span className="text-lg text-green-600">
                              تا ۱۲:۰۰
                            </span>
                          </div>
                        </div>
                      </div>

                      <div id="summary-option">
                        <div className="grid gap-y-6 gap-x-4 grid-cols-2">
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <FiUsers size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                {" "}
                                ظرفیت اقامتگاه :{" "}
                              </div>
                              <div className="font-base text-sm text-gray-500">
                                {" "}
                                ظرفیت تا {mystay.maxGuist} نفر (۴ نفر پایه + تا{" "}
                                {mystay.maxGuist - mystay.normalGuisty} نفر
                                اضافه){" "}
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <FiPocket size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                مدارک مورد نیاز :
                              </div>
                              <div className="font-base text-sm text-gray-500">
                                ارائه کارت ملی هوشمند الزامی است.
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <MdPets size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                اجازه ورود حیوانات اهلی :
                                <span className="text-green-600"> دارید</span>
                              </div>
                            </div>
                          </div>
                          <div className="col flex gap-3 items-center">
                            <span>
                              {" "}
                              <IoBedOutline size={25} />{" "}
                            </span>
                            <div className="">
                              <div className="font-semibold">
                                درباره اتاق خواب :
                              </div>
                              <div className="font-base text-sm text-gray-500">
                                ۲ تخت دو نفره , تخت یک نفره ندارد , ۴ رخت‌خواب
                                سنتی
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="font-semibold text-lg">
                            {" "}
                            قوانین لغو رزرو
                          </div>
                          <ul className="space-y-4 mt-2 list-disc mr-3">
                            <li className="text-sm">
                              <span className="font-semibold">
                                تا قبل از ۷۲ ساعت مانده به روز شروع اقامت:
                              </span>
                              کسر 20% از کل مبلغ رزرو به عنوان خسارت
                            </li>
                            <li className="text-sm">
                              <span className="font-semibold">
                                کمتر از ۷۲ ساعت مانده تا روز شروع اقامت:
                              </span>
                              کسر مبلغ شب اول + 20% از مابقی مبلغ رزرو به عنوان
                              خسارت
                            </li>
                            <li className="text-sm">
                              <span className="font-semibold">
                                روز شروع اقامت:
                              </span>
                              کسر مبلغ 2 شب اول رزرو به عنوان خسارت
                            </li>
                            <li className="text-sm">
                              <span className="font-semibold">
                                در حین اقامت:
                              </span>
                              کسر مبلغ شب‌های اقامت داشته + مبلغ شب بعدی + 20%
                              از مابقی مبلغ رزرو به عنوان خسارت
                            </li>
                            <li className="text-sm">
                              <span className="font-semibold">
                                در ایام پیک (تعطیلات رسمی به غیر از تعطیلات
                                نوروز):
                              </span>
                              تا قبل از ۷ روز به شروع اقامت کسر ۲۰٪ از کل مبلغ
                              رزرو و کمتر از ۷ روز به شروع اقامت کسر کل مبلغ به
                              عنوان خسارت
                            </li>
                            <li className="text-sm">
                              <span className="font-semibold">
                                رزروهای بلند مدت (۱۴ روز به بالا):
                              </span>
                              کسر مبلغ 5 شب اول + 20% از مابقی مبلغ رزرو به
                              عنوان خسارت محاسبه می‌شود
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GroupByBig>
                </div>

                <div className="features">
                  <GroupByBig name="امکانات">
                    <div className="space-y-8 mt-8">
                      <GroupByComponent name="تجهیزات آشپزخانه">
                        <div
                          className={`grid md:grid-cols-3 grid-cols-2 gap-y-5 transition-all duration-500 ${
                            activeChicken
                              ? "h-fit overflow-hidden"
                              : "max-h-[120px] overflow-hidden"
                          } `}
                        >
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineChair size={20} />
                            <span className="text-sm"> مبلمان </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineWaterDrop size={20} />
                            <span className="text-sm"> آب </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElectricalServices size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineFire size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <GiFireplace size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineShower size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoGameControllerOutline size={20} />
                            <span className="text-sm"> کنسول بازی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <SiGumtree size={20} />
                            <span className="text-sm"> فضای سبز </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start line-through opacity-30">
                            <IoRestaurantOutline size={20} />
                            <span className="text-sm"> ظروف آشپزی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElevator size={20} />
                            <span className="text-sm"> اسانسور </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineCar size={20} />
                            <span className="text-sm"> پارکینگ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaSwimmingPool size={20} />
                            <span className="text-sm"> استخر </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdKitchen size={20} />
                            <span className="text-sm"> یخچال </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FiMonitor size={20} />
                            <span className="text-sm"> تلویزیون </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BiBus size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به ایستگاه اتوبوس{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineLocalPolice size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به اداره آگاهی{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BsShop size={20} />
                            <span className="text-sm"> نزدیک به فروشگاه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBonfireOutline size={20} />
                            <span className="text-sm"> نزدیک به کمپ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaUmbrellaBeach size={20} />
                            <span className="text-sm"> نزدیک به ساحل </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBedOutline size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                        </div>
                        <div className="text-red-400 f]ont-base mt-4">
                          <span
                            className={`flex gap-2 ${
                              activeChicken ? "hidden" : "inline-block"
                            }`}
                            onClick={handleChikenMoreHandler}
                          >
                            <span> مشاهده همه امکانات اشپزخانه </span>
                            <FiChevronDown
                              size={20}
                              className={`${activeChicken ? "rotate-180" : ""}`}
                            />
                          </span>
                        </div>
                      </GroupByComponent>

                      <GroupByComponent name="امکانات رفاهی ">
                        <div
                          className={`grid md:grid-cols-3 grid-cols-2 gap-y-5 ${
                            activeRefahi
                              ? "h-fit overflow-hidden"
                              : "max-h-[120px] overflow-hidden"
                          } `}
                        >
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineChair size={25} />
                            <span className="text-sm"> مبلمان </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineWaterDrop size={20} />
                            <span className="text-sm"> آب </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElectricalServices size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineFire size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <GiFireplace size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineShower size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoGameControllerOutline size={20} />
                            <span className="text-sm"> کنسول بازی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <SiGumtree size={20} />
                            <span className="text-sm"> فضای سبز </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start line-through opacity-30">
                            <IoRestaurantOutline size={20} />
                            <span className="text-sm"> ظروف آشپزی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElevator size={20} />
                            <span className="text-sm"> اسانسور </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineCar size={20} />
                            <span className="text-sm"> پارکینگ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaSwimmingPool size={20} />
                            <span className="text-sm"> استخر </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdKitchen size={20} />
                            <span className="text-sm"> یخچال </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FiMonitor size={20} />
                            <span className="text-sm"> تلویزیون </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BiBus size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به ایستگاه اتوبوس{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineLocalPolice size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به اداره آگاهی{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BsShop size={20} />
                            <span className="text-sm"> نزدیک به فروشگاه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBonfireOutline size={20} />
                            <span className="text-sm"> نزدیک به کمپ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaUmbrellaBeach size={20} />
                            <span className="text-sm"> نزدیک به ساحل </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBedOutline size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                        </div>
                        <div className="text-red-400 f]ont-base mt-4">
                          <span
                            className={`flex gap-2 ${
                              activeRefahi ? "hidden" : "inline-block"
                            }`}
                            onClick={handleRefahiMoreHandler}
                          >
                            <span> مشاهده همه امکانات رفاهی </span>
                            <FiChevronDown
                              size={20}
                              className={`${activeRefahi ? "rotate-180" : ""}`}
                            />
                          </span>
                        </div>
                      </GroupByComponent>

                      <GroupByComponent name=" امکانات سرگرمی ">
                        <div
                          className={`grid md:grid-cols-3 grid-cols-2 gap-y-5 ${
                            activehabits
                              ? "h-fit overflow-hidden"
                              : "max-h-[120px] overflow-hidden"
                          } `}
                        >
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineChair size={25} />
                            <span className="text-sm"> مبلمان </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineWaterDrop size={20} />
                            <span className="text-sm"> آب </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElectricalServices size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineFire size={20} />
                            <span className="text-sm"> برق </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <GiFireplace size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineShower size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoGameControllerOutline size={20} />
                            <span className="text-sm"> کنسول بازی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <SiGumtree size={20} />
                            <span className="text-sm"> فضای سبز </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start line-through opacity-30">
                            <IoRestaurantOutline size={20} />
                            <span className="text-sm"> ظروف آشپزی </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineElevator size={20} />
                            <span className="text-sm"> اسانسور </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <AiOutlineCar size={20} />
                            <span className="text-sm"> پارکینگ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaSwimmingPool size={20} />
                            <span className="text-sm"> استخر </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdKitchen size={20} />
                            <span className="text-sm"> یخچال </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FiMonitor size={20} />
                            <span className="text-sm"> تلویزیون </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BiBus size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به ایستگاه اتوبوس{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <MdOutlineLocalPolice size={20} />
                            <span className="text-sm">
                              {" "}
                              نزدیک به اداره آگاهی{" "}
                            </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <BsShop size={20} />
                            <span className="text-sm"> نزدیک به فروشگاه </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBonfireOutline size={20} />
                            <span className="text-sm"> نزدیک به کمپ </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <FaUmbrellaBeach size={20} />
                            <span className="text-sm"> نزدیک به ساحل </span>
                          </div>
                          <div className="col flex gap-3 items-center justify-start">
                            <IoBedOutline size={20} />
                            <span className="text-sm"> شومینه </span>
                          </div>
                        </div>
                        <div className="text-red-400 f]ont-base mt-4">
                          <span
                            className={`flex gap-2 ${
                              activehabits ? "hidden" : "inline-block"
                            }`}
                            onClick={handleHabitsMoreHandler}
                          >
                            <span> مشاهده همه امکانات سرگرمی </span>
                            <FiChevronDown
                              size={20}
                              className={`${activehabits ? "rotate-180" : ""}`}
                            />
                          </span>
                        </div>
                      </GroupByComponent>
                    </div>
                  </GroupByBig>
                </div>

                <div className="laws">
                  <GroupByBig name="نظرات">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl"> امتیاز کلی : </h4>
                      <div className="flex items-start gap-x-3 justify-end">
                        <span className="text-2xl"> 3 از 5 </span>
                        <RateComponent rate={3} />
                      </div>
                    </div>
                    <div className="grid-cols-2"></div>
                  </GroupByBig>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-fit sticky top-10">
              <div className="py-4 px-5 bg-gray-100 rounded-2xl border-2 border-gray-200 flex flex-col gap-4">
                {/* <div className="datePicker bg-gray-100">
                                    <span className="text-md">
                                        تاریخ رزرو خود را تعیین کنید :
                                    </span>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
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
                                                    <InputIcon
                                                        placeholder="از تاریخ ..."
                                                        id="birthDate"
                                                        className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                                                    />
                                                }
                                                onChange={startConvert}
                                                numberOfMonths={1}
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
                                </div> */}

                {/* <div className="counter">
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
                                </div> */}

                <div className="price-villa border-2 px-3 py-3 rounded-xl bg-gray-200">
                  <div className="flex flex-row justify-between items-end ">
                    <div className="text-xl  font-semibold">قیمت هر شب :</div>
                    <div className="flex flex-col items-end justify-end">
                      <div className="flex justify-end items-center gap-2">
                        <span className="line-through text-gray-400 ">
                          <NumberFormat
                            value={ComputePrice(mystay.price, 0)}
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
                          value={ComputePrice(mystay.price, mystay.discount)}
                          displayType="text"
                          thousandSeparator={true}
                        />
                        <span className="text-base">ريال</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center mx-auto border-b-2 border-gray-200 w-full pb-4">
                  <span className="mt-2"> ({mystay.rate}) </span>
                  <div className="star-container">
                    <RateComponent rate={mystay.rate} />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2">
                    <h4> {mystay.name} </h4>
                    <p className="flex justify-start gap-2 text-sm text-red-400">
                      <span> {locationIcon} </span>
                      <span>
                        {" "}
                        {mystay.State} - {mystay.city}{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <a href="tel:09030949095">
                    <button
                      onClick={onSubmitOrder}
                      className="w-full bg-red-400 text-white py-4 rounded-2xl text-2xl"
                    >
                      برای رزرو تماس بگیرید
                    </button>
                  </a>
                </div>
                <div className="flex justify-between px-2 text-sm mt-3 text-blue-400">
                  <span> ارتباط با پشتیبانی </span>
                  <span>
                    {" "}
                    <a href="tel:09030949095"> 09030949095 </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* similar villa list */}
          <div className="">
            <div className="mt-20">
              <div className="text-2xl font-semibold mb-3">
                {" "}
                اقامتگاه‌های مشابه{" "}
              </div>
              <SliderFull villaInformations={villaInformations} />
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

export default MyVilla;
