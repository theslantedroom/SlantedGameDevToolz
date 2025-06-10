import { create } from "zustand";

// Define the types for state and actions
interface GlobalState {
	runLevel: number;
	actions: {
		setRunLevel: (n: number) => void;
		increaseRunLevel: () => void;
	};
}

// Create the store using the types
export const useGlobalStore = create<GlobalState>((set) => ({
	runLevel: 1,
	actions: {
		setRunLevel: (n: number) => set({ runLevel: n }),
		increaseRunLevel: () => set((state) => ({ runLevel: state.runLevel + 1 })),
	},
}));

export const useGlobalStoreActions = () =>
	useGlobalStore((state) => state.actions);
export const useRunLevel = () => useGlobalStore((state) => state.runLevel);
