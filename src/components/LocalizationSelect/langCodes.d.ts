export type LangCode =
	| ""
	| "_de"
	| "_fr"
	| "_es"
	| "_zh"
	| "_ja"
	| "_ko"
	| "_ru"
	| "_it"
	| "_pt"
	| "_hi";

export type LangCodeTexts =
	| "_en"
	| "_de"
	| "_fr"
	| "_es"
	| "_zh"
	| "_ja"
	| "_ko"
	| "_ru"
	| "_it"
	| "_pt"
	| "_hi";

export type LocalizedTexts = {
	[key in LangCodeTexts]: string;
};
export type LocalizedDynamicTexts = {
	[key in LangCodeTexts]: (val: number) => string;
};

export type LocalizedText = {
	[key: string]: LocalizedTexts;
};
export type LocalizedDynamicText = {
	[key: string]: LocalizedDynamicTexts;
};

export type LocalizedLine = {
	_en: string;
	_de: string;
	_fr: string;
	_es: string;
	_zh: string;
	_ja: string;
	_ko: string;
	_ru: string;
	_it: string;
	_pt: string;
	_hi: string;
	// [key: string]: string; // Allow additional keys
};

type NumOrString = number | string | undefined | boolean;
export type LocalizedDynamicLine = {
	_en: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_de: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_fr: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_es: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_zh: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_ja: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_ko: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_ru: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_it: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_pt: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	_hi: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string;
	// [key: string]: (a: NumOrString, b?: NumOrString, c?: NumOrString) => string; // Optional for extensibility
};
export type LocalizedLines = {
	[key: string]: SelectLang; // Allow additional keys
};
