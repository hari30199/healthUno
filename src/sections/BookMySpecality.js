import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_banner from "../assets/Images/Home_banner.png";
import { motion, AnimatePresence } from "framer-motion"

const dummyData = [
  {
    id: 1,
    title: "Booking",
    img: "",
  },
  {
    id: 2,
    title: "Booking",
    img: "",
  },
  {
    id: 3,
    title: "Booking",
    img: "",
  },
  {
    id: 4,
    title: "Booking",
    img: "",
  },
  {
    id: 5,
    title: "Booking",
    img: "",
  },
  {
    id: 6,
    title: "Booking",
    img: "",
  },
];

export default function BookMySpecality() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2); // Adjust the number of cards to show on smaller screens
        setSlidesToScroll(2); // Adjust the number of cards to scroll on smaller screens
      } else {
        setSlidesToShow(4); // Reset the number of cards to show on larger screens
        setSlidesToScroll(4); // Reset the number of cards to scroll on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div style={{ width: "85%", margin: "30px auto 0"  }} className="bg-gray-100 rounded-lg py-5 px-10">
        <div className="flex justify-between items-center">
        <div/>
      <div>
        <h1 className="text-blue_dark text-2xl text-center">
          Book By Speciality
        </h1>
      </div>
      <div className="text-blue_dark cursor-pointer">
        View all
      </div>
    </div>
      <div className="mt-10">
      <Slider {...settings}>
        {dummyData.map((item) => (
            <AnimatePresence>
            <div className="">
              
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  key={item.id}
                  className="border rounded-lg hover:scale-105 duration-500 cursor-pointer m-5 shadow-sm"
                >
                  <img
                    className="w-full h-[150px] md:h-[100px] object-cover border-none"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="flex justify-center font-semibold text-blue_dark">
                    <p>{item.title}</p>
                  </div>
                  <div className="flex justify-center font-light ">
                    <p>{'type'}</p>
                  </div>
                  <div className="flex justify-center text-red-400">
                    <p>{'price'}</p>
                  </div>
                </motion.div>
            
            </div>
          </AnimatePresence>
        ))}
      </Slider>
      </div>
    </div>
  );
}
