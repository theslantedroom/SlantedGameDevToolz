import { create } from "zustand";
type AppRoutes = "mainMenu" | "play";

interface State {
	isLoading: boolean;
	actions: {
		setIsLoading: (isLoading: boolean) => void;
		handleResetGame: () => void;
	};
}

export const importExportLocalStorageStore = create<State>((set) => ({
	isLoading: false,
	actions: {
		setIsLoading: (isLoading: boolean) => set({ isLoading }),
		handleResetGame: () => {
			window.localStorage.clear();
			window.location.reload();
		},
	},
}));

export const useImportExportLocalStorageActions = () =>
	importExportLocalStorageStore((state) => state.actions);

export const useIsLoadingLocalStorage = () =>
	importExportLocalStorageStore((state) => state.isLoading);
