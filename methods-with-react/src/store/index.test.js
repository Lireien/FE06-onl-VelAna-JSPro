import store from "./index"

describe("store MAIN test", () => {
    ["dispatch", "subscribe", "getState"].forEach((m) => {
        test(`${m}`, () => expect(store[m]).toBeDefined());
    });
});