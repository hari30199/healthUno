import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion"

const dummyData = [
  {
    id: 1,
    title: "Doctor Name",
    img: "",
  },
  {
    id: 2,
    title: "Doctor Name",
    img: "",
  },
  {
    id: 3,
    title: "Doctor Name",
    img: "",
  },
  {
    id: 4,
    title: "Doctor Name",
    img: "",
  }
];

export default function FeaturedDocters() {


  return (
    <div style={{ width: "85%", margin: "20px auto 0" }}>
    <div className="flex justify-between items-center">
        <div/>
      <div>
        <h1 className="text-blue_dark text-2xl text-center">
          Featured Doctors in Your City
        </h1>
        <h1 className="text-black text-1xl text-center">
          Find Best Doctors Near You
        </h1>
      </div>
      <div className="text-blue_dark cursor-pointer">
        View all
      </div>
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
              <img
                className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-center px-2 py-2 bg-yellow rounded-b-lg">
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  </div>
  
  );
}
