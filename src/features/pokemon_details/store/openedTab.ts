import { create } from "zustand";

// export type TabType = "GENERAL" | "HABILITIES" | "EVOLUTIONS";

type TabStore = {
  activeTab: number;
  setTab: (tab: number) => void;
};

export const useOpenedTab = create<TabStore>()((set) => ({
  activeTab: 0,
  setTab: (tab) => set({ activeTab: tab }),
}));
