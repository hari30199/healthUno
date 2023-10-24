import React from "react";
const dummyData = [
  {
    id: 1,
    title: "new1",
  },
  {
    id: 2,
    title: "new2",
  },
  {
    id: 3,
    title: "new3",
  },
  {
    id: 4,
    title: "new4",
  },
  {
    id: 5,
    title: "new5",
  },

  {
    id: 5,
    title: "new6",
  },
  {
    id: 6,
    title: "new7",
  },
  {
    id: 7,
    title: "new8",
  },
];

const Category = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="md:w-1/4">
          {/* Left empty for spacing, or you can add content */}
        </div>
        <div className="md:w-1/2 text-center">
          <p className="text-blue_dark text-2xl md:text-3xl">
            Doctor Created health Checks
          </p>
        </div>
        <div className="md:w-1/4 text-blue_dark cursor-pointer text-sm md:text-base text-right mt-4 md:mt-0">
          View all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200 "
          >
            <img className="w-16" src={item.image} alt={item.name} />
            <h2 className="sm:text-l font-light">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
