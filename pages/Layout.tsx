import { FollowBar } from "@/components/FollowBar";
import { Sidebar } from "../components/Sidebar";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";

export const Layout = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="container h-full mx-auto xl:px-30 text-white max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="text-white col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            <Header showBackArrow label="Home"/>
          </div>
          <FollowBar/>
        </div>
      </div>
    </div>
  );
};
