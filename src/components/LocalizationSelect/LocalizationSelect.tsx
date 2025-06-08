import type React from "react";

import { useMemo } from "react";
import { LangBtns } from "./LangBtns";
import type { LangCode, LocalizedLine } from "./langCodes";
import { getLangCode, useLocalization } from "./useLocalization";

export const getMenuText = (texts: LocalizedLine, langCode: LangCode) => {
	if (!langCode) return texts["_en"];

	const res = texts[langCode];
	if (!res) {
		return texts["_en"];
	}

	return texts[langCode];
};

export interface Props {
	hideTitle?: boolean;
}
export const LocalizationSelect: React.FC<Props> = ({ hideTitle }) => {
	const { setLanguage, langCode } = useLocalization();
	return (
		<LangBtns
			langCode={langCode}
			setLanguage={setLanguage}
			hideTitle={hideTitle}
		/>
	);
};
