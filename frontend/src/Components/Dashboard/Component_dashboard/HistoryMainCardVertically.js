import React from "react";

function HistoryMainCardVertically(props) {
    const { villaInfo } = props;

    return (
        <div>
            <div className="border-2 border-gray-200 rounded-2xl">
                <div className="grid grid-cols-4 gap-6 p-2 items-center">
                    <div className="col">
                        <img
                            className="h-40 w-full rounded-xl"
                            src={villaInfo.imgs[0]}
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="">
                            <h2 className="text-xl font-bold mb-1 ">
                                {villaInfo.name}
                            </h2>
                            <div className="flex gap-1 text-red-400 text-sm ">
                                <span>
                                    <svg
                                        className="h-5 w-5"
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
                                </span>
                                {villaInfo.State} - {villaInfo.city}
                            </div>
                        </div>
                        <div className="flex gap-2 mb-2 mt-6 text-gray-500">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                            تاریخ سفر :
                        </div>
                        <div className="flex justify-start gap-8">
                            <div className="col">
                                <div className="font-bold">
                                    {" "}
                                    {villaInfo.reserveStartDate}{" "}
                                </div>
                                <span className="text-gray-400">
                                    ساعت 14:00
                                </span>
                            </div>
                            <div className="col">
                                <div className="font-bold">
                                    {villaInfo.reserveEndDate}
                                </div>
                                <span className="text-gray-400">
                                    ساعت 12:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col space-y-3 text-center">
                        {/* <div className="bg-green-100 text-green-600 px-3 py-2 rounded-lg flex gap-1">
                            <span>
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
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                            </span>
                            تایید شده
                        </div> */}
                        <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg flex gap-1">
                            <span>
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </span>
                            در انتظار تایید
                        </div>
                        <div className="font-bold text-lg">02 : 50 : 30</div>
                        <div>
                            <button className="text-red-400 mx-auto py-2 rounded-lg flex items-center justify-center">
                                مشاهده ویلا
                                <span>
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
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 flex justify-between py-4 px-2 items-center">
                    <div>
                        <button className="border-2 border-red-200 rounded-full text-black py-3 px-4">
                            گفتگو با پشتیبانی - 09030949095
                        </button>
                    </div>
                    <div>
                        <button className="bg-red-400 text-white text-base px-8 py-3 rounded-full "> مشاهده و پرداخت </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryMainCardVertically;
