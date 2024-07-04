"use client";
import { BiHomeAlt2 } from "react-icons/bi";
import { SidebarLogo } from "./SidebarLogo";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { SidebarIcon } from "./SidebarIcon";

export const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BiHomeAlt2,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: IoIosNotifications,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-start">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarIcon
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
