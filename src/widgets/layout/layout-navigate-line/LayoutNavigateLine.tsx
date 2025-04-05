"use client";
import { useEffect, useState } from "react";
import styles from "./LayoutNavigateLine.module.scss";

const getWitchLine = (y: number) => {
  let width = 75;

  if (y >= 500 && y < 1050) {
    width = 140;
  } else if (y >= 1050 && y < 1500) {
    width = 100;
  } else if (y >= 1500) {
    width = 95;
  }

  return width;
};

const getRightLine = (y: number) => {
  let width = 350;

  if (y >= 500 && y < 1050) {
    width = 200;
  } else if (y >= 1050 && y < 1500) {
    width = 90;
  } else if (y >= 1500) {
    width = -12;
  }

  return width;
};

const LayoutNavigateLine = () => {
  const [line, setLine] = useState<{ w: number; r: number }>({ w: 75, r: 350 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScrollHeight = () => {
      const y = window.scrollY;
      const w = getWitchLine(y);
      const r = getRightLine(y);

      if (w === line.w && r === line.r) return;
      setLine({ w, r });
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [line]);

  return (
    <div
      style={{
        right: line.r,
        width: line.w,
      }}
      className={styles.activeLine}
    ></div>
  );
};

export { LayoutNavigateLine };
