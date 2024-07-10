import { useLoginModal } from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa6";

export const TweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(()=>{
    loginModal.onOpen()
  },[])
  return (
    <div
      onClick={onClick}>
      <div className="rounded-full h-14 w-14 p-4 lg:hidden flex items-center justify-center transition cursor-pointer bg-blue-400 hover:bg-blue-500">
        <FaFeather size={26} color="white"/>
      </div>
      <div className="relative lg:flex p-3 rounded-3xl font-bold items-center justify-center hidden bg-sky-400 text-white hover:bg-white hover:text-sky-400 hover:border-sky-400 transition ease-in-out delay-150\ hover:-translate-y-1 hover:scale-110 duration-300">
        Tweet
      </div>
    </div>
  );
};
