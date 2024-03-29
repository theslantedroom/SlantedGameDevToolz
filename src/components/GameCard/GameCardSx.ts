import { CSSProperties } from "react";

export const gameCardShadow = {
  boxShadow:
    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
} as CSSProperties;

export const imgBoxShadow = {
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
} as CSSProperties;

export const textOutline = {
  black: {
    textShadow:
      "-1px -1px 0 #000,\n    1px -1px 0 #000,\n    -1px 1px 0 #000,\n    1px 1px 0 #000",
  },
  blackThick: {
    textShadow:
      "-1.5px -1.5px 0 #000,\n    1.5px -1.5px 0 #000,\n    -1.5px 1.5px 0 #000,\n    1.5px 1.5px 0 #000",
  },
  blackHalf: {
    textShadow:
      "-0.5px -0.5px 0 #000,\n    0.5px -0.5px 0 #000,\n    -0.5px 0.5px 0 #000,\n    0.5px 0.5px 0 #000",
  },
  white: {
    textShadow:
      "-1px -1px 0 #ffffff,\n    1px -1px 0 #ffffff,\n    -1px 1px 0 #ffffff,\n    1px 1px 0 #ffffff",
  },
  whiteHalf: {
    textShadow:
      "-0.5px -0.5px 0 #ffffff,\n    0.5px -0.5px 0 #ffffff,\n    -0.5px 0.5px 0 #ffffff,\n    1px 1px 0 #ffffff",
  },
  shadow: {
    textShadow:
      "2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(255,255,255,0.3)",
  },
};
export const cardPaper = {
  border: "1px solid rgba(255,255,255,255.2)",
  borderRadius: "9px",
  padding: 9,
  backgroundColor: "#D5CABD",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#4B4453",
  fontSize: 18,
  ...gameCardShadow,
} as CSSProperties;

export const sxInfo = {
  border: "1px solid rgba(0,0,0,0.4)",
  padding: 8,
  backgroundColor: "#FEFEDF",
} as CSSProperties;
export const selectedRedGlow = `0 0 10px rgba(255, 0, 0, 1), 0 0 20px 5px rgba(255, 0, 0, 0.8), 0 0 30px 15px rgba(255, 0, 0, 0.5)`;

export const selectedGreenGlow = `0 0 10px rgba(0, 255, 0, 1), 0 0 20px 5px rgba(0, 175, 0, 0.8), 0 0 30px 15px rgba(0, 225, 0, 0.5)`;

export const selectedPinkGlow = `0 0 10px rgba(255, 0, 255, 1), 0 0 20px 5px rgba(255, 0, 175, 0.8), 0 0 30px 15px rgba(255, 0, 225, 0.5)`;

export const selectedBabyBlueGlow = `0 0 10px rgba(173, 216, 230, 1), 0 0 20px 5px rgba(135, 206, 250, 0.8), 0 0 30px 15px rgba(135, 206, 250, 0.5)`;
