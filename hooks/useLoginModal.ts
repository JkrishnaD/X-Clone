import { create } from "zustand";

interface loginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
//creating the store
export const useLoginModal = create<loginModalStore>()((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
