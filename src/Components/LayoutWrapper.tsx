
"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import TopMenuBar from "./TopMenuBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarState, setSidebarState] = useState<"full" | "icons" | "hidden">(
    "full"
  );

  const toggleSideBar = () => {
    setSidebarState((prev) =>
      prev === "full" ? "icons" : prev === "icons" ? "hidden" : "full"
    );
  };

  return (
    <div>
      <Provider store={store}>
        <NavBar toggleSideBar={toggleSideBar} sidebarState={sidebarState} />
        <div className="flex">
          {sidebarState !== "hidden" && (
            <div
              className={` transition-width  ${
                sidebarState === "full"
                  ? "w-[15%] duration-300"
                  : "w-[5%] duration-700 "
              }`}
            >
              <SideBar showIconsOnly={sidebarState === "icons"} />
            </div>
          )}
          <div
            className={`flex-1 ${
              sidebarState === "full"
                ? "w-[85%] py-2 pl-2   transition-all duration-700 ease-out"
                : sidebarState === "icons"
                ? "w-[95%] py-2 pl-2 transition-all duration-700 ease-out"
                : "w-full py-2 transition-all duration-700 ease-out"
            }`}
          >
            <div>
              
            </div>
            <TopMenuBar/>
            {children}
          </div>
        </div>
      </Provider>
    </div>
  );
}
