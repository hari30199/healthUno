import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import { Card } from "@material-tailwind/react";
import Food from "../components/Food";
import Category from "../components/Category";
import OurServices from "../sections/OurServices";
import FeaturedDocters from "../sections/FeaturedDoctors";
import BookMySpecality from "../sections/BookMySpecality";
import home_banner from "../assets/Images/Home_banner.png";
import PopularHeathPack from "../sections/PopularHeathPack";
import TopBookedTests from "../sections/TopBookedTests";

const dummyData = [
  { id: 1, title: "new", image: "" },
  { id: 2, title: "new", image: "" },
  { id: 3, title: "new", image: "" },
];

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <OurServices
        title={"Our Services"}
        enableViewAll={false}
        showArrows={true}
      />
      <FeaturedDocters />
      <BookMySpecality />
      {/* banner two  */}
      <>
        <h1 className="text-blue_dark text-2xl text-center text mt-4">
          Home Care
        </h1>
        <div className="max-w-[1240px] mx-auto p-4 relative shadow m-5 bg-gray-200">
          <div className="md:flex bg-none">
            {/* content */}
            <div className="hidden md:w-2/4 md:block text-gray-200 justify-center">
              <h1 className="my-6 text-1 sm:text-4 md:text-1 lg:text-1 text-justify text-black font-semibold">
                {"title"}
              </h1>
              <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify text-black">
                {"sub_title"}
              </h1>
              <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify w-2/3 text-black">
                {"description"}
              </h1>
              <h1
                className="text-4 sm:text-4 md:text-4 lg:text-4  w-3/12 p-2 rounded-md text-white items-center bg-blue_dark text-center"
                onClick={() => console.log("hari>>BookNow>>")}
              >
                Book Now
              </h1>
            </div>
            {/* image */}
            <div className="md:w-2/4 max-h-[500px] relative m-5 rounded-xl items-center flex-1">
              <img
                className="w-full h-[300px] rounded-xl items-center"
                src={home_banner}
                alt="#"
              />
            </div>
          </div>
        </div>
      </>

      <OurServices title={"Book By Symptoms"} enableViewAll={true} />

      <Category />
      <TopBookedTests />
      <PopularHeathPack />
      <>
        <h1 className="text-blue_dark text-2xl text-center text mt-4">
          Ayurdevic Lines
        </h1>
        <div className="max-w-[1000px] mx-auto p-4 relative shadow m-5 bg-gray-200">
          <div className="md:flex bg-none">
            {/* content */}
            <div className="hidden md:w-2/4 md:block text-gray-200 justify-center">
              <h1 className="my-6 text-1 sm:text-4 md:text-1 lg:text-1 text-justify text-black font-semibold">
                {"title"}
              </h1>
              <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify text-black">
                {"sub_title"}
              </h1>
              <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify w-2/3 text-black">
                {"description"}
              </h1>
              <h1
                className="text-4 sm:text-4 md:text-4 lg:text-4  w-3/12 p-2 rounded-md text-white items-center bg-blue_dark text-center"
                onClick={() => console.log("hari>>BookNow>>")}
              >
                Book Now
              </h1>
            </div>
            {/* image */}
            <div className="md:w-2/4 max-h-[500px] relative m-5 rounded-xl items-center flex-1">
              <img
                className="w-full h-[300px] rounded-xl items-center"
                src={home_banner}
                alt="#"
              />
            </div>
          </div>
        </div>
      </>
      <div className="fixed bottom-0 left-0 right-0 flex justify-end">
      <button className=" text-black px-4  bg-white">Button 1</button>
      <div className="border-r border-gray-400 h-5 bg-white"/>
      <button className=" text-black px-4  bg-white">Button 2</button>
      <div className="border-r border-gray-400 h-5 " />
      <button className=" text-black px-4 bg-white ">Button 2</button>
    </div>
    </div>
  );
}
