import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_banner from "../assets/Images/Home_banner.png";

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

export default function OurServices(props) {
  const { title, enableViewAll } = props;
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(6);
        setSlidesToScroll(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={home_banner} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={home_banner} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div
      style={{ width: "75%", margin: "20px auto 0" }}
      className="bg-gray-100 px-4 py-2 shadow-xl mt-4"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="md:w-1/4">
          {/* Left empty for spacing, or you can add content */}
        </div>
        <div className="md:w-1/2 text-center">
          <p className="text-blue_dark text-2xl md:text-3xl">{title}</p>
        </div>
        <div className="md:w-1/4 text-blue_dark cursor-pointer text-sm md:text-base text-right mt-4 md:mt-0">
          {enableViewAll && "View all"}
        </div>
      </div>
      <div className="mt-2">
        <Slider {...settings}>
          {dummyData.map((item) => (
            <div key={item.id} className="px-20">
              <div className="max-w-full w-64 mx-auto p-4 relative">
                <div className=" bg-none">
                  {/* Circular image */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 shadow-xl">
                    <img
                      src={home_banner}
                      alt={item.title}
                      className="w-100% h-100% object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="w-full text-gray-200 justify-center items-cente text-center">
                    <h1 className="my-6 text-1 sm-text-4 md-text-1 lg-text-1  text-black">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
