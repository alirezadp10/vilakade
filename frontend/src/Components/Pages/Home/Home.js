import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SliderFull from "../../SecondaryComponent/SliderFull";
import Category from "./Category";
import Hero from "./Hero";
import MainTitle from "./../../GlobalComponenet/Titles/MainTitle";

import { defaultMarginTop } from "./../../variables";
import SpecialMainCard from "./SpecialMainCard";
import VerticalSlider from "./Components/VerticalSlider";

//  import villa
import api from "./../../../Api/VillaApi";

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
import axios from "axios";

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
      discount: 20,
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
      discount: 20,
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

  const [ActiveVillaMain, setActiveVillaMain] = useState(villaInformations[0]);
  //   console.log("ActiveVillaMain");
  //   console.log(ActiveVillaMain);

  useEffect(() => {
    const fetchVillas = async () => {
      try {
  //       // const response = await api.get("/villas");
        const response = axios.get(process.env.REACT_APP_API_URI + '/api/villas')
        console.log(response)
        if( response && response.data )
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          // response in not 200 range
          console.log('x')
          console.log(err.response.status);
          console.log(err.response.data);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    };
    fetchVillas();
    console.log('k')
  },[]);

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
              <VerticalSlider
                villaInformations={villaInformations}
                setActiveVillaMain={setActiveVillaMain}
              />
            </div>
            <div className="col-span-6">
              <SpecialMainCard ActiveVillaMain={ActiveVillaMain} />
            </div>
          </div>
        </div>
      </MainSection>

      <MainSection className="w-full" props={defaultMarginTop} dir="ltr">
        <div className="mr-10 mt-20">
          <MainTitle title="ویللا های پرطرفدار" />
          <SliderFull villaInformations={villaInformations} />
        </div>
      </MainSection>
    </HomeContainer>
  );
}

export default Home;
