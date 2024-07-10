import React, { useCallback } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "./Button";

interface modalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}
export const Modal: React.FC<modalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="justify-center
        flex
        items-center
        overflow-x-hidden
        overflow-y-auto
        outline-none
        focus:outline-none
        bg-neutral-800
        bg-opacity-80
        z-10
        fixed
        inset-0 "
      >
        <div
          className=" relative
          w-full
          md:w-1/2
          my-6
          mx-auto
          lg:h-auto
          flex
          justify-center
          h-full
          lg:max-w-3xl

        "
        >
          <div
            className="h-full
          lg:h-auto
          bg-black
          flex
          flex-col
          w-2/3
          relative
          justify-center
          border-0
          rounded-lg
          shadow-lg
          outline-none
          focus:outline-none
          "
          >
            {/* content section */}
            <div className="flex justify-between items-center p-10 rounded-t">
              {/* Header */}
              <h2 className="text-white font-semibold text-2xl">{title}</h2>
              <button
                onClick={handleClose}
                className="hover:opacity-50 cursor-pointer transition ml-auto border-0"
              >
                <IoClose size={26} color="white" />
              </button>
            </div>
            {/* body Section */}
            <div className=" px-10 pb-6 relative text-white flex-auto  justify-center ">
              {body}
              {/* <Input disabled onChange={()=>{}}/> */}
            </div>
            {/* Footer Section */}
            <div className="pb-5 flex relative items-center flex-col gap-2 text-white transition">
              <Button
                large
                outline
                secondary
                label={actionLabel}
                onClick={handleSubmit}
                disabled={disabled}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
