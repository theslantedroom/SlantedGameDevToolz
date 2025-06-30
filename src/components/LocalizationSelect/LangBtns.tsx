import type React from "react";
import { useMemo } from "react";
import { LangBtn } from "./LangBtn";
import { getMenuText } from "./LocalizationSelect";
import type { LangCode } from "./langCodes";
import { menuText } from "./menuText";

export interface Props {
	langCode: LangCode;
	setLanguage: (code: LangCode) => void;
	hideTitle?: boolean;
	size: number;
	fontColor: string;
}
export const LangBtns: React.FC<Props> = ({
	langCode,
	setLanguage,
	hideTitle = false,
	size,
	fontColor,
}) => {
	const select_lang = useMemo(() => {
		return getMenuText(menuText.select_lang, langCode);
	}, [langCode]);
	return (
		<div>
			{hideTitle ? null : (
				<div
					style={{
						margin: "15px auto 5px auto",
						maxWidth: 815,
						textAlign: "center",
						color: fontColor,
						backgroundColor: "rgba(0, 0, 0, 0.4)",
						padding: "8px 0px",
						borderRadius: "4px",
					}}
				>
					{select_lang}
				</div>
			)}

			<div
				style={{
					margin: "auto",
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<LangBtn
					imgPath={"en"}
					isSelected={!langCode}
					code=""
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_de"}
					code="_de"
					imgPath={"de"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_es"}
					code="_es"
					imgPath={"es"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_zh"}
					code="_zh"
					imgPath={"zh"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_ja"}
					code="_ja"
					imgPath={"ja"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_ko"}
					code="_ko"
					imgPath={"ko"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_fr"}
					code="_fr"
					imgPath={"fr"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_ru"}
					code="_ru"
					imgPath={"ru"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_it"}
					code="_it"
					imgPath={"it"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_pt"}
					code="_pt"
					imgPath={"pt"}
					setLanguage={setLanguage}
					size={size}
				/>
				<LangBtn
					isSelected={langCode === "_hi"}
					code="_hi"
					imgPath={"hi"}
					setLanguage={setLanguage}
					size={size}
				/>
			</div>
		</div>
	);
};
