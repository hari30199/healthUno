import React, {} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";

const dummyData = [
  {
    id: 1,
    title: "comprehensive health check",
    sub_title:'home Sample Collection',
    total_lab_test:'30',
    discout_percent:'40%',
    price:'129',
    sub_total:'100',
    img: "",
  },
  {
    id: 2,
    title: "comprehensive health check",
    sub_title:'home Sample Collection',
    total_lab_test:'30',
    discout_percent:'40%',
    price:'129',
    sub_total:'100',
    img: "",
  },
  {
    id: 3,
    title: "comprehensive health check",
    sub_title:'home Sample Collection',
    total_lab_test:'30',
    discout_percent:'40%',
    price:'129',
    sub_total:'100',
    img: "",
  },
  {
    id: 3,
    title: "comprehensive health check",
    sub_title:'home Sample Collection',
    total_lab_test:'30',
    discout_percent:'40%',
    price:'129',
    sub_total:'100',
    img: "",
  }
];

export default function PopularHeathPack() {


  return (
    <div style={{ width: "85%", margin: "30px auto 20px" }}>
      <div className="flex justify-between items-center">
        <div />
        <div>
          <h1 className="text-blue_dark text-2xl text-center">
            Popular Health CheckUp Packages
          </h1>
        </div>
        <div className="text-blue_dark cursor-pointer"></div>
      </div>
      <div className="mt-2">
        <AnimatePresence>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
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
                {/* <img
                  className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg"
                  src={item.image}
                  alt={item.name}
                /> */}
                  
                <div className="w-full h-[180px] md:h-[140px] object-cover rounded-t-lg items-center justify-between">
                   <h1 className="text-blue_dark font-thin text-center">{item.title}</h1>
                   <div className="bg-blue-gray-100 border rounded-lg w-3/4 m-4">
                   <h1 className="text-black font-thin py-2 px-1 text-sm">{item.sub_title}</h1>
                   </div>
                   <h1 className=" font-thin py-4 px-6">
                    <span className="font-semibold text-red-400 ">{item.total_lab_test} </span>Lab Test</h1>
                </div>
                <div className="flex justify-between items-center">
                <div className="bg-blue-gray-100 border rounded-lg m-4">
                   <h1 className="text-black font-thin py-2 px-1 text-sm">{item.discout_percent} OFF</h1>
                   </div>
                    <h1 className="py-2 px-1 line-through text-gray-400 text-sm">$ {item.price}</h1>
                    <h1 className="py-2 px-1 text-sm">$ {item.sub_total}</h1>
                </div>
                <div className="flex px-2 py-2 bg-yellow rounded-b-lg justify-center">
                  <p>Add To Cart</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
