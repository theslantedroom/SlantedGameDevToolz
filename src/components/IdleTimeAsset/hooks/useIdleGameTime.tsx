import React, { useEffect, useMemo, useRef, useState } from "react";

export interface IdleGameTimeOptions {
  counterName?: string;
  dateCreated?: Date;
  timeRate?: number;
  counterSpeedMs?: number;
  minTimeRate?: number;
  maxTimeRate?: number;
}
export const useIdleGameTime = ({
  counterName = undefined,
  dateCreated = undefined,
  timeRate = 1,
  counterSpeedMs = 100,
}: IdleGameTimeOptions) => {
  const realTimeOnRender = useRef(new Date());
  const [nowDate, setNowDate] = useState(new Date());

  const [rate, setRate] = useState(timeRate);

  useEffect(() => {
    const counter = setInterval(() => {
      const newNow = new Date();
      setNowDate(newNow);
    }, counterSpeedMs);
    return function cleanup() {
      clearInterval(counter);
    };
  }, [counterSpeedMs]);

  const timeData = useMemo(() => {
    // runs each loop
    const isReverseTime = rate < 0;
    const startCalcDate = dateCreated ? dateCreated : realTimeOnRender.current;
    const msPassed = nowDate.getTime() - startCalcDate.getTime();
    const totalAccumulatedInt = msPassed * rate;
    const totalAccumulated = totalAccumulatedInt.toFixed(0);
    const futureDate = new Date(
      nowDate.getTime() + totalAccumulatedInt - msPassed
    );
    const pastDate = new Date(
      nowDate.getTime() - msPassed + totalAccumulatedInt
    );

    const realTimePast = convertMilliseconds(msPassed).textString;
    return {
      msPassed: msPassed,
      timeRate: `${rate}x`,
      totalAccumulated: totalAccumulated,
      realTimePast,
      dateCreated: dateCreated?.toLocaleDateString("en-US", dateOptions),
      finalDate: isReverseTime
        ? pastDate.toLocaleDateString("en-US", dateOptions)
        : futureDate.toLocaleDateString("en-US", dateOptions),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowDate]);

  return {
    timeData,
    setRate,
    rate,
    counterName,
  };
};

function convertMilliseconds(miliseconds: number) {
  const total_seconds = Math.floor(miliseconds / 1000);
  const total_minutes = Math.floor(total_seconds / 60);
  const total_hours = Math.floor(total_minutes / 60);
  const years = Math.floor(total_hours / 24 / 365);
  const days = Math.floor(total_hours / 24 - years * 365);

  const seconds = total_seconds % 60;
  const minutes = total_minutes % 60;
  const hours = total_hours % 24;

  return {
    breakdown: { d: days, h: hours, m: minutes, s: seconds },
    textString: `${years} years / ${days} days / ${hours}h${minutes}m${seconds}s`,
  };
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
