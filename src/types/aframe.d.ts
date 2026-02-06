declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": any;
      "a-sky": any;
      "a-entity": any;
      [elemName: string]: any;
    }
  }
}

export {};
