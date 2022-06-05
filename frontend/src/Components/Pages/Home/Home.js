import React , {useState} from "react";
import styled from "styled-components";
import SliderFull from "../../SecondaryComponent/SliderFull";
import Category from "./Category";
import Hero from "./Hero";
import MainTitle from "./../../GlobalComponenet/Titles/MainTitle";

import { defaultMarginTop } from "./../../variables";
import SpecialMainCard from "./SpecialMainCard";
import VerticalSlider from "./Components/VerticalSlider";

const HomeContainer = styled.div``;

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
    @media only screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
`;

function Home() {


    const [villaInformations, setVillaInformations] = useState([
        {
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
            discount : 20,
        },
        {
            id: 126,
            name: "سوییت نقلی «دینا» در رشت",
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
            imgs: {},
            reserveStatus: 1,
            discount : 20,
        },
        {
            id: 127,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "800000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 1,
            discount : 20,
        },
        {
            id: 128,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 129,
            name: "سوییت در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 130,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 131,
            name: "سوییت در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
    ])

    const [ActiveVillaMain, setActiveVillaMain] = useState(villaInformations[0]);


    return (
        <HomeContainer className="mx-auto">
            <MainSection className="container mx-auto">
                <div className="md:w-10/12 w-11/12 mx-auto h-fit">
                    <Hero />
                </div>
            </MainSection>

            <MainSection className="container mx-auto" props={defaultMarginTop}>
                <div className="md:w-10/12 w-11/12 mx-auto">
                    <Category />
                </div>
            </MainSection>

            <MainSection
                className="bg-gray-100 w-full verticallySlider"
                props={defaultMarginTop}
            >
                <div className="md:w-9/12 w-11/12 mx-auto pt-8">
                    <MainTitle title="اقامتگاه های ویژه" />
                    <div className="md:grid md:grid-cols-12 md:gap-8 flex flex-col gap-4">
                        <div className="col-span-6">
                            <VerticalSlider villaInformations={villaInformations} setActiveVillaMain={setActiveVillaMain} />
                        </div>
                        <div className="col-span-6">
                            <SpecialMainCard ActiveVillaMain={ActiveVillaMain} />
                        </div>
                    </div>
                </div>
            </MainSection>

            <MainSection className="w-full" props={defaultMarginTop} dir="ltr">
                <div>
                    <SliderFull villaInformations={villaInformations} />
                </div>
            </MainSection>

            
        </HomeContainer>
    );
}

export default Home;
