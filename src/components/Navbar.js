import React, { useState } from "react";
import HealthUnoLogo from "../../src/assets/Images/HealthUnoLogo.png";
import search_home from "../../src/assets/Images/search_home.svg";
import loc_home from "../../src/assets/Images/loc_home.svg";
import user_home from "../../src/assets/Images/user_home.svg";
import bell_home from "../../src/assets/Images/bell_home.svg";
import cart_home from "../../src/assets/Images/cart_home.svg";
import arrow_down from "../../src/assets/Images/arrow_down.svg";
import close_oultine from "../../src/assets/Images/cancel_outline.svg";
import {
  Drawer,
} from "@material-tailwind/react";
import TextInput from "./InputContainer.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "Login", link: "/Login", icon: user_home },
    { name: "", link: "/Login", icon: bell_home },
    { name: "Cart", link: "/SearchPage", icon: cart_home },
  ];

  const SubLinks = [
    { name: "My Appointments", link: "/" },
    { name: "Investigation", link: "/" },
    { name: "Prescription", link: "/" },
    { name: "Smart Health Card", link: "/" },
    { name: "HealthUno wallet", link: "/" },
    { name: "Orders", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(SubLinks[0].name);
  const [opendrawer, setOpenDrawer] = useState(false);

  const openDrawer = () => {
    setOpenDrawer(true);
    setOpen(false);
  };
  const closeDrawer = () => setOpenDrawer(false);

  const handleOptionClick = (link) => {
    setSelectedValue(link.name);
    setSubOpen(false);
  };

  const renderComponent = () => {
    return <Link to="/SearchPage"></Link>;
  };


  return (
    <div className="max-w-[1240px] top-0 py-5 items-center sticky mx-auto bg-white z-10">
      <div className="md:flex items-center bg-white py-4 md:px-15 px-7 border-b-2 border-gray-600">
        {/* logo section */}
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center border-r-0 pr-4 md:border-r-2">
            <img src={HealthUnoLogo} alt="Logo" className="w-34 h-12" />
          </div>
        </Link>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 py-5"
        >
          {open ? <h1>ff</h1> : <h2>hi</h2>}
        </div>
        <div
          className={`md:flex md:items-center justify-between md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-1 left-0 w-full  md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-40" : "top-[-490px]"
          }`}
        >
          <div className="justify-center px-2" onClick={openDrawer}>
            <div className="absolute items-center justify-items-center py-5">
              <img src={loc_home} alt="Logo" className="w-4 h-4" />
            </div>
            <div className="px-8">
              <h1 className="font-sans text-4 font-normal leading-8">
                Find Location
              </h1>
              <div className="flex items-center">
                <h1 className=" text-blue_dark">Location</h1>
                <img src={arrow_down} alt="Logo" className="w-4 h-4 ml-3" />
              </div>
            </div>
          </div>
          <div
            onClick={renderComponent}
            className="flex items-center space-x-4 md:space-x-0 border rounded-full w-full md:w-2/4 pl-6 z-10"
          >
            <img src={search_home} alt="Logo" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search Hospital, Doctor..."
              className="flex-1 px-4 py-2 outline-none rounded-l-full"
            />
            <button className="py-2 px-4 text-white align-baseline self-center rounded-full bg-blue_dark">
              Search
            </button>
          </div>
          {/* linke items */}
          <ul className="md:flex">
            {Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 flex items-center"
              >
                <img src={link.icon} alt="Logo" className="w-4 h-4 mx-1" />
                <a
                  href={link.link}
                  className="text-blue_dark hover:text-blue-400 duration-500 font-sans text-4 font-normal"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center items-center justify-center w-full">
        <div className="md:hidden text-center flex justify-center items-center border w-full">
          <button
            className="block  items-center justify-center"
            onClick={() => setSubOpen(!subOpen)}
          >
            {selectedValue}
          </button>
          <img src={arrow_down} alt="Logo" className="w-4 h-4 ml-3" />
        </div>

        {subOpen ? (
          <ul className="px-10 py-5">
            {SubLinks.map((link, index) => (
              <li key={index} className="my-2">
                <a
                  href={link.link}
                  className="text-blue_dark hover:text-blue-400 duration-500 font-sans text-4 font-normal"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="hidden md:flex items-center justify-between px-10 py-5">
            {SubLinks.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 flex items-center"
              >
                <a
                  href={link.link}
                  className="text-blue_dark hover:text-blue-400 duration-500 font-sans text-4 font-normal"
                  onClick={handleOptionClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <Drawer
        placement="right"
        open={opendrawer}
        onClose={closeDrawer}
        className="p-4 bg-white"
        size={450}
        onBlurCapture={undefined}
      >
        <div className="mb-6 flex items-center justify-between">
          <div
            className="absolute items-center justify-items-center py-5 mt-5"
            onClick={closeDrawer}
          >
            <img src={close_oultine} alt="Logo" className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-10">
          <TextInput
            placeholder="Enter your city"
            containerClass="border rounded-md border-black"
            customClasses="px-4 py-2 w-3/4 outline-none rounded-md"
            showButton={true}
            buttonTitle={"Check"}
            CustomebuttonClasses="bg-yellow w-3/12 px-4 rounded-md text-black "
            titleClass="font-sans text-4 font-normal"
            label={"Choose Your Location"}
            labelClassname="text-black"
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
