"use client";
import { BiHomeAlt2 } from "react-icons/bi";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarIcon } from "./SidebarIcon";
import { MdLogout, MdNotificationsNone, MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TweetButton } from "./TweetButton";
import { Button } from "./Button";

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
      icon: FaRegUser,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: MdNotificationsNone,
    },
    {
      label: "Message",
      href: "/messages",
      icon: MdOutlineMail,
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
          <SidebarIcon onClick={() => {}} label="Logout" icon={MdLogout} />
          <TweetButton/>
        </div>
      </div>
    </div>
  );
};
