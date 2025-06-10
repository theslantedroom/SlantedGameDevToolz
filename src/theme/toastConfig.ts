import type { ToastOptions } from "react-toastify";

export const standardToastConfig: ToastOptions<unknown> = {
	position: "top-left",
	autoClose: 2000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: "dark",
};
export const awayTimeToastConfig: ToastOptions<unknown> = {
	position: "bottom-center",
	autoClose: 5000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: "dark",
};
export const saveStringToastConfig: ToastOptions<unknown> = {
	position: "top-left",
	autoClose: 10000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: "dark",
};
