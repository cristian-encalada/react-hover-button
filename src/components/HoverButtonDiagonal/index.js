import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import getCssValue from "../../utils/getCssValue";
import "./index.css";
import "../common/common.css";

function HoverButtonDiagonal({
  width = "12em",
  height,
  background,
  maskColor = "#ef4654",
  children = "Hover me",
  onClick,
  style,
  maskStyle,
  disabled = false,
  loading = false,
  ...params
}) {
  const btnEle = useRef(null);
  const beforeBtn = useRef(null);
  const afterBtn = useRef(null);
  const [diagonal, setDiagonal] = useState(0);
  const [maskRotateDeg, setDeg] = useState(0);

  // Calculate diagonal and rotation degree
  useEffect(() => {
    if (btnEle.current) {
      const { offsetHeight, offsetWidth } = btnEle.current;
      setDiagonal(
        Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2))
      );

      setDeg(Math.atan(offsetHeight / offsetWidth) * (-180 / Math.PI));
    }
  }, [btnEle.current]);

  // Apply styles
  useLayoutEffect(() => {
    if (btnEle.current) {
      const commonStyleMap = {
        "--maskRotateDeg": maskRotateDeg + "deg",
        "--diagonal": diagonal + "px",
        "--color": maskColor,
        "--maskColor": maskColor,
      };
      for (let prop in commonStyleMap) {
        if (commonStyleMap.hasOwnProperty(prop)) {
          btnEle.current.style.setProperty(prop, commonStyleMap[prop]);
        }
      }
    }
  }, [diagonal, maskRotateDeg, maskColor]);

  const pseudoColor = { color: maskColor ? maskColor : "#ef4654" };

  return (
    <button
      className={`hover-button-diagonal ${
        loading && !disabled ? "button--loading" : ""
      } ${disabled ? "not-active" : ""}`}
      style={{
        background: background || "",
        height: getCssValue(height),
        lineHeight: getCssValue(height),
        width: getCssValue(width),
        ...style,
      }}
      onClick={onClick}
      ref={btnEle}
      {...params}
    >
      <div className="btn-before" style={{ ...pseudoColor, ...maskStyle }} ref={beforeBtn} />
      <span>{children}</span>
      <div className="btn-after" style={{ ...pseudoColor, ...maskStyle }} ref={afterBtn} />
    </button>
  );
}

export default React.memo(HoverButtonDiagonal);
