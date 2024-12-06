import Image from "next/image";
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
import { StaticImageData } from "next/image";

type SideBarDataItem = {
  item: string;
  icon: StaticImageData;
  link: string;
};

type SideBarItem = {
  type: string;
  data: SideBarDataItem[];
};

export const SideBarDetails: SideBarItem[] = [
  {
    type: "General",
    data: [
      {
        item: "Overview",
        icon: Overview,
        link: "",
      },
      // {
      //   item: "Favorites",
      //   icon: <Image src={Favorites} alt="All" width={20} height={20} />,
      //   link: "",
      // },
      // {
      //   item: "Chats",
      //   icon: <Image src={Chats} alt="All" width={20} height={20} />,
      //   link: "",
      // },
      // {
      //   item: "Contacts",
      //   icon: <Image src={Contacts} alt="All" width={20} height={20} />,
      //   link: "",
      // },
    ],
  },
  // {
  //   type: "Management",
  //   data: [
  //     {
  //       item: "Individuals",
  //       icon: <Image src={Individuals} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Groups",
  //       icon: <Image src={Groups} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Residential nuisance",
  //       icon: <Image src={Residential} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Criminal Undermining",
  //       icon: <Image src={sad} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "BIBOB",
  //       icon: <Image src={happy} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Hotspots",
  //       icon: <Image src={Hotspots} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Reports",
  //       icon: <Image src={Report} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //   ],
  // },
  // {
  //   type: "Productivity",
  //   data: [
  //     {
  //       item: "Agenda",
  //       icon: <Image src={Agenda} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Meeting",
  //       icon: <Image src={Meeting} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Documents",
  //       icon: <Image src={Documents} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //     {
  //       item: "Task",
  //       icon: <Image src={Task} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //   ],
  // },
  // {
  //   type: "Other",
  //   data: [
  //     {
  //       item: "All",
  //       icon: <Image src={Task} alt="All" width={20} height={20} />,
  //       link: "",
  //     },
  //   ],
  // },
];
