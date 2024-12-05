import Image from "next/image";

type DropDownItem = {
  icon: any;
  heading: string;
  data: [];
};
export default function DropDown({}) {
  return (
    <div>
      <ul className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        {/* <li className="flex px-4 py-3 text-sm text-gray-700 gap-3" key={index}>
          <Image src={item.icon} alt={item.item} width={20} height={20} />
          <p>{item.item}</p>
        </li> */}

       
      </ul>
    </div>
  );
}
