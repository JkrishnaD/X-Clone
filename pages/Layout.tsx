import { Sidebar } from "../components/Sidebar";

export const Layout = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="text-white col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            hi
          </div>
        </div>
      </div>
    </div>
  );
};
