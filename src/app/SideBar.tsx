"use client";

import React from "react";
import SideBarItem from "./Components/SideBarItem";
import Image from "next/image";
import reload from "../../public/icons/refresh.png";
import { useState } from "react";
import arrowUp from "../../public/icons/Arrow-up.png";
import arrowDown from "../../public/icons/Arrow-down.png";
import Overview from "../../public/icons/view-grid.png";
import Favorites from "../../public/icons/star.png";
import Chats from "../../public/icons/chat.png";
import Contacts from "../../public/icons/phone.png";
import Individuals from "../../public/icons/user.png";
import Groups from "../../public/icons/user-group.png";
import Residential from "../../public/icons/office-building.png";
import sad from "../../public/icons/emoji-sad.png";
import happy from "../../public/icons/emoji-happy.png";
import Hotspots from "../../public/icons/status-online.png";
import Report from "../../public/icons/report.png";
import Agenda from "../../public/icons/server.png";
import Meeting from "../../public/icons/meeting.png";
import Documents from "../../public/icons/folder.png";
import Task from "../../public/icons/task.png";

type SideBarDataItem = {
  item: string;
  icon: any;
  link: string;
};

type SideBarItem = {
  type: string;
  data: SideBarDataItem[];
};

function SideBar() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    General: true,
    Management: true,
    Productivity: true,
    Other: true,
  });

  const SideBarDetails: SideBarItem[] = [
    {
      type: "General",
      data: [
        {
          item: "Overview",
          icon: Overview,
          link: "",
        },
        {
          item: "Favorites",
          icon: Favorites,
          link: "",
        },
        {
          item: "Chats",
          icon: Chats,
          link: "",
        },
        {
          item: "Contacts",
          icon: Contacts,
          link: "",
        },
      ],
    },
    {
      type: "Management",
      data: [
        {
          item: "Individuals",
          icon: Individuals,
          link: "",
        },
        {
          item: "Groups",
          icon: Groups,
          link: "",
        },
        {
          item: "Residential nuisance",
          icon: Residential,
          link: "",
        },
        {
          item: "Criminal Undermining",
          icon: sad,
          link: "",
        },
        {
          item: "BIBOB",
          icon: happy,
          link: "",
        },
        {
          item: "Hotspots",
          icon: Hotspots,
          link: "",
        },
        {
          item: "Reports",
          icon: Report,
          link: "",
        },
      ],
    },
    {
      type: "Productivity",
      data: [
        {
          item: "Agenda",
          icon: Agenda,
          link: "",
        },
        {
          item: "Meeting",
          icon: Meeting,
          link: "",
        },
        {
          item: "Documents",
          icon: Documents,
          link: "",
        },
        {
          item: "Task",
          icon: Task,
          link: "",
        },
      ],
    },
    {
      type: "Other",
      data: [
        {
          item: "All",
          icon: Task,
          link: "",
        },
      ],
    },
  ];
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the section's visibility
    }));
  };
  return (
    <div>
      <div className=" flex flex-col gap-2 py-2">
        <div className="flex bg-white rounded-xl items-center justify-center p-2 shadow-md">
          <Image src={reload} width={20} height={20} alt="refresh" />
          <p className="text-[#757575] text-sm p-2">Updated 6 minutes ago</p>
        </div>

        {SideBarDetails.map((section, index) => (
          <div key={index} className=" bg-white rounded-xl p-4 shadow-md">
            {/* Section Header */}
            <div
              className="flex justify-between items-center cursor-pointer py-2    "
              onClick={() => toggleSection(section.type)}
            >
              <h3 className="font-semibold text-[#757575] text-[12px]">
                {section.type}
              </h3>
              <Image
                src={expandedSections[section.type] ? arrowUp : arrowDown}
                alt="toggle"
                width={20}
                height={20}
              />
            </div>

            {/* Section Items with Slide Animation */}
            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                height: expandedSections[section.type]
                  ? `${section.data.length * 48}px` // Dynamically calculate max-height
                  : "0", // Hidden when collapsed
              }}
            >
              {section.data.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 py-5  hover:bg-gray-100 rounded-lg transition"
                >
                  <Image
                    src={item.icon} // Fallback for empty icon
                    alt={item.item}
                    width={20}
                    height={20}
                  />
                  <p className="text-[#404040] text-sm font-normal">
                    {item.item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
