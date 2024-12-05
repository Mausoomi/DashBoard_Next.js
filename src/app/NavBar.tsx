"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import chat from "../../public/icons/chat.png";
import bell from "../../public/icons/bell.png";
import star from "../../public/icons/star.png";
import profile from "../../public/image 1.png";
import maximizer from "../../public/icons/maximize-4.png";
import { FaPlus } from "react-icons/fa6";
import dashboard from "../../public/icons/view-grid.png";
import Groups from "../../public/icons/user-group.png";
import Individuals from "../../public/icons/user.png";
import Hotspots from "../../public/icons/status-online.png";
import AdvancedSearch from "../../public/icons/document-search.svg";
import Language from "../../public/icons/globe-alt.png";
import Setting from "../../public/icons/cog.png";
import logOut from "../../public/icons/logout.png";
import menu from "../../public/icons/menu.png";

type DropDownItem = {
  icon: any;
  item: string;
  link: string;
};
function NavBar() {
  const [allDropDown, setAllDropDown] = useState(false);
  const [ProfileDropDown, setProfileDropDown] = useState(false);

  const AllDropDown: DropDownItem[] = [
    {
      item: "All",
      icon: dashboard,
      link: "",
    },
    {
      item: "Groups",
      icon: Groups,
      link: "",
    },
    {
      item: "Individuals",
      icon: Individuals,
      link: "",
    },
    {
      item: "Hotspots",
      icon: Hotspots,
      link: "",
    },
    {
      item: "Advanced Search",
      icon: AdvancedSearch,
      link: "",
    },
  ];

  const ProfileDetailDropDown: DropDownItem[] = [
    {
      item: "Full screen",
      icon: maximizer,
      link: "",
    },
    {
      item: "Account",
      icon: Individuals,
      link: "",
    },
    {
      item: "Language: English",
      icon: Language,
      link: "",
    },
    {
      item: "Settings",
      icon: Setting,
      link: "",
    },
  ];

  const handleAllDropDown = () => {
    setAllDropDown(!allDropDown);
  };
  const handleProfileDropDown = () => {
    setProfileDropDown(!ProfileDropDown);
  };

  return (
    <div>
      <div className="flex justify-between bg-white rounded-lg p-4 shadow-md">
        <div className="flex gap-4 items-center">
          <Image src={menu} alt="logo" width={28} height={28} />
          <Image src={logo} alt="logo" width={40} height={40} />
          <p className="text-[#0F67B1] font-medium  text-base ">
            Youth & Safty
          </p>

          <IoIosArrowBack className="text-[#0F67B1] text-[20]" />
        </div>

        <div className="flex">
          <div className="relative inline-block text-left">
            <div className="flex border-[#E0E0E0] border-[1px] rounded-[50px]">
              <button
                className="inline-flex w-full justify-center gap-x-1.5 rounded-l-[50px] bg-[#E0E0E0] px-3 py-2 text-sm font-semibold text-[#404040] shadow-sm  hover:bg-gray-50"
                id="menu-button"
                onClick={handleAllDropDown}
              >
                All
                <IoIosArrowDown />
              </button>
              <div className=" relative  rounded-r-[50px] px-2  ">
                <input
                  placeholder="Search Here .."
                  className="h-full rounded-r-[50px] "
                />
                <div className=" absolute bottom-[10px] right-[12px] text-[#404040] text-sm">
                  <RiSearchLine />
                </div>
              </div>
            </div>
            {allDropDown ? (
              <ul className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {AllDropDown.map((item, index) => (
                  <li
                    className="flex px-4 py-3 text-sm text-gray-700 gap-3"
                    key={index}
                  >
                    <Image
                      src={item.icon}
                      alt={item.item}
                      width={20}
                      height={20}
                    />
                    <p>{item.item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex  items-center gap-2 text-[#0F67B1] border-[#0F67B1] border-[1px]  rounded-[50px] py-[10px]  px-[18px]">
            <FaPlus />
            <p> Add</p>
          </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={chat} alt="chat" width={20} />
          </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={bell} alt="bell" width={20} />
          </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={star} alt="star" width={20} />
          </div>
          <div className=" bg-[#C2C2C2] py-4 w-[1px] h-[24px]"> </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={maximizer} alt="maximizer" width={20} />
          </div>
          <div className=" bg-[#C2C2C2] py-4 w-[1px] h-[24px]"> </div>
          <div className="flex border-[1px] border-[#E0E0E0]  rounded-[50px] p-[6px]">
            <div>
              <Image
                src={profile}
                width={35}
                height={35}
                alt="profile"
                className=" rounded-[50%]  "
              />
            </div>

            <div className="relative inline-block text-left  ">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-[50%] bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={handleProfileDropDown}
                >
                  <IoIosArrowDown />
                </button>
              </div>
              {ProfileDropDown ? (
                <ul className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                    <Image
                      src={profile}
                      width={35}
                      height={35}
                      alt="profile"
                      className=" rounded-[50%]  "
                    />
                    <div>
                      <p className=" text-base font-medium">John Doe</p>
                      <p className="text-[#757575] text-xs ">
                        johndoe@gmail.com
                      </p>
                    </div>
                  </li>

                  <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                    {/* <Image src={logOut} alt="logOut" width={20} height={20} /> */}
                    <p>Dark / Light modus</p>
                  </li>
                  {ProfileDetailDropDown.map((item, index) => (
                    <li
                      className="flex px-4 py-3 text-sm text-gray-700 gap-3"
                      key={index}
                    >
                      <Image
                        src={item.icon}
                        alt={item.item}
                        width={20}
                        height={20}
                      />
                      <p>{item.item}</p>
                    </li>
                  ))}
                  <li className="flex px-4 py-3 text-sm text-[#CB3A31] gap-3">
                    <Image src={logOut} alt="logOut" width={20} height={20} />
                    <p>Logout</p>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;