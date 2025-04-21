import React from "react";
import { tabs } from "../data/constants.tsx";
import { OverflowDropdownProps } from "../data/types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export const OverflowDropdown: React.FC<OverflowDropdownProps> = ({
  overflowTabs,
  pinnedTabs,
  togglePin,
  setActiveTab,
  activeTab,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  if (overflowTabs.length === 0) return null;

  return (
    <div className=" group">
      <div
        className="px-5 py-4 cursor-pointer text-inactive-gra bg-active-border-color min-w-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/images/arrow-icon.svg"
          alt="arrow icon"
          className={clsx("size-4", { "rotate-180": !isOpen })}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 text-inactive-gray bg-white shadow-md border border-gray-300 mt-1 right-0 w-[225px]">
          {overflowTabs.map((name) => {
            const tab = tabs.find((t) => t.name === name);
            if (!tab) return null;
            const isPinned = pinnedTabs.includes(tab.name);

            return (
              <div
                key={`dropdown-${tab.name}`}
                className="flex justify-between items-center p-[15px] hover:bg-active-tab cursor-pointer gap-2"
                onClick={() => setActiveTab(tab.name)}
              >
                <div
                  className="flex flex-row gap-2.5"
                  onClick={() => navigate(tab.path)}
                >
                  {tab.image.icon}
                  <span
                    className={`text-sm ${
                      activeTab === tab.name && "text-black"
                    }`}
                  >
                    {tab.name}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePin(tab.name);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
