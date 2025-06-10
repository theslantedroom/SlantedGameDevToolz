import { create } from "zustand";
type AppRoutes = "mainMenu" | "play";

interface State {
	route: AppRoutes;
	actions: {
		setRoute: (n: AppRoutes) => void;
	};
}

export const appRoutesStore = create<State>((set) => ({
	route: "mainMenu",
	actions: {
		setRoute: (n: AppRoutes) => set({ route: n }),
	},
}));

export const useAppRoutesActions = () =>
	appRoutesStore((state) => state.actions);

export const useRoute = () => appRoutesStore((state) => state.route);
