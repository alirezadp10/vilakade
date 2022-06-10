import React, { useState } from "react";
import { birthday , marry , luxery , relax , flat , mostaghel , modern , dublex , Towni} from "../../../assets/imgs/Images";
import MainTitle from "../../GlobalComponenet/Titles/MainTitle";
import Cardcategory from "../../SecondaryComponent/Cardcategory";

import imgBehidLogo from "./../../../assets/imgs/li-yang-FKsKhlTrx78-unsplash.jpg";

function Category() {
    const [CategoryList, setCategoryList] = useState([
        {
            id: 1,
            title: "مناسب برای جشن و میمانی",
            link: "Celebration",
            image: birthday,
        },
        {
            id: 1,
            title: "مناسب برای ماه عسل ",
            link: "marry",
            image: marry,
        },
        {
            id: 1,
            title: "مناسب برای آرامش  ",
            link: "relax",
            image: relax,
        },
        {
            id: 1,
            title: "لوکس و مدرن",
            link: "modern & luxury",
            image: modern,
        },
        {
            id: 1,
            title: "شهرکی",
            link: "towni",
            image: Towni,
        },
        {
            id: 1,
            title: "فلت",
            link: "flat",
            image: flat,
        },
        {
            id: 1,
            title: "مستقل",
            link: "Independent",
            image: mostaghel,
        },
        {
            id: 1,
            title: "دوبلکس",
            link: "Duplex",
            image: dublex,
        },
    ]);

    return (
        <div>
            <MainTitle title="دسته‌بندی‌های پرطرفدار" />
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-8 gap-x-4 md:gap-y-5 gap-y-4 w-4/5 mx-auto">
                {CategoryList.map((item, index) => {
                    return (
                        <Cardcategory
                            key={item.id}
                            linkto={`sepehran01`}
                            text={item.title}
                            bg={item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Category;
