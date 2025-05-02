import { useCallback, useRef } from "react";

const useThrottle = <T>(callback: (args: T[]) => void, delay: number) => {
  const timer = useRef<boolean | null>(null);

  const throttledCallback = useCallback(
    (...args: T[]) => {
      if (timer.current) {
        return;
      }

      callback(args);
      timer.current = true;
      setTimeout(() => (timer.current = false), delay);
    },
    [callback, delay],
  );

  return throttledCallback;
};

export { useThrottle };

//const mouseMoveFn = useCallback(() => console.log("is mouse move"), []);
//const mouseMoveThrottle = useThrottle(mouseMoveFn, 500);
//
//useEffect(() => {
//  document.addEventListener("mousemove", mouseMoveThrottle);
//
//  return () => document.removeEventListener("mousemove", mouseMoveThrottle);
//}, [mouseMoveThrottle]);
