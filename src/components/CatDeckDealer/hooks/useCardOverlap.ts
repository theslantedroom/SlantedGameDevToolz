import { useMemo } from "react";
import { useResponsiveDesign } from "./useResponsiveDesign";

export const useCardOverlap = () => {
  const { windowSize } = useResponsiveDesign();
  const overlap = useMemo(() => {
    const w = windowSize.width;
    if (w < 300) return 100;
    if (w < 320) return 90;
    if (w < 340) return 80;
    if (w < 375) return 70;
    if (w < 400) return 60;
    if (w < 475) return 50;
    if (w < 500) return 40;
    if (w < 550) return 20;
    if (w < 575) return 10;
    return 0;
  }, [windowSize.width]);
  return { overlap };
};
