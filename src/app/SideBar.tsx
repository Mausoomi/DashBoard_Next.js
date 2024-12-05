"use client";

import React from "react";

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
  icon:  React.ReactNode;
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
          icon: <Image src={Overview} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Favorites",
          icon: <Image src={Favorites} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Chats",
          icon: <Image src={Chats} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Contacts",
          icon: <Image src={Contacts} alt="All" width={20} height={20} />,
          link: "",
        },
      ],
    },
    {
      type: "Management",
      data: [
        {
          item: "Individuals",
          icon: <Image src={Individuals} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Groups",
          icon: <Image src={Groups} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Residential nuisance",
          icon: <Image src={Residential} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Criminal Undermining",
          icon: <Image src={sad} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "BIBOB",
          icon: <Image src={happy} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Hotspots",
          icon: <Image src={Hotspots} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Reports",
          icon: <Image src={Report} alt="All" width={20} height={20} />,
          link: "",
        },
      ],
    },
    {
      type: "Productivity",
      data: [
        {
          item: "Agenda",
          icon: <Image src={Agenda} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Meeting",
          icon: <Image src={Meeting} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Documents",
          icon: <Image src={Documents} alt="All" width={20} height={20} />,
          link: "",
        },
        {
          item: "Task",
          icon: <Image src={Task} alt="All" width={20} height={20} />,
          link: "",
        },
      ],
    },
    {
      type: "Other",
      data: [
        {
          item: "All",
          icon: <Image src={Task} alt="All" width={20} height={20} />,
          link: "",
        },
      ],
    },
  ];
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section], 
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

           
            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: expandedSections[section.type]
                  ? `${section.data.length * 80}px` 
                  : "0",
              }}
            >
              {section.data.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 py-5  hover:bg-gray-100 rounded-lg transition"
                >
                
                  <div>
                    {item.icon}
                  </div>
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


// "use client";

// import React from "react";

// import Image from "next/image";
// import reload from "../../public/icons/refresh.png";
// import { useState } from "react";
// import arrowUp from "../../public/icons/Arrow-up.png";
// import arrowDown from "../../public/icons/Arrow-down.png";
// import Overview from "../../public/icons/view-grid.png";
// import Favorites from "../../public/icons/star.png";
// import Chats from "../../public/icons/chat.png";
// import Contacts from "../../public/icons/phone.png";
// import Individuals from "../../public/icons/user.png";
// import Groups from "../../public/icons/user-group.png";
// import Residential from "../../public/icons/office-building.png";
// import sad from "../../public/icons/emoji-sad.png";
// import happy from "../../public/icons/emoji-happy.png";
// import Hotspots from "../../public/icons/status-online.png";
// import Report from "../../public/icons/report.png";
// import Agenda from "../../public/icons/server.png";
// import Meeting from "../../public/icons/meeting.png";
// import Documents from "../../public/icons/folder.png";
// import Task from "../../public/icons/task.png";
// import { DndContext, useSensor, useSensors, PointerSensor, KeyboardSensor, DragEndEvent, closestCenter } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy, useSortable, sortableKeyboardCoordinates } from "@dnd-kit/sortable"; 


// type SideBarDataItem = {
//   Itemid:Number;
//   item: string;
//   icon: React.ReactNode;
//   link: string;
// };

// type SideBarItem = {
//   id: Number;
//   type: string;
//   data: SideBarDataItem[];
// };

// function SideBar() {
//   const [expandedSections, setExpandedSections] = useState<
//     Record<string, boolean>
//   >({
//     General: true,
//     Management: true,
//     Productivity: true,
//     Other: true,
//   });

//   const [SideBarDetails, setSideBarDetails] = useState<SideBarItem[]>([
//     {
//       id: 1,
//       type: "General",
//       data: [
//         {
//           Itemid: 0,
//           item: "Overview",
//           icon: <Image src={Overview} alt="Overview" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 1,
//           item: "Favorites",
//           icon: (
//             <Image src={Favorites} alt="Favorites" width={20} height={20} />
//           ),
//           link: "",
//         },
//         {
//           Itemid: 2,
//           item: "Chats",
//           icon: <Image src={Chats} alt="Chats" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 3,
//           item: "Contacts",
//           icon: <Image src={Contacts} alt="Contacts" width={20} height={20} />,
//           link: "",
//         },
//       ],
//     },
//     {
//       id: 2,
//       type: "Management",
//       data: [
//         {
//           Itemid: 0,
//           item: "Individuals",
//           icon: (
//             <Image src={Individuals} alt="Individuals" width={20} height={20} />
//           ),
//           link: "",
//         },
//         {
//           Itemid: 1,
//           item: "Groups",
//           icon: <Image src={Groups} alt="Groups" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 2,
//           item: "Residential nuisance",
//           icon: (
//             <Image src={Residential} alt="Residential" width={20} height={20} />
//           ),
//           link: "",
//         },
//         {
//           Itemid: 3,
//           item: "Criminal Undermining",
//           icon: <Image src={sad} alt="Sad" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 4,
//           item: "BIBOB",
//           icon: <Image src={happy} alt="Happy" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 5,
//           item: "Hotspots",
//           icon: <Image src={Hotspots} alt="Hotspots" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 6,
//           item: "Reports",
//           icon: <Image src={Report} alt="Reports" width={20} height={20} />,
//           link: "",
//         },
//       ],
//     },
//     {
//       id: 3,
//       type: "Productivity",
//       data: [
//         {
//           Itemid: 0,
//           item: "Agenda",
//           icon: <Image src={Agenda} alt="Agenda" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 1,
//           item: "Meeting",
//           icon: <Image src={Meeting} alt="Meeting" width={20} height={20} />,
//           link: "",
//         },
//         {
//           Itemid: 2,
//           item: "Documents",
//           icon: (
//             <Image src={Documents} alt="Documents" width={20} height={20} />
//           ),
//           link: "",
//         },
//         {
//           Itemid: 3,
//           item: "Task",
//           icon: <Image src={Task} alt="Task" width={20} height={20} />,
//           link: "",
//         },
//       ],
//     },
//     {
//       id: 4,
//       type: "Other",
//       data: [
//         {
//           Itemid: 0,
//           item: "All",
//           icon: <Image src={Task} alt="Task" width={20} height={20} />,
//           link: "",
//         },
//       ],
//     },
//   ]);

//   const toggleSection = (section: string) => {
//     setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   // Handle drag end event
//   const handleDragEnd = (event: DragEndEvent, sectionType: string) => {
//     const { active, over } = event;

//     if (!over) return; // Do nothing if there's no target

//     // Find the index of the dragged item (active) and the target (over)
//     const section = SideBarDetails.find((s) => s.type === sectionType);
//     if (!section) return;

//     const sourceIndex = section.data.findIndex(
//       (item) => item.Itemid === active.id
//     );
//     const destinationIndex = section.data.findIndex(
//       (item) => item.Itemid === over.id
//     );

//     if (sourceIndex === destinationIndex) return; // No change if positions are the same

//     // Update the order of items
//     const updatedItems = [...section.data];
//     const [removed] = updatedItems.splice(sourceIndex, 1);
//     updatedItems.splice(destinationIndex, 0, removed);

//     setSideBarDetails((prevDetails) =>
//       prevDetails.map((sec) =>
//         sec.id === section.id ? { ...sec, data: updatedItems } : sec
//       )
//     );
//   };

//   // Set up sensors for drag events
//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
//   );

//   return (
//     <div>
//       <div className="flex flex-col gap-2 py-2">
//         <div className="flex bg-white rounded-xl items-center justify-center p-2 shadow-md">
//           <Image src={reload} width={20} height={20} alt="refresh" />
//           <p className="text-[#757575] text-sm p-2">Updated 6 minutes ago</p>
//         </div>

//         {SideBarDetails.map((section, index) => (
//           <div key={index} className="bg-white rounded-xl p-4 shadow-md">
//             <div
//               className="flex justify-between items-center cursor-pointer py-2"
//               onClick={() => toggleSection(section.type)}
//             >
//               <h3 className="font-semibold text-[#757575] text-[12px]">
//                 {section.type}
//               </h3>
//               <Image
//                 src={expandedSections[section.type] ? arrowUp : arrowDown}
//                 alt="toggle"
//                 width={20}
//                 height={20}
//               />
//             </div>

//             {expandedSections[section.type] && (
//               <DndContext
//                 sensors={sensors}
//                 onDragEnd={(event) => handleDragEnd(event, section.type)}
//                 collisionDetection={closestCenter}
//               >
//                 <SortableContext
//                   items={section.data}
//                   strategy={verticalListSortingStrategy}
//                 >
//                   <div className="overflow-hidden transition-all duration-300 ease-in-out">
//                     {section.data.map((item,index) => {
//                       const { setNodeRef, listeners, isDragging } = useSortable(
//                         { id: item.Itemid }
//                       );

//                       return (
//                         <button
//                           ref={setNodeRef}
//                           key={index}
//                           className={`flex items-center gap-4 py-5 hover:bg-gray-100 rounded-lg transition ${
//                             isDragging ? "bg-gray-200" : ""
//                           }`}
//                           {...listeners}
//                         >
//                           <div>{item.icon}</div>
//                           <p className="text-[#404040] text-sm font-normal">
//                             {item.item}
//                           </p>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </SortableContext>
//               </DndContext>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SideBar;

