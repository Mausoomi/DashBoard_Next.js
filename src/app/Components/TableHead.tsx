import Image from 'next/image';
import React from 'react'
import icon from "../../../public/icons/user-group.png"
import arrow from "../../../public/icons/Arrow-down.png"
import pinIcon from "../../../public/icons/pin.png"
import eye from "../../../public/icons/eye.png"
// import DropDown from './DropDown';

// type DropDownItem = {
//   icon: any;
//   item: string;
//   link: string;
// };

function TableHead() {

    //  const show: DropDownItem[] = [
    //    {
    //      item: "All",
    //      icon: eye,
    //      link: "",
    //    }
    //  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={20} height={20} />
        <p className="text-[#404040]"> Groups </p>
      </div>
      <div className="flex">
        <div className=" flex items-center gap-4">
          <p className=" text-[32px] font-medium text-[#404040] ">All Groups</p>
          <Image src={arrow} alt="dropDown" width={20} height={20} />
          <div className="border-[#EDEDED]  border-[1px] rounded-[50%] p-2">
            <Image src={pinIcon} alt="dropDown" width={20} height={20} />
          </div>
        </div>
        <div>
          {/* <DropDown heading="Show/Hide Columns" icon={eye} data={show} /> */}
        </div>
      </div>
    </div>
  );
}

export default TableHead