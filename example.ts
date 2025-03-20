import { defer, asyncDefer } from "./index";

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

async function delay(ms: number) {
  await new Promise((res) => setTimeout(res, ms));
}
