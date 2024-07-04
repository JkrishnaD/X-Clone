import { IconType } from "react-icons";

interface SidebarIconProps {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
}
export const SidebarIcon:React.FC<SidebarIconProps> = ({
    label,
    href,
    icon:Icon,
    onClick
}) => {
  return(
    <div className="flex flex-col justify-center">
        <div className="relative rounded-full h-14 w-14 lg:hidden flex items-center justify-center cursor-pointer hover:bg-slate-500 transition ">
            <Icon size={26} color="white"/>
        </div>
        <div className="relative rounded-full gap-4 p-4 lg:flex items-center hidden cursor-pointer hover:bg-slate-500 transition">
            <Icon size={28} color="white"/>
            <p className="hidden lg:block text-white text-xl">
                {label}
            </p>
        </div>
    </div>
  )
};
