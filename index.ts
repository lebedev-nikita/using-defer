export function defer(fn: () => void): Disposable {
  return {
    [Symbol.dispose]() {
      fn();
    },
  };
}

export function asyncDefer(fn: () => Promise<void>): AsyncDisposable {
  return {
    async [Symbol.asyncDispose]() {
      await fn();
    },
  };
}
