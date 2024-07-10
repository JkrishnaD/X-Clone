import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";

export const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div
            onClick={()=> router.push("/")}
            className="rounded-full h-14 w-14 p-4 mt-3 flex justify-center items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
            <BsTwitterX fill="white" size={30} />
        </div>
    );
};