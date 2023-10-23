import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_banner from "../assets/Images/Home_banner.png";
import { motion, AnimatePresence } from "framer-motion";

const dummyData = [
  {
    id: 1,
    title: "hospital 1",
    sub_title: "multiSpeciality",
    total_lab_test: "30",
    km: "25km",
    location: "Location",
    sub_total: "100",
    img: home_banner,
    opd:'OPD',
    timings:"11:30:00 AM - 8:00:00 PM"
  },
  {
    id: 2,
    title: "hospital 2",
    sub_title: "multiSpeciality",
    total_lab_test: "30",
    km: "25km",
    location: "Location",
    sub_total: "100",
    img: home_banner,
    opd:'OPD',
    timings:"11:30:00 AM - 8:00:00 PM"
  },
  {
    id: 3,
    title: "hospital 3",
    sub_title: "multiSpeciality",
    total_lab_test: "30",
    km: "25km",
    location: "Location",
    sub_total: "100",
    img: home_banner,
    opd:'OPD',
    timings:"11:30:00 AM - 8:00:00 PM"
  },
  {
    id: 4,
    title: "hospital 4",
    sub_title: "multiSpeciality",
    total_lab_test: "30",
    km: "25km",
    location: "Location",
    sub_total: "100",
    img: home_banner,
    opd:'OPD',
    timings:"11:30:00 AM - 8:00:00 PM"
  },
];

export default function HospitalsScreen() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2); // Adjust the number of cards to show on smaller screens
        setSlidesToScroll(2); // Adjust the number of cards to scroll on smaller screens
      } else {
        setSlidesToShow(2); // Reset the number of cards to show on larger screens
        setSlidesToScroll(2); // Reset the number of cards to scroll on larger screens
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
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div style={{ width: "75%", margin: "30px auto 20px" }}>
      <div className="mt-2">
        <AnimatePresence>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 pt-2">
            {dummyData.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                key={item.id}
                className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
              >
                <img
                  className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
                <div className="w-full  md:h-[100px] object-cover rounded-t-lg items-center text-center justify-between">
                  <h1 className="text-blue_dark font-thin text-center">
                    {item.title}
                  </h1>
                  <div className="bg-blue-gray-100 border rounded-lg m-4 text-center items-center flex justify-center">
                    <h1 className="text-black font-thin py-2 px-1 text-sm">
                      {item.sub_title}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <h1 className="text-black font-thin py-2 px-1 text-sm">
                      {item.km}
                    </h1>
                  </div>
                  <div className="border-r border-gray-400 h-5 m-2" />
                  <h1 className="py-2 px-1 font-thin text-sm">
                    {item.location}
                  </h1>
                </div>

                <div className="flex justify-center items-center">
                  <div className="">
                    <h1 className="text-gray-400 py-2 px-1 text-sm">
                      {item.opd}
                    </h1>
                  </div>
                  <h1 className="py-2 px-1 font-thin text-sm">
                    {item.timings}
                  </h1>
                </div>

                <div className="flex px-2 py-2 bg-yellow rounded-b-lg justify-center">
                  <p>Book Appointment</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
