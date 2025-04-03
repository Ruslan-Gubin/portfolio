"use client";
import { useEffect, useState } from "react";
import { MainImage } from "@/shared/iu/MainImage";
import styles from "./styles/pages/Home.module.scss";

interface WebAssemblyInstance extends WebAssembly.Instance {
  _add_two_num: (a: number, b: number) => number;
  _minus_two_num: (a: number, b: number) => number;
}

interface WebAssemblyType {
  wrapper: typeof import("../../public/main_wasm.js") | null;
  binary: Uint8Array | null;
  instance: WebAssemblyInstance | null;
}

const WebAssembly: WebAssemblyType = {
  wrapper: null,
  binary: null,
  instance: null,
};

export default function Home() {
  const [numbers, setNumbers] = useState<{ a: number; b: number }>({
    a: 0,
    b: 0,
  });
  const [results, setResults] = useState(0);

  useEffect(() => {
    async function loadWasm() {
      if (typeof window !== "undefined") {
        WebAssembly.wrapper = await import("../../public/main_wasm.js");
        WebAssembly.instance = await WebAssembly.wrapper.default({
          locateFile: () => `/adder_wasm.wasm`,
        });
      }
    }

    loadWasm();
  }, []);

  const handleAdd = () => {
    if (WebAssembly.instance) {
      const res = WebAssembly.instance._add_two_num(
        numbers.a ? numbers.a : 1,
        numbers.b ? numbers.b : 1,
      );

      const minus = WebAssembly.instance._minus_two_num(numbers.a, 1);

      console.log(minus);
      setNumbers(() => ({ a: res, b: res }));
      setResults(res);
    }
  };

  return (
    <div className={styles.root}>
      <MainImage
        src="/assets/logo.png"
        alt="logo"
        classContainer={styles.logoContainer}
        classImg={styles.logoImage}
        priority
      />
      <h1 className={styles.text}>Portfolio</h1>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-center text-black">
          WASM Addition in Next.js
        </h1>
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="mb-4 space-y-4">
            <input
              type="number"
              value={numbers.a}
              onChange={(e) =>
                setNumbers({ ...numbers, a: parseInt(e.target.value) })
              }
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={numbers.b}
              onChange={(e) =>
                setNumbers({ ...numbers, b: parseInt(e.target.value) })
              }
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAdd}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
          <p className="mt-4 text-xl font-semibold text-center text-black">
            Result: <span className="text-blue-600">{results}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
