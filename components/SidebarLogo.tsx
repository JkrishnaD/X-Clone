import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";

export const SidebarLogo = () => {
    const pathname = usePathname();
    return (
        <div
            onClick={() => {
                pathname === "/" ? null : (window.location.href = "/");
            }}
            className="rounded-full h-14 w-14 p-4 mt-1 flex justify-center items-center hover:bg-slate-400 cursor-pointer transition"
        >
            <BsTwitterX fill="white" size={30} />
        </div>
    );
};