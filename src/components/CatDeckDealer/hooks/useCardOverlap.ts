import { useMemo } from "react";
import { useResponsiveDesign } from "./useResponsiveDesign";

export const useCardOverlap = () => {
  const { windowSize } = useResponsiveDesign();
  const overlap = useMemo(() => {
    const w = windowSize.width;

    if (w < 340) return 130;
    if (w < 375) return 125;
    if (w < 400) return 120;
    if (w < 425) return 120;
    if (w < 500) return 100;
    if (w < 550) return 90;
    if (w < 575) return 50;
    if (w < 600) return 40;
    if (w < 800) return 20;
    return 0;
  }, [windowSize.width]);
  return { overlap: overlap };
};
