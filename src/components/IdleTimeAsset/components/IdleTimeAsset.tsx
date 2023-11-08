import React, { CSSProperties } from "react";
import { IdleGameTimeOptions, useIdleGameTime } from "../hooks/useIdleGameTime";

export const IdleTimeAsset: React.FC<IdleGameTimeOptions> = (options) => {
  const {
    counterName,
    timeData,
    startCalcOnMount,
    setRate,
    rate,
    maxTimeRate,
    minTimeRate,
  } = useIdleGameTime(options);

  const centerFlexbox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const pStyle = {
    padding: "0px",
    margin: "5px",
    textAlign: "center",
  } as CSSProperties;

  return (
    <div
      style={
        {
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          ...centerFlexbox,
        } as CSSProperties
      }
    >
      {startCalcOnMount.current ? (
        <p style={pStyle}>{`started Calc On Mount Date`}</p>
      ) : null}
      <p style={pStyle}>
        {counterName} {timeData.dateCreated}
      </p>
      <p style={pStyle}>Time Rate: {timeData.timeRate}</p>
      <p style={pStyle}>
        {`Time Since Created:`} {timeData.realTimePast}
      </p>
      <p style={pStyle}>msPassed: {timeData.msPassed}</p>
      <p style={pStyle}>
        <hr></hr>
        <h6 style={pStyle}>{`Internal Stats`}</h6>
        {`total ms:`} {timeData.totalAccumulated}
      </p>
      <p style={pStyle}>{`Calculated Date:`}</p>
      <p style={pStyle}>{timeData?.finalDate}</p>
      <div>
        <input
          style={{ width: "300px" } as CSSProperties}
          type="range"
          max={maxTimeRate}
          min={minTimeRate}
          value={rate}
          id="myRange"
          step={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (typeof e.target.value !== "string") {
              console.error("input rate change error");
              return;
            }
            const newVal = parseInt(e.target.value);
            setRate(newVal);
          }}
          defaultValue={50}
        ></input>
      </div>
    </div>
  );
};
