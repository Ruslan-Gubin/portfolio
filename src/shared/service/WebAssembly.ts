type WasmWrapper = typeof import("../../../public/main_wasm");

interface WebAssemblyInstance extends WebAssembly.Instance {
  _add_two_num: (a: number, b: number) => number;
  _minus_two_num: (a: number, b: number) => number;
}

class WasmModule {
  private isInit: boolean = false;
  private wrapper: WasmWrapper | null = null;
  private instance: WebAssemblyInstance | null = null;

  public calculateTotalSum(a: number, b: number) {
    if (!this.instance) return;
    return this.instance._add_two_num(a, b);
  }

  public async initWasm() {
    if (typeof window !== "undefined" && !this.isInit) {
      this.initWrapper()
        .then((wrapper) => this.initInstance(wrapper))
        .catch((error) => console.error(error));
    }
  }

  private initWrapper() {
    return import("../../../public/main_wasm.js")
      .then((res) => (this.wrapper = res))
      .catch((error) => error);
  }

  private initInstance(wrapper: WasmWrapper) {
    return wrapper
      .default({ locatefile: () => "/main.wasm" })
      .then((instance) => ((this.instance = instance), (this.isInit = true)))
      .catch((error) => error);
  }
}

export const wasmModule = new WasmModule();
