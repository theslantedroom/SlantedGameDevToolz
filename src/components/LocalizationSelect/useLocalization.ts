import { useCallback, useMemo } from "react";

import { getMenuText } from "./LocalizationSelect";
import type {
	LangCode,
	LocalizedDynamicLine,
	LocalizedLine,
} from "./langCodes";

export const getLangCode = () => {
	const langCode: LangCode = localStorage.getItem("langCode") as LangCode;
	return langCode || "";
};

export const useLocalization = () => {
	const setLanguage = useCallback((code: LangCode) => {
		// when a flag is clicked
		localStorage.setItem("langCode", code);
		window.location.reload();
	}, []);

	const langCode = useMemo(() => {
		return getLangCode() as LangCode;
	}, []);

	const getLocalizedText = useCallback(
		(text: LocalizedLine) => {
			return getMenuText(text, langCode);
		},
		[langCode],
	);
	return { setLanguage, langCode, getLocalizedText };
};

export const getLocalizedTextRaw = (localizedLine: LocalizedLine) => {
	if (!localizedLine) {
		return "";
	}
	const langCode = (localStorage.getItem("langCode") || "") as LangCode;
	if (langCode) return localizedLine?.[langCode] as string;
	return localizedLine._en;
};

export const getLocalizedDynamicTextRaw = (
	localizedLine: LocalizedDynamicLine,
	val?: number | string | boolean,
	val2?: number | string | boolean,
	val3?: number | string | boolean,
) => {
	if (!localizedLine) {
		return "";
	}
	const langCode = (localStorage.getItem("langCode") || "") as LangCode;
	if (langCode) {
		const res = localizedLine?.[langCode](val, val2, val3);
		if (!res) console.error(val, val2, val3);
		if (typeof res !== "string") {
			console.error(`getLocalizedDynamicTextRaw must return a string`);
		}
		return res as string;
	}

	if (!localizedLine) {
		console.error(`localizedLine`);
	}
	return localizedLine._en(val, val2, val3) as string;
};
