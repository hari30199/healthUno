import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_banner from "../assets/Images/Home_banner.png";

const dummyData = [
  {
    id: 1,
    title: "comprehensive health check",
    sub_title: "home Sample Collection",
    total_lab_test: "30",
    discout_percent: "40%",
    price: "129",
    sub_total: "100",
    img: "",
  },
  {
    id: 2,
    title: "comprehensive health check",
    sub_title: "home Sample Collection",
    total_lab_test: "30",
    discout_percent: "40%",
    price: "129",
    sub_total: "100",
    img: "",
  },
  {
    id: 3,
    title: "comprehensive health check",
    sub_title: "home Sample Collection",
    total_lab_test: "30",
    discout_percent: "40%",
    price: "129",
    sub_total: "100",
    img: "",
  },
  {
    id: 3,
    title: "comprehensive health check",
    sub_title: "home Sample Collection",
    total_lab_test: "30",
    discout_percent: "40%",
    price: "129",
    sub_total: "100",
    img: "",
  },
];

export default function TopBookedTests(props) {
  const { title, enableViewAll } = props;
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

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
      style={{ width: "85%", margin: "20px auto 0" }}
      className="px-4 py-2 shadow-xl mt-4"
    >
      <div className="flex justify-between items-center">
        <div />
        <div>
          <h1 className="text-blue_dark text-2xl text-center">
            Top Booked Tests
          </h1>
        </div>
        <div className="text-blue_dark cursor-pointer">View all</div>
      </div>
      <div className="mt-2">
        <Slider {...settings}>
          {dummyData.map((item) => (
            <div key={item.id} className="px-2">
              <div className="border-2 border-gray-300 rounded p-4 bg-none space-y-4">
                <div className="flex">
                  {/* Circular image */}
                  <div className="w-40 md:h-15 rounded overflow-hidden mx-auto mb-3 shadow-xl">
                    <img
                      src={home_banner}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="w-full text-gray-200 ml-4">
                    <h1 className="my-1 text-sm text-red-400">{item.title}</h1>
                    <h1 className="my-1 text-sm font-thin text-black">
                      {item.sub_title}
                    </h1>
                    <h1 className="my-1 text-sm font-thin text-blue_dark">
                      {item.sub_title}
                    </h1>
                    <h1 className="my-1 text-sm font-thin text-orange-500">
                      28% cashback
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-black font-thin py-2 text-sm">
                    {item.discout_percent} OFF
                  </h1>
                  <h1 className="py-2 line-through text-gray-400 text-sm">
                    $ {item.price}
                  </h1>
                  <h1 className="py-2 text-sm">$ {item.sub_total}</h1>
                  <div className="bg-blue-gray-100 border rounded-lg m-4">
                    <h1 className="text-black font-thin py-2 text-sm px-3">
                      Add
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
