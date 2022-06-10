import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import image
import {
    birthday,
    marry,
    luxery,
    relax,
    flat,
    ayandeh_pgw,
    asanpardakht,
} from "../../../assets/imgs/Images";

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
`;

function Invoices() {
    const [VillaInvoiceInfo, setVillaInvoiceInfo] = useState({
        id: 125,
        name: "اجاره ویلا شماره یک",
        country: "iran",
        state: "مازندران",
        city: "نوشهر",
        datecreate: "1398/02/20",
        dateReserved: {},
        reserveStartDate: "1400/12/28",
        reserveEndDate: "1401/01/15",
        price: "1050000",
        url: "125685",
        mainImg: "kdjklsmc",
        imgs: [birthday, marry, luxery, relax, flat],
        reserveStatus: 1,
        discount: 20,
        maxGiuest: 10,
        rooms: 2,
        area: 220,
        type: ["ویلایی", "مستقل"],
        address: "گیلان - بندر انزلی - خیابان یک - کوچه 16 - پلاک 18",
    });

    //  discount code invoice
    const [InvoiceDiscount, setInvoiceDiscount] = useState("");

    // result of submit discount code 1=> ok   0=> notValid
    const [ResultOfSubmitDiscount, setResultOfSubmitDiscount] = useState(-1);

    const hanldeDiscountInvoice = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value);
        setInvoiceDiscount(value);
    };
    const handleSubmitDiscount = (event) => {
        event.preventDefault();
        alert("yes");
        console.log(InvoiceDiscount);
        setResultOfSubmitDiscount(0);
    };
    return (
        <div>
            <MainSection className="container md:mx-auto">
                <div className="md:w-10/12 mx-2 space-y-3">
                    <div className="shadow-md rounded-2xl  md:flex-row md:flex flex-col justify-evenly p-8">
                        <div className="py-2 md:pt-0">
                            <div className="font-normal text-gray-500">
                                {" "}
                                شناسه سفارش شما :
                            </div>
                            <div className="font-bold"> 63134654 </div>
                        </div>
                        <div className="md:border-r-2 border-r-0 md:pr-4 pr-0 md:py-0 py-3">
                            <div className="font-normal text-gray-500">
                                {" "}
                                تاریخ ثبت سفارش شما :
                            </div>
                            <div className="font-bold"> 1398/02/10 </div>
                        </div>
                        <div className="flex gap-3 items-center md:border-r-2 border-r-0 border-t-2 md:border-t-0 py-2 md:pt-0 md:pr-4 pr-0 ">
                            <div className="font-normal text-gray-500">
                                {" "}
                                وضعیت سفارش شما
                            </div>
                            <div className="font-bold bg-gray-100  rounded-xl px-4 py-3 flex gap-1 items-center">
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                در انتظار پرداخت
                            </div>
                        </div>
                    </div>

                    <div className="grid md:gap-3 gap-0 md:grid-cols-4 grid-cols-1 relative">
                        <div className="col-span-3 shadow-xl p-3 rounded-xl order-2 md:order-1">
                            <h2 className="text-2xl border-b-2 border-gray-200 py-6  flex items-center gap-2 justify-center">
                                <span>
                                    <svg
                                        class="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </span>
                                <span> اطلاعات صورت حساب </span>
                            </h2>
                            <div className="w-full mt-4">
                                <table class="table-auto w-full text-right">
                                    <thead className="bg-red-100 ">
                                        <tr>
                                            <th className="py-2 px-2 w-5 border-r-2 border-red-400">
                                                شماره
                                            </th>
                                            <th className="py-2 px-2 border-r-2 border-red-400">
                                                شناسه ویلا
                                            </th>
                                            <th className="py-2 px-2 border-r-2 border-red-400">
                                                تعداد میهمان
                                            </th>
                                            <th className="py-2 px-2 border-r-2 border-red-400">
                                                تخفیف
                                            </th>
                                            <th className="py-2 px-2 border-r-2 border-red-400">
                                                مبلغ
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-2 border-r-2 border-gray-100">
                                                1
                                            </td>
                                            <td className="py-2 px-2 border-r-2 border-gray-100">
                                                <Link
                                                    to="/"
                                                    className="text-red-400 hover:text-red-500"
                                                >
                                                    {" "}
                                                    #12546
                                                </Link>
                                            </td>
                                            <td className="py-2 px-2 border-r-2 border-gray-100">
                                                3
                                            </td>
                                            <td className="py-2 px-2 border-r-2 border-gray-100">
                                                20%
                                            </td>
                                            <td className="py-2 px-2 border-r-2 border-gray-100">
                                                <NumberFormat
                                                    value={
                                                        VillaInvoiceInfo.price
                                                    }
                                                    displayType="text"
                                                    thousandSeparator={true}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="grid md:gap-8 gap-x-0 gap-y-8 md:grid-cols-3 grid-cols-1 mt-12 items-start">
                                    <div className="col-span-2 space-x-3 border-2 border-gray-100 p-3 py-4 rounded-xl">
                                        <div className="space-y-4">
                                            <div className="text-2xl font-bold m-0 ">
                                                پیش پرداخت
                                            </div>
                                            <p className="text-sm mb-3 mt-0">
                                                مبلغ پیش‌پرداخت معادل هزینه دو
                                                شب اقامت می‌باشد و مقدار
                                                باقی‌مانده بصورت حضوری و در
                                                ابتدای سفر، توسط میزبان دریافت
                                                خواهد شد (پرداخت در محل).
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 ">
                                                <div className="col flex md:flex-row flex-col items-center justify-between  border-2 border-gray-200 bg-gray-100 p-2 rounded-lg">
                                                    <span>پیش پرداخت</span>
                                                    <span>
                                                        <NumberFormat
                                                            value={56000542}
                                                            displayType="text"
                                                            thousandSeparator={
                                                                true
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                                <div className="col flex md:flex-row flex-col items-center justify-between border-2 border-gray-200 bg-gray-100 p-2 rounded-lg">
                                                    <span>پرداخت در محل </span>
                                                    <span>
                                                        <NumberFormat
                                                            value={10000}
                                                            displayType="text"
                                                            thousandSeparator={true}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="border-2 rounded-lg border-gray-100 p-2 w-full mt-6">
                                                <label htmlFor="online-Payment">
                                                    <div className="border-b-2 border-gray-100 flex items-center justify-start gap-2 pb-2 mb-2">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            id="online-Payment"
                                                        />
                                                        <span>
                                                            {" "}
                                                            پرداخت از طریق درگاه
                                                            بانکی (آنلاین){" "}
                                                        </span>
                                                    </div>
                                                </label>
                                                <div>
                                                    <div className="text-sm">
                                                        {" "}
                                                        انتخاب درگاه بانکی:{" "}
                                                    </div>
                                                    <div className="flex justify-end gap-3">
                                                        <div>
                                                            <img
                                                                src={
                                                                    asanpardakht
                                                                }
                                                                className="rounded-lg border-2 border-gray-100  h-20 hover:border-red-400 p-2"
                                                            />
                                                        </div>
                                                        <div>
                                                            <img
                                                                src={
                                                                    ayandeh_pgw
                                                                }
                                                                className="rounded-lg border-2 border-gray-100 h-20 hover:border-red-400 p-2"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-6">
                                                    <button className="w-3/5 py-3 bg-green-700 hover:bg-green-800 text-white font-normal text-base rounded-lg">
                                                        پرداخت
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="border-2 rounded-lg border-gray-100 p-2 w-full mt-6">
                                                <label htmlFor="card-to-card">
                                                    <div className="border-b-2 border-gray-100 flex items-center justify-start gap-2 pb-2 mb-2">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            id="card-to-card"
                                                        />
                                                        <span>
                                                            {" "}
                                                            پرداخت از طریق کارت
                                                            به کارت
                                                        </span>
                                                    </div>
                                                </label>
                                                <div className="grid grid-cols-2 items-center ">
                                                    <div className="col text-sm">
                                                        شما میتوانید وجه فوق را
                                                        به کارت زیر واریز و کد
                                                        پیگیری را به شماره
                                                        ۱۰۰۰۷۸۹۲ ارسال نمایید:
                                                        ۶۳۶۲۱۴۷۰۱۰۰۲۸۹۶۵
                                                    </div>
                                                    <div className="col flex justify-center items-center">
                                                        45
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col ">
                                        <ul className="space-y-2">
                                            <li className="flex justify-between bg-gray-100 p-2 rounded-md">
                                                <span className="font-bold">
                                                    {" "}
                                                    مجموع کل:{" "}
                                                </span>
                                                <span>
                                                    <NumberFormat
                                                        value={5600000}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                    />
                                                    تومان
                                                </span>
                                            </li>
                                            <li className="flex justify-between text-red-400 bg-gray-100 p-2 rounded-md">
                                                <span className="font-bold">
                                                    {" "}
                                                    تخفیف‌ ها: :{" "}
                                                </span>
                                                <span>
                                                    <NumberFormat
                                                        value={56000}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                    />
                                                    تومان
                                                </span>
                                            </li>
                                            <li>
                                                <div className="bg-gray-100 rounded-md text-sm">
                                                    <ul className="p-4">
                                                        <li className="flex justify-between p-2  border-b-2 mb-2">
                                                            <span className="font-bold">
                                                                {" "}
                                                                مبلغ نهایی :{" "}
                                                            </span>
                                                            <span>
                                                                <NumberFormat
                                                                    value={
                                                                        5700000
                                                                    }
                                                                    displayType="text"
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                />
                                                                تومان
                                                            </span>
                                                        </li>
                                                        <li className="flex justify-between p-2  border-b-2 mb-2">
                                                            <span className="font-bold">
                                                                {" "}
                                                                پیش پرداخت:
                                                            </span>
                                                            <span>
                                                                <NumberFormat
                                                                    value={
                                                                        5700000
                                                                    }
                                                                    displayType="text"
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                />
                                                                تومان
                                                            </span>
                                                        </li>
                                                        <li className="flex justify-between p-2  border-b-2 mb-2">
                                                            <span className="font-bold">
                                                                {" "}
                                                                پرداخت در محل:
                                                            </span>
                                                            <span>
                                                                <NumberFormat
                                                                    value={
                                                                        150000
                                                                    }
                                                                    displayType="text"
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                />
                                                                تومان
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className=" border-2 border-gray-100 mt-4 py-3 rounded-lg p-2 ">
                                            <form
                                                onSubmit={handleSubmitDiscount}
                                            >
                                                <div>
                                                    <label className="text-lg font-medium">
                                                        کد تخفیف
                                                    </label>
                                                </div>
                                                <input
                                                    onChange={
                                                        hanldeDiscountInvoice
                                                    }
                                                    value={InvoiceDiscount}
                                                    type="text"
                                                    className="border-2 rounded-lg px-2 py-2 w-full mt-1"
                                                    placeholder="کد نخفیف ..."
                                                />
                                                <button
                                                    className="w-full  bg-red-400 py-2 rounded-lg text-white  mt-2"
                                                    disabled={
                                                        InvoiceDiscount.length >
                                                        0
                                                            ? false
                                                            : true
                                                    }
                                                >
                                                    اعمال
                                                </button>
                                            </form>
                                            <div className="mt-4">
                                                {ResultOfSubmitDiscount ===
                                                1 ? (
                                                    <div className="bg-red-100 text-red-400 rounded-lg p-2">
                                                        کد تخفیف نامعتبر است
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                                {ResultOfSubmitDiscount ===
                                                0 ? (
                                                    <div className="bg-green-100 text-green-600 rounded-lg p-2">
                                                        کد تخفیف اعمال شده
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col shadow-xl p-3  rounded-xl space-y-2 md:sticky relative top-0 h-fit order-1 md:order-2">
                            <div className="py-4 rounded-lg">
                                <div className="text-gray-400 flex items-center justify-center gap-2 py-2 mb-3">
                                    <svg
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span> تاریخ رزرو ویلا </span>
                                </div>
                                <div className="flex items-center justify-evenly">
                                    <div className="">
                                        <div className="text-gray-500 text-sm">
                                            تاریخ رفت :
                                        </div>
                                        <div className="text-base font-bold flex flex-col">
                                            <span className="font-bold text-md">
                                                {" "}
                                                {
                                                    VillaInvoiceInfo.reserveStartDate
                                                }{" "}
                                            </span>
                                            <span className="font-normal text-gray-500">
                                                {" "}
                                                ورود 14:00{" "}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-red-400">
                                        <svg
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </div>
                                    <div className="">
                                        <div className="text-gray-500 text-sm">
                                            تاریخ برگشت :
                                        </div>
                                        <div className="text-base font-bold flex flex-col">
                                            <span className="font-bold text-md">
                                                {" "}
                                                {
                                                    VillaInvoiceInfo.reserveEndDate
                                                }{" "}
                                            </span>
                                            <span className="font-normal text-gray-500">
                                                {" "}
                                                خروج 12:00{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={VillaInvoiceInfo.imgs[0]}
                                    className="rounded-lg w-full h-40 "
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    {" "}
                                    {VillaInvoiceInfo.name}{" "}
                                </h3>
                                <div className="flex gap-1 space-y-2 items-center justify-start text-sm text-red-400">
                                    <span className="">
                                        <svg
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        {" "}
                                        {VillaInvoiceInfo.state} -{" "}
                                        {VillaInvoiceInfo.city}{" "}
                                    </span>
                                </div>
                                <div className="space-y-2 mt-3 text-sm px-1 py-2 border-t-2 border-gray-200 md:block hidden">
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            {" "}
                                            تعداد اتاق :{" "}
                                        </div>
                                        <div>{VillaInvoiceInfo.rooms}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            {" "}
                                            متراژ ویلا :{" "}
                                        </div>
                                        <div>{VillaInvoiceInfo.area}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            نوع ویلا :
                                        </div>
                                        {VillaInvoiceInfo.type.map(
                                            (item, index) => (
                                                <span className="" key={index}>
                                                    {item}{" "}
                                                    {index ==
                                                    VillaInvoiceInfo.type
                                                        .length -
                                                        1
                                                        ? " "
                                                        : " - "}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            {" "}
                                            آدرس ویلا :{" "}
                                        </div>
                                        <div>{VillaInvoiceInfo.address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default Invoices;
