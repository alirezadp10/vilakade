import React from "react";
import { birthday, marry, luxery, relax } from "../../../assets/imgs/Images";
import MainTitle from "../../GlobalComponenet/Titles/MainTitle";
import Cardcategory from "../../SecondaryComponent/Cardcategory";

import imgBehidLogo from "./../../../assets/imgs/li-yang-FKsKhlTrx78-unsplash.jpg";

function Category() {
    return (
        <div>
            <MainTitle title="دسته‌بندی‌های پرطرفدار" />
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-8 gap-x-4 md:gap-y-5 gap-y-4">
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای جشن و میمانی"
                    bg={birthday}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text=" مناسب برای ماه عسل"
                    bg={marry}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای آرامش"
                    bg={relax}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای لاکچری بازان"
                    bg={luxery}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای جشن و میمانی"
                    bg={marry}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای جشن و میمانی"
                    bg={relax}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای جشن و میمانی"
                    bg={birthday}
                />
                <Cardcategory
                    linkto={`sepehran01`}
                    text="مناسب برای جشن و میمانی"
                    bg={marry}
                />
            </div>
        </div>
    );
}

export default Category;
