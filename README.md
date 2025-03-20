# using-defer

## Install

> npm install using-defer

## Usage

```ts
import { defer, asyncDefer } from "using-defer";

{
  using a = defer(() => {
    console.log("World");
  });

  using b = defer(() => {
    console.log("Hello");
  });

  // Hello
  // World
}

{
  await using a = asyncDefer(async () => {
    await delay(100);
    console.log("World");
  });

  await using b = asyncDefer(async () => {
    await delay(100);
    console.log("Hello");
  });
  // Hello
  // World
}
```
