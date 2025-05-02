import { useCallback, useRef } from "react";

const useDebounce = <T>(callback: (args: T) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounceCallback = useCallback(
    (args: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(args);
      }, delay);
    },
    [callback, delay],
  );

  return debounceCallback;
};

export { useDebounce };

//export default function Home() {
//  const [value, setValue] = useState<string>("");
//
//  const changeInputDebounce = useDebounce((value: string) => {
//    console.log("change debounce", value);
//  }, 500);
//
//  const handleChangeInput = (value: string) => {
//    setValue(value);
//    changeInputDebounce(value);
//  };
//
//  return (
//    <div className={styles.page}>
//      <input
//        value={value}
//        onChange={(e) => handleChangeInput(e.target.value)}
//      />
//    </div>
//  );
//}
