import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface headerProps {
  label: string;
  showBackArrow?: boolean;
}

export const Header: React.FC<headerProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[.5px] border-neutral-700 p-4">
      <div className="flex flex-row">
        {showBackArrow && (
          <BiArrowBack
            color="white"
            size={28}
            onClick={handleBack}
            className="hover:opacity-70 cursor-pointer"
          />
        )}
        <h2 className="flex font-semibold justify-center items-center px-3 " >{label}</h2>
      </div>
    </div>
  );
};
