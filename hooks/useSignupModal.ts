import { create } from "zustand";

interface signupModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
//creating the store
export const useSignupModal = create<signupModal>()((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
