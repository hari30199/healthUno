import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import home_banner from "../assets/Images/Home_banner.png";
import { Link } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    title: "Booking Top related Hospitals",
    sub_title: "Multi-Speciality3",
    description:
      "Hepatology, General Medicine, Haematology, Anesthesiology, Cardiology, Cardiovascular, Thoracic Surgery, Dentistry,Dermatology & Etc...",
    img: "",
  },
  {
    id: 2,
    title: "Booking Top related Hospitals",
    sub_title: "Multi-Speciality3444",
    description:
      "Hepatology, General Medicine, Haematology, Anesthesiology, Cardiology, Cardiovascular, Thoracic Surgery, Dentistry,Dermatology & Etc...",
    img: "",
  },
  {
    id: 3,
    title: "Booking Top related Hospitals",
    sub_title: "Multi-Speciality",
    description:
      "Hepatology, General Medicine, Haematology, Anesthesiology, Cardiology, Cardiovascular, Thoracic Surgery, Dentistry,Dermatology & Etc...",
    img: "",
  },
  {
    id: 4,
    title: "Booking Top related Hospitals",
    sub_title: "Multi-Speciality",
    description:
      "Hepatology, General Medicine, Haematology, Anesthesiology, Cardiology, Cardiovascular, Thoracic Surgery, Dentistry,Dermatology & Etc...",
    img: "",
  },
];

const HomeCarousel = () => {
  return (
    <Carousel
      className="max-w-[1240px] mx-auto"
      showThumbs={false}
      width={"none"}
      emulateTouch={true}
      showArrows={false}
      showStatus={false}
      swipeable={true}
      infiniteLoop
      autoPlay
      renderIndicator={(onClick, isSelected, index, label) => (
        <div
          onClick={onClick}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: isSelected ? "yellow" : "grey",
            margin: "0 5px -15px",
            cursor: "pointer",
            display: "inline-block",
          }}
        />
      )}
    >
      {dummyData.map(
        (
          item,
          ind // Use parentheses for the map function
        ) => (
          <Link to="/hospitalsScreen">
            <div className="max-w-[1200px] mx-auto p-4 relative shadow m-5 rounded-xl">
              <div className="md:flex bg-none">
                {/* content */}
                <div className="hidden md:w-2/4 md:block text-gray-200 justify-center">
                  <h1 className="my-6 text-1 sm:text-4 md:text-1 lg:text-1 text-justify text-black font-semibold">
                    {item.title}
                  </h1>
                  <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify text-black">
                    {item.sub_title}
                  </h1>
                  <h1 className="my-10  text-4 sm:text-4 md:text-4 lg:text-4 text-justify w-2/3 text-black">
                    {item.description}
                  </h1>
                  <h1
                    className="text-4 sm:text-4 md:text-4 lg:text-4  w-3/12 p-2 rounded-md text-black items-center bg-yellow"
                    onClick={() => console.log("hari>>BookNow>>")} // Use a function for the click event
                  >
                    Book Now
                  </h1>
                </div>

                {/* image */}
                <div className="md:w-2/4 max-h-[500px] z-10 relative m-5 rounded-xl items-center flex-1">
                  <img
                    className="w-10 h-[300px] rounded-xl items-center"
                    src={home_banner} // Add the image source
                    alt="#"
                  />
                  {/* Overlapping content */}
                  <div className="absolute inset-0 flex items-center justify-center md:hidden text-gray-200 px-2">
                    {/* Your overlapping content */}
                    <div className="justify-center items-center w-full">
                      <h1 className="my-2 text-base text-justify text-black">
                        {item.title}
                      </h1>
                      <h1 className="my-2 text-sm sm:text-xs text-justify text-black">
                        {item.sub_title}
                      </h1>
                      <h1 className="my-2 text-sm sm:text-xs text-black w-2/3">
                        {item.description}
                      </h1>
                      <h1 className="text-sm sm:text-xs  text-black p-2 rounded-md items-center bg-yellow w-3/12">
                        Book Now
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      )}
    </Carousel>
  );
};

export default HomeCarousel;
